#!/usr/bin/env python3
from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image, ImageEnhance, ImageFilter, ImageOps


def _enhance(img: Image.Image) -> Image.Image:
    # Subtle, portrait-friendly tweaks.
    img = ImageOps.exif_transpose(img)
    img = img.convert("RGB")
    img = ImageEnhance.Color(img).enhance(1.03)
    img = ImageEnhance.Brightness(img).enhance(1.02)
    img = ImageEnhance.Contrast(img).enhance(1.06)
    img = img.filter(ImageFilter.UnsharpMask(radius=1.2, percent=85, threshold=3))
    return img


def _compose_square(img: Image.Image, out_size: int, margin: float = 0.06) -> Image.Image:
    """
    Create a square headshot without cropping the face:
    - background: blurred cover
    - foreground: contain with a small margin
    """
    # Background (cover) + blur
    bg = ImageOps.fit(img, (out_size, out_size), method=Image.Resampling.LANCZOS)
    bg = bg.filter(ImageFilter.GaussianBlur(radius=max(10, out_size // 48)))
    bg = ImageEnhance.Brightness(bg).enhance(0.97)
    bg = ImageEnhance.Contrast(bg).enhance(1.05)

    # Foreground (contain) with margins
    w, h = img.size
    inner = int(out_size * (1 - 2 * margin))
    scale = inner / max(w, h)
    fg_w = max(1, int(round(w * scale)))
    fg_h = max(1, int(round(h * scale)))
    fg = img.resize((fg_w, fg_h), Image.Resampling.LANCZOS)

    x = (out_size - fg_w) // 2
    y = (out_size - fg_h) // 2
    bg.paste(fg, (x, y))
    return bg


def build(input_path: Path, out_dir: Path) -> None:
    out_dir.mkdir(parents=True, exist_ok=True)

    img = Image.open(input_path)
    img = _enhance(img)

    sizes = [512, 256]
    for size in sizes:
        composed = _compose_square(img, size, margin=0.065)
        webp = out_dir / ("headshot.webp" if size == 512 else f"headshot-{size}.webp")
        composed.save(webp, "WEBP", quality=86, method=6)

    # PNG fallback for older environments / debugging.
    png = out_dir / "headshot.png"
    _compose_square(img, 512, margin=0.065).save(png, "PNG", optimize=True)


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
