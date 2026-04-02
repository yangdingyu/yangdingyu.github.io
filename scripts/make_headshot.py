#!/usr/bin/env python3
from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image, ImageEnhance, ImageFilter, ImageOps


def _center_square(img: Image.Image) -> Image.Image:
    w, h = img.size
    side = min(w, h)
    left = (w - side) // 2
    # Bias slightly upward for typical portraits (more headroom).
    top = (h - side) // 2 - int(side * 0.06)
    top = max(0, min(top, h - side))
    return img.crop((left, top, left + side, top + side))


def _enhance(img: Image.Image) -> Image.Image:
    # Subtle, portrait-friendly tweaks.
    img = ImageOps.exif_transpose(img)
    img = img.convert("RGB")
    img = ImageEnhance.Color(img).enhance(1.03)
    img = ImageEnhance.Brightness(img).enhance(1.02)
    img = ImageEnhance.Contrast(img).enhance(1.06)
    img = img.filter(ImageFilter.UnsharpMask(radius=1.2, percent=85, threshold=3))
    return img


def build(input_path: Path, out_dir: Path) -> None:
    out_dir.mkdir(parents=True, exist_ok=True)

    img = Image.open(input_path)
    img = _enhance(img)
    img = _center_square(img)

    sizes = [512, 256]
    for size in sizes:
        resized = img.resize((size, size), Image.Resampling.LANCZOS)
        webp = out_dir / ("headshot.webp" if size == 512 else f"headshot-{size}.webp")
        resized.save(webp, "WEBP", quality=86, method=6)

    # PNG fallback for older environments / debugging.
    png = out_dir / "headshot.png"
    img.resize((512, 512), Image.Resampling.LANCZOS).save(png, "PNG", optimize=True)


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Create optimized square headshot assets for the homepage."
    )
    parser.add_argument(
        "--input",
        type=Path,
        default=Path("public/assets/headshot-source.jpg"),
        help="Input portrait image path (jpg/png).",
    )
    parser.add_argument(
        "--out-dir",
        type=Path,
        default=Path("public/assets"),
        help="Output directory.",
    )
    args = parser.parse_args()

    if not args.input.exists():
        raise SystemExit(
            f"Input not found: {args.input}\n"
            "Tip: save your photo as public/assets/headshot-source.jpg (or pass --input)."
        )

    build(args.input, args.out_dir)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
