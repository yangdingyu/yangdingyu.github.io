const THEME_KEY = "theme";
const LANG_KEY = "lang";

const I18N = {
  zh: {
    name: "杨定裕",
    meta: {
      title: "杨定裕 · 个人主页",
      description:
        "浙江大学区块链与数据安全全国重点实验室研究员：研究方向、主持项目、发表论文与联系方式。",
      ogTitle: "杨定裕 · 个人主页",
      ogDescription:
        "浙江大学区块链与数据安全全国重点实验室研究员：研究方向、主持项目、发表论文与联系方式。",
    },
    a11y: {
      skip: "跳到主要内容",
      toggleTheme: "切换主题",
      toggleLang: "切换语言",
    },
    nav: {
      bio: "个人简介",
      research: "研究方向",
      projects: "主持项目",
      publications: "发表论文",
      contact: "联系",
    },
    hero: {
      kicker: "你好，我是",
      subtitle:
        "浙江大学区块链与数据安全全国重点实验室 研究员 · CCF 数据库&协同计算专委 执行委员",
      viewProjects: "看项目",
      viewPublications: "看论文",
      email: "邮箱联系",
      affiliation: "单位：浙江大学区块链与数据安全全国重点实验室",
      focus: "研究方向：大数据处理 · 大模型向量检索 · 软硬结合优化 · 资源调度",
      nowText:
        "多模态数据库优化、多智能体协同与资源调度优化、大模型推理优化。",
      cardTitle: "学术概览",
      h1: "发表论文 60+（CCF 推荐会议与期刊）",
      h2: "阿里巴巴集团 6 年（性能优化与资源调度）",
      h3: "主持 NSFC 青年、CCF-华为/蚂蚁基金等项目",
    },
    bio: {
      title: "个人简介",
      lead: "研究员 · 数据库与数据智能系统",
      p1:
        "杨定裕，浙江大学区块链与数据安全全国重点实验室研究员，CCF 数据库&协同计算专委执行委员，2015 年博士毕业于上海交通大学。研究方向包括大数据处理、大模型向量检索、软硬结合性能优化与资源调度等。",
      p2:
        "曾就职于阿里巴巴集团 6 年，负责集群软硬件性能优化、大规模数据中心资源调度等工作，获得阿里巴巴双十一勇于冲锋奖、卓越个人奖、丹甲金戎奖。",
      p3:
        "在 CCF 推荐会议和期刊上发表论文 60 余篇，包含 ASPLOS、PVLDB、SIGMOD、WWW、ASE、VLDB Journal、ICPP、TPDS 等；主持国家自然科学青年基金、CCF-华为胡杨林基金数据库专项、CCF-蚂蚁软硬协同基金等攻关项目。",
    },
    research: {
      title: "研究方向",
      lead: "系统方向（数据库/系统/AI Infra）与软硬协同优化。",
      r1: {
        title: "大数据处理与数据库系统",
        body: "面向规模化数据处理的执行引擎、存储与查询优化，关注性能与可维护性。",
      },
      r2: {
        title: "大模型向量检索与 AI-Native 系统",
        body: "向量检索、模型管理与推理系统，探索任务驱动的 AI-Native DBMS 设计。",
      },
      r3: {
        title: "软硬结合优化与资源调度",
        body: "集群/数据中心资源调度、GPU 集群调度与性能优化，结合软硬协同提升效率。",
      },
    },
    projects: {
      title: "主持项目",
      lead: "部分攻关项目（可按需补充项目周期、角色与产出）。",
      p1: {
        title: "国家自然科学青年基金",
        tag: "NSFC",
        body: "青年基金项目（可补充项目名称、周期与研究内容）。",
      },
      p2: {
        title: "CCF-华为胡杨林基金数据库专项",
        tag: "CCF × Huawei",
        body: "数据库专项攻关项目（可补充项目名称、周期与产出）。",
      },
      p3: {
        title: "CCF-蚂蚁软硬协同基金",
        tag: "CCF × Ant",
        body: "软硬协同方向攻关项目（可补充项目名称、周期与产出）。",
      },
      p4: {
        title: "阿里巴巴 AIR 项目",
        tag: "Alibaba",
        body: "企业科研项目（可补充研究主题、职责与效果指标）。",
      },
    },
    pubs: {
      title: "发表论文",
      lead:
        "近年代表论文（* 表示通讯作者；如需可补充 PDF/DOI/ArXiv 链接）。",
      y2026: {
        p1: {
          title:
            "MorphingDB: A Task-Centric AI-Native DBMS for Model Management and Inference",
          body:
            "Sai Wu, Ruichen Xia, Dingyu Yang (*), Rui Wang, Huihang Lai, Jiarui Guan, Jiameng Bai, Dongxiang Zhang, Xiu Tang, Zhongle Xie, Peng Lu, Gang Chen. SIGMOD 2026. [CCF A]",
        },
        p2: {
          title: "Query-Aware Path Inference from Spatial Videos",
          body:
            "Taihang Dong, Dingyu Yang, Ping Chen, Dongxiang Zhang. SIGMOD 2026. [CCF A]",
        },
        p3: {
          title:
            "GFS: A Preemption-aware Scheduling Framework for GPU Clusters with Predictive Spot Instance Management",
          body:
            "Jiaang Duan, Shenglin Xu, Shiyou Qian, Dingyu Yang (*), Kangjin Wang, Liping Zhang, Gang Chen. ASPLOS 2026. [CCF A]",
        },
        p4: {
          title: "Efficient and Accurate Cross-Camera Vehicle Trajectory Recovery",
          body:
            "Taihang Dong, Dingyu Yang (*), Dongping Zhang, Sai Wu, Shaojie Qiao, Dongxiang Zhang. IEEE TKDE. 2026. Accepted. [CCF A]",
        },
      },
    },
    contact: {
      title: "联系我",
      lead: "欢迎学术交流、项目合作与学生加入。",
      channels: "常用渠道",
      joinTitle: "团队招收",
      joinBody:
        "团队招收：多模态数据库优化、多智能体协同与资源调度优化、大模型推理优化等方向，欢迎联系 (yangdingyu@zju.edu.cn)，加入数据库与数据智能团队。",
      joinCta: "邮件联系",
      joinMore: "看研究方向",
    },
    footer: {
      text: "杨定裕 · Built with GitHub Pages",
    },
  },
  en: {
    name: "Dingyu Yang",
    meta: {
      title: "Dingyu Yang · Homepage",
      description:
        "Researcher at Zhejiang University: research interests, projects, publications, and contact.",
      ogTitle: "Dingyu Yang · Homepage",
      ogDescription:
        "Research interests, projects, publications, and contact.",
    },
    a11y: {
      skip: "Skip to content",
      toggleTheme: "Toggle theme",
      toggleLang: "Toggle language",
    },
    nav: {
      bio: "Bio",
      research: "Research",
      projects: "Projects",
      publications: "Publications",
      contact: "Contact",
    },
    hero: {
      kicker: "Hi, I'm",
      subtitle:
        "Researcher, State Key Laboratory of Blockchain and Data Security, Zhejiang University · Executive Committee Member, CCF TC on Databases & Cooperative Computing",
      viewProjects: "Projects",
      viewPublications: "Publications",
      email: "Email",
      affiliation:
        "Affiliation: State Key Laboratory of Blockchain and Data Security, Zhejiang University",
      focus:
        "Interests: big data processing · vector retrieval for LLMs · SW/HW co-optimization · resource scheduling",
      nowText:
        "Multimodal database optimization, multi-agent coordination & scheduling, and LLM inference optimization.",
      cardTitle: "Academic Snapshot",
      h1: "60+ publications in CCF-recommended venues/journals",
      h2: "6 years at Alibaba (performance & datacenter scheduling)",
      h3: "Led NSFC Young Scientists Fund and CCF–Huawei/Ant projects",
    },
    bio: {
      title: "Bio",
      lead: "Researcher · Database & Data Intelligence Systems",
      p1:
        "Dingyu Yang is a Researcher at the State Key Laboratory of Blockchain and Data Security, Zhejiang University, and an Executive Committee Member of the CCF TC on Databases & Cooperative Computing. He received his Ph.D. from Shanghai Jiao Tong University in 2015.",
      p2:
        "He previously worked at Alibaba Group for six years, focusing on system performance optimization and large-scale datacenter resource scheduling, and received multiple internal awards including the Double 11 “Charge Ahead” Award, Outstanding Individual Award, and Danjia Jinyong Award.",
      p3:
        "He has published 60+ papers in CCF-recommended venues and journals (e.g., ASPLOS, PVLDB, SIGMOD, WWW, ASE, VLDB Journal, ICPP, TPDS) and led multiple research projects including the NSFC Young Scientists Fund, the CCF-Huawei “Populus euphratica” Database Fund, and the CCF-Ant SW/HW Co-optimization Fund.",
    },
    research: {
      title: "Research Interests",
      lead: "Systems (databases / systems / AI infra) and SW/HW co-optimization.",
      r1: {
        title: "Big Data Processing & Database Systems",
        body:
          "Execution engines, storage, and query optimization for large-scale data processing, with a focus on performance and maintainability.",
      },
      r2: {
        title: "Vector Retrieval & AI-Native Systems",
        body:
          "Vector search, model management, and inference systems; task-centric AI-native DBMS design.",
      },
      r3: {
        title: "Resource Scheduling & SW/HW Co-optimization",
        body:
          "Cluster/datacenter scheduling, GPU cluster scheduling, and performance optimization via software-hardware collaboration.",
      },
    },
    projects: {
      title: "Led Projects",
      lead: "Selected projects (add time span, role, and outputs as needed).",
      p1: {
        title: "NSFC Young Scientists Fund",
        tag: "NSFC",
        body: "Young Scientists Fund project (add title, duration, and scope).",
      },
      p2: {
        title: "CCF–Huawei “Populus euphratica” Database Fund",
        tag: "CCF × Huawei",
        body: "Database-focused research project (add title, duration, and outputs).",
      },
      p3: {
        title: "CCF–Ant SW/HW Co-optimization Fund",
        tag: "CCF × Ant",
        body: "SW/HW co-optimization research project (add title, duration, and outputs).",
      },
      p4: {
        title: "Alibaba AIR Project",
        tag: "Alibaba",
        body: "Industry research project (add topic, role, and impact metrics).",
      },
    },
    pubs: {
      title: "Publications",
      lead:
        "Selected recent publications (* indicates corresponding author; add PDF/DOI/ArXiv links if needed).",
      y2026: {
        p1: {
          title:
            "MorphingDB: A Task-Centric AI-Native DBMS for Model Management and Inference",
          body:
            "Sai Wu, Ruichen Xia, Dingyu Yang (*), Rui Wang, Huihang Lai, Jiarui Guan, Jiameng Bai, Dongxiang Zhang, Xiu Tang, Zhongle Xie, Peng Lu, Gang Chen. SIGMOD 2026. [CCF A]",
        },
        p2: {
          title: "Query-Aware Path Inference from Spatial Videos",
          body:
            "Taihang Dong, Dingyu Yang, Ping Chen, Dongxiang Zhang. SIGMOD 2026. [CCF A]",
        },
        p3: {
          title:
            "GFS: A Preemption-aware Scheduling Framework for GPU Clusters with Predictive Spot Instance Management",
          body:
            "Jiaang Duan, Shenglin Xu, Shiyou Qian, Dingyu Yang (*), Kangjin Wang, Liping Zhang, Gang Chen. ASPLOS 2026. [CCF A]",
        },
        p4: {
          title: "Efficient and Accurate Cross-Camera Vehicle Trajectory Recovery",
          body:
            "Taihang Dong, Dingyu Yang (*), Dongping Zhang, Sai Wu, Shaojie Qiao, Dongxiang Zhang. IEEE TKDE. 2026. Accepted. [CCF A]",
        },
      },
    },
    contact: {
      title: "Contact",
      lead: "Feel free to reach out for academic discussions, collaborations, or joining the team.",
      channels: "Channels",
      joinTitle: "Recruiting",
      joinBody:
        "We are recruiting in multimodal database optimization, multi-agent coordination & scheduling, and LLM inference optimization. Contact: yangdingyu@zju.edu.cn. Welcome to join our Database & Data Intelligence team.",
      joinCta: "Email me",
      joinMore: "Research interests",
    },
    footer: {
      text: "Dingyu Yang · Built with GitHub Pages",
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
