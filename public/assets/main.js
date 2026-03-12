const THEME_KEY = "theme";
const LANG_KEY = "lang";

const I18N = {
  zh: {
    meta: {
      title: "你的名字 · 个人主页",
      description: "个人主页：个人简介、研究方向、教育背景、主持项目、发表论文与联系方式。",
      ogTitle: "你的名字 · 个人主页",
      ogDescription: "个人简介、研究方向、教育背景、主持项目、发表论文与联系方式。",
    },
    a11y: {
      skip: "跳到主要内容",
      toggleTheme: "切换主题",
      toggleLang: "切换语言",
    },
    nav: {
      bio: "个人简介",
      research: "研究方向",
      education: "教育背景",
      projects: "主持项目",
      publications: "发表论文",
      contact: "联系",
    },
    hero: {
      kicker: "你好，我是",
      subtitle: "一句话自我介绍（例如：研究员 / 博士生 / 工程师 / 教师）。",
      github: "GitHub",
      viewProjects: "看项目",
      email: "邮箱联系",
      location: "所在地：上海（可改）",
      focus: "研究方向：方向 A / 方向 B / 方向 C（可改）",
      nowTitle: "现在在做",
      nowText: "用一句话写你最近的研究或工作重点（可改）。",
    },
    bio: {
      title: "个人简介",
      lead: "用 3–5 句话概括你的背景、兴趣与代表性成果。",
      body: "这里写你的个人简介：你是谁、研究/工作聚焦点、你擅长的方法或系统、以及你希望解决的问题（可改）。",
    },
    research: {
      title: "研究方向",
      lead: "列出你的主要研究主题与关键词。",
      r1: { title: "方向一（可改）", body: "用一句话描述方向与关键词（可改）。" },
      r2: { title: "方向二（可改）", body: "用一句话描述方向与关键词（可改）。" },
      r3: { title: "方向三（可改）", body: "用一句话描述方向与关键词（可改）。" },
    },
    edu: {
      title: "教育背景",
      lead: "按时间倒序展示学位、学校与研究/课程重点。",
      e1: { title: "学校 · 学位（可改）", body: "导师/方向/奖学金/代表课程（可改）。" },
      e2: { title: "学校 · 学位（可改）", body: "导师/方向/奖学金/代表课程（可改）。" },
    },
    projects: {
      title: "主持项目",
      lead: "突出你作为负责人/核心成员的项目：资金来源、职责与产出。",
      link: { more: "详情" },
      p1: {
        title: "项目名称 A（可改）",
        tag: "基金/校级/企业合作（可改）",
        body: "职责：项目负责人。产出：原型/论文/系统/开源等（可改）。",
      },
      p2: {
        title: "项目名称 B（可改）",
        tag: "国家/省部级（可改）",
        body: "职责：项目负责人。产出：数据集/平台/标准/专利等（可改）。",
      },
      p3: {
        title: "项目名称 C（可改）",
        tag: "企业合作（可改）",
        body: "职责：项目负责人。产出：落地应用与效果指标（可改）。",
      },
    },
    pubs: {
      title: "发表论文",
      lead: "按时间倒序列出论文/专著/会议与链接（PDF/DOI）。",
      a1: {
        title: "论文标题 A（可改）",
        body: "作者列表 · 会议/期刊 · 关键词（可改）。",
      },
      a2: {
        title: "论文标题 B（可改）",
        body: "作者列表 · 会议/期刊 · 关键词（可改）。",
      },
    },
    contact: {
      title: "联系我",
      lead: "把链接替换成你的真实账号与邮箱。",
      channels: "常用渠道",
      cvTitle: "简历 / 作品集",
      cvBody: "你可以把 PDF 简历放到仓库里（例如 public/resume.pdf），然后在这里链接（可改）。",
      cvDownload: "下载简历（占位）",
      backProjects: "回到项目",
      tip: "提示：GitHub Pages 适合托管静态个人主页与作品展示。",
    },
    footer: {
      text: "你的名字 · Built with GitHub Pages",
    },
  },
  en: {
    meta: {
      title: "Your Name · Homepage",
      description:
        "Personal homepage: bio, research interests, education, projects, publications, and contact.",
      ogTitle: "Your Name · Homepage",
      ogDescription: "Bio, research interests, education, projects, publications, and contact.",
    },
    a11y: {
      skip: "Skip to content",
      toggleTheme: "Toggle theme",
      toggleLang: "Toggle language",
    },
    nav: {
      bio: "Bio",
      research: "Research",
      education: "Education",
      projects: "Projects",
      publications: "Publications",
      contact: "Contact",
    },
    hero: {
      kicker: "Hi, I'm",
      subtitle:
        "One-line intro (e.g., Researcher / PhD Candidate / Engineer / Faculty).",
      github: "GitHub",
      viewProjects: "Projects",
      email: "Email",
      location: "Location: Shanghai (edit me)",
      focus: "Interests: Topic A / Topic B / Topic C (edit me)",
      nowTitle: "Now",
      nowText: "Describe what you are currently working on (edit me).",
    },
    bio: {
      title: "Bio",
      lead: "Summarize your background, interests, and key outcomes in 3–5 sentences.",
      body: "Write your bio here: who you are, what you work on, and what problems you care about (edit me).",
    },
    research: {
      title: "Research Interests",
      lead: "List your main research topics and keywords.",
      r1: { title: "Area 1 (edit me)", body: "One-line description + keywords (edit me)." },
      r2: { title: "Area 2 (edit me)", body: "One-line description + keywords (edit me)." },
      r3: { title: "Area 3 (edit me)", body: "One-line description + keywords (edit me)." },
    },
    edu: {
      title: "Education",
      lead: "Reverse chronological order: degree, institution, and focus.",
      e1: { title: "Institution · Degree (edit me)", body: "Advisor / focus / awards / coursework (edit me)." },
      e2: { title: "Institution · Degree (edit me)", body: "Advisor / focus / awards / coursework (edit me)." },
    },
    projects: {
      title: "Led Projects",
      lead: "Highlight projects you led: funding, role, and outcomes.",
      link: { more: "Details" },
      p1: {
        title: "Project A (edit me)",
        tag: "Grant / University / Industry (edit me)",
        body: "Role: PI/Lead. Outcomes: prototype / paper / system / open source (edit me).",
      },
      p2: {
        title: "Project B (edit me)",
        tag: "National / Provincial (edit me)",
        body: "Role: PI/Lead. Outcomes: dataset / platform / standard / patent (edit me).",
      },
      p3: {
        title: "Project C (edit me)",
        tag: "Industry (edit me)",
        body: "Role: PI/Lead. Outcomes: deployed product + metrics (edit me).",
      },
    },
    pubs: {
      title: "Publications",
      lead: "Reverse chronological order with links (PDF/DOI).",
      a1: { title: "Paper Title A (edit me)", body: "Authors · Venue · Keywords (edit me)." },
      a2: { title: "Paper Title B (edit me)", body: "Authors · Venue · Keywords (edit me)." },
    },
    contact: {
      title: "Contact",
      lead: "Replace these placeholders with your real accounts.",
      channels: "Channels",
      cvTitle: "CV / Portfolio",
      cvBody: "You can add a PDF to the repo (e.g., public/resume.pdf) and link it here (edit me).",
      cvDownload: "Download CV (placeholder)",
      backProjects: "Back to projects",
      tip: "Tip: GitHub Pages is great for hosting a static academic homepage and portfolio.",
    },
    footer: {
      text: "Your Name · Built with GitHub Pages",
    },
  },
};

function get(obj, path) {
  return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

function detectLang() {
  const navLang =
    (navigator.languages && navigator.languages[0]) || navigator.language || "";
  return navLang.toLowerCase().startsWith("zh") ? "zh" : "en";
}

function applyLang(lang) {
  const dict = I18N[lang] || I18N.en;

  document.documentElement.dataset.lang = lang;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

  // title
  const titleEl = document.querySelector("title[data-i18n]");
  if (titleEl) document.title = get(dict, titleEl.dataset.i18n) || document.title;

  // meta content
  document.querySelectorAll("[data-i18n-content]").forEach((el) => {
    const key = el.dataset.i18nContent;
    const value = get(dict, key);
    if (typeof value === "string") el.setAttribute("content", value);
  });

  // text content
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = get(dict, key);
    if (typeof value === "string") el.textContent = value;
  });

  // lang toggle badge
  const badge = document.querySelector("[data-lang-toggle] .lang");
  if (badge) badge.textContent = lang === "zh" ? "EN" : "中文";
}

function initLang() {
  const saved = localStorage.getItem(LANG_KEY);
  const lang = saved || detectLang();
  applyLang(lang);

  const btn = document.querySelector("[data-lang-toggle]");
  btn?.addEventListener("click", () => {
    const current = document.documentElement.dataset.lang || detectLang();
    const next = current === "zh" ? "en" : "zh";
    localStorage.setItem(LANG_KEY, next);
    applyLang(next);
  });
}

function getSystemTheme() {
  return window.matchMedia?.("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const icon = document.querySelector("[data-theme-toggle] .icon");
  if (icon) icon.textContent = theme === "light" ? "☼" : "☾";
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const theme = saved || getSystemTheme();
  applyTheme(theme);

  const btn = document.querySelector("[data-theme-toggle]");
  btn?.addEventListener("click", () => {
    const current = document.documentElement.dataset.theme || getSystemTheme();
    const next = current === "light" ? "dark" : "light";
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  });
}

function initYear() {
  const el = document.querySelector("[data-year]");
  if (el) el.textContent = String(new Date().getFullYear());
}

initLang();
initTheme();
initYear();
