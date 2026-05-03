const THEME_KEY = "theme";
const LANG_KEY = "lang";
const GA_STORAGE_KEY = "ga-disabled";

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
      service: "学术服务",
      projects: "主持项目",
      publications: "发表论文",
      contact: "联系",
    },
    hero: {
      siteTitle: "杨定裕个人主页",
      kicker: "你好，我是",
      subtitle:
        "浙江大学区块链与数据安全全国重点实验室 研究员 · CCF 数据库&协同计算专委 执行委员",
      viewProjects: "看项目",
      viewPublications: "看论文",
      viewStats: "看统计",
      email: "邮箱联系",
      focus: "研究方向：AI+DB、大模型推理优化、软硬协同与资源调度",
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
        "杨定裕，浙江大学区块链与数据安全全国重点实验室研究员，CCF 数据库&协同计算专委执行委员，2015 年博士毕业于上海交通大学。",
      p2:
        "曾就职于阿里巴巴集团 6 年，负责集群软硬件性能优化、大规模数据中心资源调度等工作，获得阿里巴巴双十一勇于冲锋奖、卓越个人奖、丹甲金戎奖。",
      p3:
        "在 CCF 推荐会议和期刊上发表论文 60 余篇，包含 ASPLOS、PVLDB、SIGMOD、WWW、ASE、VLDB Journal、ICPP、TPDS 等；主持国家自然科学青年基金、CCF-华为胡杨林基金数据库专项、CCF-蚂蚁软硬协同基金等攻关项目。",
    },
    projects: {
      title: "主持项目",
      lead: "按时间倒序展示的科研项目。",
      p1: {
        title: "阿里巴巴 AI 专项：Serverless 大模型推理快速启动技术研究",
        meta:
          "企业科研项目，主持，起止时间：2026-2027。围绕 Serverless 场景下大模型推理的快速冷启动与性能优化开展研究。",
      },
      p2: {
        title: "浙江省尖兵计划（省重点研发项目）：面向科学研究的双态推理建模机制与验证方法研究（AI For Science）",
        meta:
          "省重点研发项目，参与人（排名第 6），起止时间：2026-2028。聚焦面向科学研究的双态推理建模机制与验证方法研究。",
      },
      p3: {
        title: "CCF-蚂蚁科研基金软硬协同专项：同态加密算法中密文参数调优与数据缓存优化",
        meta:
          "CCF-蚂蚁科研基金软硬协同专项，主持，起止时间：2025-2026。研究同态加密算法中的密文参数调优与数据缓存优化。",
      },
      p4: {
        title: "浙江省尖兵计划（省重点研发项目）：多样化合规化多模态数据鲁棒合成扩增技术",
        meta:
          "省重点研发项目，主要参与人（排名第 2），起止时间：2025-2026。研究多样化、合规化多模态数据的鲁棒合成与扩增技术。",
      },
      p5: {
        title: "CCF-华为胡杨林基金数据库专项：基于分布式流处理的向量索引动态更新与 GPU 加速查询优化研究",
        meta:
          "CCF-华为胡杨林基金数据库专项，主持，起止时间：2024-2025，已结题。研究基于分布式流处理的向量索引动态更新与 GPU 加速查询优化。",
      },
      p6: {
        title: "国家自然科学青年基金：基于分布式流处理的动态图在线查询技术研究",
        meta:
          "国家自然科学青年基金，主持，起止时间：2018.01-2020.12，已结题。研究基于分布式流处理的动态图在线查询技术。",
      },
    },
    pubs: {
      title: "发表论文",
      lead: "按年份展示论文列表。",
    },
    stats: {
      title: "访问统计",
      lead: "公开显示累计访客与页面浏览量，地区分布通过 GA4 后台查看。",
      visitors: "累计访客",
      views: "页面浏览",
      regions: "地区分布",
      regionNote: "国家 / 地区 / 城市分布可在 Google Analytics 4 报表中查看。",
      loading: "统计加载中",
    },
    statsPage: {
      metaTitle: "访问统计 · 杨定裕个人主页",
      metaDescription: "查看主页访问人数、页面浏览量，以及地区分布说明。",
      title: "访问统计",
      lead: "本页公开显示主页累计访客与页面浏览量。",
      backendTitle: "地区分布与后台分析",
      backendBody:
        "国家、地区与城市分布建议在 Google Analytics 4 后台查看，可在 Reports → Demographics → Demographic details 中获取更完整的访问分析。",
    },
    service: {
      title: "学术服务",
      lead: "学术组织服务与国际期刊 / 会议审稿工作。",
      committeeTitle: "学术任职",
      committee1: "CCF 数据库专委 执行委员",
      committee2: "CCF 协同计算专委 执行委员",
      reviewTitle: "审稿服务",
      review1: "Reviewer of ACM KDD",
      review2: "Reviewer of ACM Multimedia",
      review3: "Reviewer of IEEE Transactions on Knowledge and Data Engineering",
      review4: "Reviewer of IEEE Transactions on Cloud Computing",
      review5: "Reviewer of Information Fusion",
      review6: "Reviewer of The Journal of Supercomputing",
    },
    contact: {
      title: "联系我",
      lead: "欢迎学术交流、项目合作与学生加入。",
      channels: "常用渠道",
      joinTitle: "团队招收",
      joinBody:
        "团队招收：多模态数据库优化、多智能体协同与资源调度优化、大模型推理优化等方向，欢迎联系 (yangdingyu@zju.edu.cn)，加入数据库与数据智能团队。",
      joinCta: "邮件联系",
      joinMore: "看项目",
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
      service: "Service",
      projects: "Projects",
      publications: "Publications",
      contact: "Contact",
    },
    hero: {
      siteTitle: "Dingyu Yang Homepage",
      kicker: "Hi, I'm",
      subtitle:
        "Researcher, State Key Laboratory of Blockchain and Data Security, Zhejiang University · Executive Committee Member, CCF TC on Databases & Cooperative Computing",
      viewProjects: "Projects",
      viewPublications: "Publications",
      viewStats: "Statistics",
      email: "Email",
      focus:
        "Research Interests: AI+DB, LLM inference optimization, SW/HW co-optimization and resource scheduling",
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
    projects: {
      title: "Led Projects",
      lead: "Research projects in reverse chronological order.",
      p1: {
        title: "Alibaba AI Special Project: Serverless Fast Startup Techniques for Large Model Inference",
        meta:
          "Industry research project, Principal Investigator, 2026-2027. Focused on fast cold-start and performance optimization for LLM inference in serverless environments.",
      },
      p2: {
        title: "Zhejiang Pioneer Program (Provincial Key R&D): Bimodal Reasoning Modeling and Verification Methods for Scientific Research (AI for Science)",
        meta:
          "Provincial key R&D project, Participant (ranked No. 6), 2026-2028. Focused on bimodal reasoning modeling and verification methods for AI for Science.",
      },
      p3: {
        title: "CCF-Ant Research Fund on SW/HW Co-optimization: Ciphertext Parameter Tuning and Data Cache Optimization for Homomorphic Encryption Algorithms",
        meta:
          "CCF-Ant Research Fund on SW/HW Co-optimization, Principal Investigator, 2025-2026. Focused on ciphertext parameter tuning and data cache optimization for homomorphic encryption algorithms.",
      },
      p4: {
        title: "Zhejiang Pioneer Program (Provincial Key R&D): Robust Synthesis and Augmentation of Diverse, Compliant Multimodal Data",
        meta:
          "Provincial key R&D project, Major Participant (ranked No. 2), 2025-2026. Focused on robust synthesis and augmentation of diverse, compliant multimodal data.",
      },
      p5: {
        title: "CCF-Huawei “Populus euphratica” Database Fund: Dynamic Vector Index Updates and GPU-Accelerated Query Optimization Based on Distributed Stream Processing",
        meta:
          "CCF-Huawei “Populus euphratica” Database Fund, Principal Investigator, 2024-2025, completed. Focused on dynamic vector index updates and GPU-accelerated query optimization based on distributed stream processing.",
      },
      p6: {
        title: "NSFC Young Scientists Fund: Online Query Techniques for Dynamic Graphs Based on Distributed Stream Processing",
        meta:
          "NSFC Young Scientists Fund, Principal Investigator, 2018.01-2020.12, completed. Focused on online query techniques for dynamic graphs based on distributed stream processing.",
      },
    },
    pubs: {
      title: "Publications",
      lead: "Publication list grouped by year.",
    },
    stats: {
      title: "Site Statistics",
      lead: "Public counters show total visitors and page views, while geographic distribution is tracked in GA4.",
      visitors: "Visitors",
      views: "Page Views",
      regions: "Regions",
      regionNote: "Country, region, and city distributions are available in Google Analytics 4 reports.",
      loading: "Loading",
    },
    statsPage: {
      metaTitle: "Statistics · Dingyu Yang Homepage",
      metaDescription: "View public visitor counts, page views, and guidance for geographic analytics.",
      title: "Site Statistics",
      lead: "This page publicly shows total visitors and page views for the homepage.",
      backendTitle: "Geographic Analytics",
      backendBody:
        "Country, region, and city distributions are best reviewed in Google Analytics 4 under Reports → Demographics → Demographic details.",
    },
    service: {
      title: "Academic Service",
      lead: "Professional service roles and reviewing activities.",
      committeeTitle: "Committee Roles",
      committee1: "Executive Committee Member, CCF Technical Committee on Databases",
      committee2: "Executive Committee Member, CCF Technical Committee on Cooperative Computing",
      reviewTitle: "Reviewing Service",
      review1: "Reviewer of ACM KDD",
      review2: "Reviewer of ACM Multimedia",
      review3: "Reviewer of IEEE Transactions on Knowledge and Data Engineering",
      review4: "Reviewer of IEEE Transactions on Cloud Computing",
      review5: "Reviewer of Information Fusion",
      review6: "Reviewer of The Journal of Supercomputing",
    },
    contact: {
      title: "Contact",
      lead: "Feel free to reach out for academic discussions, collaborations, or joining the team.",
      channels: "Channels",
      joinTitle: "Recruiting",
      joinBody:
        "We are recruiting in multimodal database optimization, multi-agent coordination & scheduling, and LLM inference optimization. Contact: yangdingyu@zju.edu.cn. Welcome to join our Database & Data Intelligence team.",
      joinCta: "Email me",
      joinMore: "Projects",
    },
    footer: {
      text: "Dingyu Yang · Built with GitHub Pages",
    },
  },
};

const PUBLICATIONS = [
  {
    year: { zh: "2026", en: "2026" },
    items: [
      {
        badge: "DAC",
        citation:
          "Dingyu Yang, Fanyong Kong, Jie Dai, Shiyou Qian, Shuangwei Li, Jian Cao, Guangtao Xue and Gang Chen. Hestia: Hyperthread-Level Scheduling for Cloud Microservices with Interference-Aware Attention. Design Automation Conference (DAC 2026), Accepted, 2026 [CCF推荐A类会议]",
      },
      {
        badge: "TOSEM",
        citation:
          "Chenxi Zhang, Bicheng Zhang, Dingyu Yang, Xin Peng, Miao Chen, Senyu Xie, Gang Chen, Wei Bi, Wei Li. PromCopilot: Simplifying Prometheus Metric Querying in Cloud Native Online Service Systems via Large Language Models. ACM Transactions on Software Engineering and Methodology (TOSEM), Accepted, 2026 [CCF推荐A类期刊]",
      },
      {
        badge: "PVLDB",
        citation:
          "Chuanyi Lv, Huan Li, Dingyu Yang, Zhongle Xie, Lu Chen, Christian Jensen. DeXOR: Enabling XOR in Decimal Space for Streaming Lossless Compression of Floating-point Data. PVLDB 2026, Accepted [CCF推荐A类会议]",
      },
      {
        badge: "PVLDB",
        citation:
          "Yuchen Peng, Dingyu Yang (*), Zhongle Xie, Ji Sun, Lidan Shou, Ke Chen, Gang Chen. SVFusion: A CPU-GPU Co-Processing Architecture for Large-Scale Real-Time Vector Search. PVLDB 2026, Accepted [CCF推荐A类会议]",
      },
      {
        badge: "PVLDB",
        citation:
          "Yifan Wu, Yuhan Li, Zhongle Xie, Dingyu Yang, Ke Chen, Bo Tang, Huan Li, Gang Chen. SafeLoad: Efficient Admission Control Framework for Identifying Memory-Overloading Queries in Cloud Data Warehouses. PVLDB 2026, Accepted [CCF推荐A类会议]",
      },
      {
        badge: "SIGMOD",
        citation:
          "Sai Wu, Ruichen Xia, Dingyu Yang (*), Rui Wang, Huihang Lai, Jiarui Guan, Jiameng Bai, Dongxiang Zhang, Xiu Tang, Zhongle Xie, Peng Lu, Gang Chen. MorphingDB: A Task-Centric AI-Native DBMS for Model Management and Inference. SIGMOD 2026, Accepted [CCF推荐A类会议]",
      },
      {
        badge: "SIGMOD",
        citation:
          "Taihang Dong, Dingyu Yang, Ping Chen, Dongxiang Zhang. Query-Aware Path Inference from Spatial Videos. SIGMOD 2026, Accepted [CCF推荐A类会议]",
      },
      {
        badge: "ASPLOS",
        citation:
          "Jiaang Duan, Shenglin Xu, Shiyou Qian, Dingyu Yang (*), Kangjin Wang, Liping Zhang, Gang Chen. GFS: A Preemption-aware Scheduling Framework for GPU Clusters with Predictive Spot Instance Management. ASPLOS 2026, Accepted [CCF推荐A类会议] [上海市计算机学会协同与计算服务专委会优秀论文奖 一等奖]",
      },
      {
        badge: "TKDE",
        citation:
          "Taihang Dong, Dingyu Yang (*), Dongping Zhang, Sai Wu, Shaojie Qiao, Dongxiang Zhang. Efficient and Accurate Cross-Camera Vehicle Trajectory Recovery. IEEE Transactions on Knowledge and Data Engineering (TKDE). 2026. Accepted [CCF推荐A类期刊]",
      },
      {
        badge: "软件学报",
        citation:
          "陈淼，张晨曦，张弼诚，杨定裕，彭鑫，李伟，钱泽林，吴哲顺，欧嘉煜，钟坚锐，在线服务系统中基于图表示学习的告警聚类方法，软件学报，2026",
      },
    ],
  },
  {
    year: { zh: "2025", en: "2025" },
    items: [
      {
        badge: "NIPS",
        citation:
          "Shenzhi Yang, Junbo Zhao, Yixuan Li, Shouqing Yang, Dingyu Yang, Xiaofang Zhang, Haobo Wang. Harnessing Feature Resonance under Arbitrary Target Alignment for Out-of-Distribution Node Detection. NIPS 2025 [CCF推荐A类会议]",
      },
      {
        badge: "IJCAI",
        citation:
          "Jiameng Bai, Ruoyi Xu, Sai Wu, Dingyu Yang, Junbo Zhao, Gang Chen. POLO: An LLM-Powered Project-Level Code Performance Optimization Framework. IJCAI 2025 [CCF推荐A类会议]",
      },
      {
        badge: "ICSOC",
        citation:
          "Qin Hua, Shiyou Qian, Yufeng Deng, Kaixuan Zhang, Dingyu Yang, Jian Cao and Guangtao Xue. DIJS: A Dual Interference-aware Job Scheduling Framework for Co-located Data Centers. ICSOC 2025",
      },
      {
        badge: "ICA3PP",
        citation:
          "Jiaqi Sun, Dingyu Yang, Shiyou Qian, Jian Cao, Guangtao Xue. Atys: An Efficient Profiling Framework for Identifying Hotspot Functions in Large-scale Cloud Microservices. The 25th International Conference on Algorithms and Architectures for Parallel Processing (ICA3PP 2025). 2025.6",
      },
      {
        badge: "EMNLP",
        citation:
          "Qin Hua, Jiaqi Sun, Shiyou Qian, Dingyu Yang, Jian Cao, Guangtao Xue. EoT: Evolution of Thoughts for Complex Reasoning Tasks. EMNLP 2025, Accepted [CCF推荐B类会议]",
      },
      {
        badge: "SIGMETRICS",
        citation:
          "Jiaang Duan, Shiyou Qian, Hanwen Hu, Dingyu Yang, Jian Cao, Guangtao Xue. PipeCo: Pipelining Cold Start of Deep Learning Inference Services on Serverless Platforms. ACM SIGMETRICS 2025 [CCF推荐B类会议]",
      },
      {
        badge: "TOSEM",
        citation:
          "Junlin Liu, Mengyu Yao, Shaofei Li, Dingyu Yang, Zheshun Wu, Xiaojun Qu, Ziqi Zhang, Ding Li, Yao Guo, Xiangqun Chen. Not All Exceptions Are Created Equal: Triaging Error Logs in Real World Enterprises. ACM Transactions on Software Engineering and Methodology (TOSEM), 2025.02, Accepted [CCF推荐A类期刊]",
      },
      {
        badge: "TKDD",
        citation:
          "Hanwen Hu, Zhangchi Han, Shiyou Qian, Dingyu Yang, Jian Cao, Guangtao Xue. Pattern-oriented Attention Mechanism for Multivariate Time Series Forecasting. ACM Transactions on Knowledge Discovery from Data (TKDD), 2025 [CCF推荐B类期刊]",
      },
      {
        badge: "TC",
        citation:
          "Qin Hua, Dingyu Yang, Shiyou Qian, Jian Cao, Guangtao Xue, Minglu Li. Humas: A Heterogeneity- and Upgrade-aware Microservice Auto-scaling Framework in Large-scale Data Centers. IEEE Transactions on Computers (TC), 968-982, 2025 [上海市计算机学会2024优秀论文奖] [CCF推荐A类期刊]",
      },
      {
        badge: "TPDS",
        citation:
          "Haoyu Liao, Tong-yu Liu, Jianmei Guo, Bo Huang, Dingyu Yang, Jonathan Ding. Retrospecting Available CPU Resources: SMT-Aware Scheduling to Prevent SLA Violations in Data Centers. IEEE Transactions on Parallel and Distributed Systems (TPDS), 2025 [CCF推荐A类期刊]",
      },
      {
        badge: "JSC",
        citation:
          "Dingyu Yang, Kangpeng Zheng, Shiyou Qian, Qin Hua, Kaixuan Zhang, Jian Cao, Guangtao Xue. Mitigating Interference of Microservices with a Scoring Mechanism in Large-scale Clusters. The Journal of Supercomputing, 81(1), 1-31, 2025 [CCF推荐C类期刊]",
      },
    ],
  },
  {
    year: { zh: "2024", en: "2024" },
    items: [
      {
        badge: "ICPP",
        citation:
          "Dingyu Yang, Ziyang Xiao, Dongxiang Zhang, Shuhao Zhang, Jian Cao, Gang Chen. PREACT: Predictive Resource Allocation for Bursty Workloads in a Co-located Data Center. Proceedings of the 53rd International Conference on Parallel Processing (ICPP), 2024 [CCF推荐B类会议]",
      },
      {
        badge: "ASE",
        citation:
          "Haoyu Liao, Jianmei Guo, Bo Huang, Yujie Han, Dingyu Yang, Kai Shi, Jonathan Ding, Guoyao Xu, Guodong Yang, Liping Zhang. DeployFix: Dynamic Repair of Software Deployment Failures via Constraint Solving. Proceedings of the 39th IEEE/ACM International Conference on Automated Software Engineering (ASE), 2024 [CCF推荐A类会议]",
      },
      {
        badge: "TKDD",
        citation:
          "Hanwen Hu, Shiyou Qian, Dingyu Yang, Jian Cao, Guangtao Xue. Iterative Time Series Imputation by Maintaining Dependency Consistency. ACM Transactions on Knowledge Discovery from Data (TKDD), 2024 [CCF推荐B类期刊]",
      },
      {
        badge: "RA-L",
        citation:
          "Zijun Liu, Guangyu Fan, Lei Rao, Songlin Cheng, Niansheng Chen, Xiaoyong Song, Dingyu Yang. Positive and Negative Obstacles Detection Based on Dual-LiDAR in Field Environments. IEEE Robotics and Automation Letters, 2024 [机器人顶级期刊]",
      },
      {
        badge: "NPL",
        citation:
          "Yu Wu, Niansheng Chen, Guangyu Fan, Dingyu Yang, Lei Rao, Songlin Cheng, Xiaoyong Song, Yiping Ma. NAVS: A Neural Attention-Based Visual SLAM for Autonomous Navigation in Unknown 3D Environments. Neural Processing Letters, 61 (2024), 1-21 [CCF推荐期刊, SCI]",
      },
      {
        badge: "CSCWD",
        citation:
          "Yu Wu, Niansheng Chen, Lei Rao, Guangyu Fan, Dingyu Yang. SemGO: Goal-Oriented Semantic Policy Based on MHSA for Object Goal Navigation. CSCWD 2024 [CCF推荐C类会议]",
      },
    ],
  },
  {
    year: { zh: "2023及以前", en: "2023 and Earlier" },
    items: [
      {
        badge: "ASE",
        citation:
          "Yiru Chen, Chenxi Zhang, Zhen Dong, Dingyu Yang, Xin Peng, Jiayu Ou, Hong Yang, Zheshun Wu, Xiaojun Qu, Wei Li. Dynamic Graph Neural Networks-based Alert Link Prediction for Online Service Systems. ASE 2023 [CCF推荐A类会议]",
      },
      {
        badge: "WWW",
        citation:
          "Qin Hua, Dingyu Yang (*), Shiyou Qian, Hanwen Hu, Jian Cao, Guangtao Xue. KAE-Informer: A Knowledge Auto-Embedding Informer for Forecasting Long-Term Workloads of Microservices. Proceedings of the ACM Web Conference 2023 (WWW), 1551-1561, 2023 [CCF推荐A类会议]",
      },
      {
        badge: "VLDBJ",
        citation:
          "Dongxiang Zhang, Zhihao Chang, Dingyu Yang (*), Dongsheng Li, Kian-Lee Tan, Ke Chen, Gang Chen. SQUID: Subtrajectory Query in Trillion-scale GPS Database. The VLDB Journal, 2023 [CCF推荐A类期刊, SCI]",
      },
      {
        badge: "JCST",
        citation:
          "Qin Hua, Hanwen Hu, Shiyou Qian, Dingyu Yang (*), Jian Cao. Bi-GAE: A Bidirectional Generative Auto-Encoder. Journal of Computer Science and Technology (JCST), 2023 [CCF推荐B类期刊, SCI]",
      },
      {
        badge: "IJCNN",
        citation:
          "Hongcheng Wang, Niansheng Chen, Guangyu Fan, Dingyu Yang, Lei Rao, Songlin Cheng. An End-to-End Robotic Visual Localization Algorithm Based on Deep Learning. IJCNN 2023, 1-7",
      },
      {
        badge: "JSA",
        citation:
          "Qin Hua, Shiyou Qian, Dingyu Yang (*), Jianmei Guo, Jian Cao, Guangtao Xue, Minglu Li. Qore-DL: A QoS-aware Joint Optimization Framework for Distributed Deep Learning Training. Journal of Systems Architecture, 130:102640, 2022 [CCF推荐B类期刊, SCI]",
      },
      {
        badge: "FGCS",
        citation:
          "Xiaogang Wang, Jian Cao, Dingyu Yang, Zhen Qin, Rajkumar Buyya. Online Cloud Resource Prediction via Scalable Window Waveform Sampling on Classified Workloads. Future Generation Computer Systems, 117:338-358, 2021 [CCF推荐B类期刊, SCI]",
      },
      {
        badge: "SIGMOD",
        citation:
          "Ziqiang Yu, Xiaohui Yu, Nick Koudas, Yang Liu, Yifan Li, Yueting Chen, Dingyu Yang. Distributed Processing of k Shortest Path Queries over Dynamic Road Networks. SIGMOD 2020: 665-679 [CCF推荐A类会议]",
      },
      {
        badge: "InfoSci",
        citation:
          "Dingyu Yang, Jianmei Guo, Zhijie Wang, Yuan Wang, Jingsong Zhang, Liang Hu, Jian Yin, Jian Cao. FastPM: An Approach to Pattern Matching via Distributed Stream Processing. Information Sciences, 453:263-280, 2018 [CCF推荐B类期刊]",
      },
      {
        badge: "PVLDB",
        citation:
          "Dongxiang Zhang, Mengting Ding, Dingyu Yang, Yi Liu. Trajectory Simplification: An Experimental Study and Quality Analysis. PVLDB, 2018.04 [CCF推荐A类会议]",
      },
      {
        badge: "VLDBJ",
        citation:
          "Dongxiang Zhang, Dingyu Yang (*), Yuan Wang, Kian-Lee Tan, Jian Cao, Heng Tao Shen. Distributed Shortest Path Query Processing on Dynamic Road Networks. The VLDB Journal, 26(3):399-419, 2017 [CCF推荐A类期刊]",
      },
      {
        badge: "EMSE",
        citation:
          "Jianmei Guo, Dingyu Yang, Norbert Siegmund, Sven Apel, Atrisha Sarkar, Pavel Valov, Krzysztof Czarnecki, Andrzej Wasowski, Huiqun Yu. Data-Efficient Performance Learning for Configurable Systems. Empirical Software Engineering, 23(3):1826-1867, 2017 [CCF推荐B类期刊]",
      },
      {
        badge: "SoSyM",
        citation:
          "Jianmei Guo, Jia Hui Liang, Kai Shi, Dingyu Yang, Jingsong Zhang, Krzysztof Czarnecki, Vijay Ganesh, Huiqun Yu. MTIBEA: A Hybrid Multi-Objective Optimization Algorithm for Configuring Large Constrained Software Product Lines. Software and Systems Modeling, 2017 [CCF推荐B类期刊]",
      },
      {
        badge: "FCS",
        citation:
          "Jingyu Zhang, Chentao Wu, Dingyu Yang, Yuanyi Chen, Xiangdong Meng, Lijia Xu, Minyi Guo. HSCS: A Hybrid Shared Cache Scheduling Scheme for Multi-programmed Workloads. Frontiers of Computer Science, 2017 [CCF推荐C类期刊]",
      },
      {
        badge: "WirelessNet",
        citation:
          "Jingyu Zhang, Zhi-Jie Wang, Song Guo, Dingyu Yang, Gan Fang, Chunyi Peng, Minyi Guo. Energy Consumption Analysis of Video Streaming in 4G LTE Networks. Wireless Networks, 2017 [CCF推荐C类期刊]",
      },
      {
        badge: "TOIS",
        citation:
          "Liang Hu, Longbin Cao, Jian Cao, Zhiping Gu, Guandong Xu, Dingyu Yang. Learning Informative Priors from Heterogeneous Domains to Improve Recommendation in Cold-Start User Domains. ACM Transactions on Information Systems (TOIS), 2016 [CCF推荐A类期刊]",
      },
      {
        badge: "PVLDB",
        citation:
          "Dingyu Yang, Dongxiang Zhang, Kian-Lee Tan, Jian Cao, Frédéric Le Mouël. CANDS: Continuous Optimal Navigation in Distributed Stream Processing. PVLDB 8(2):137-148, 2015 [CCF推荐A类会议, 上海市计算机学会数据库与数据挖掘 2015 年度候选优秀论文]",
      },
      {
        badge: "KBS",
        citation:
          "Jingsong Zhang, Yinglin Wang, Dingyu Yang. CCSpan: Mining Closed Contiguous Sequential Patterns. Knowledge-Based Systems, 89:1-13, 2015 [CCF推荐B类期刊]",
      },
      {
        badge: "JSS",
        citation:
          "Dingyu Yang, Jian Cao, Sai Wu, Jie Wang. Progressive Online Aggregation in a Distributed Stream System. Journal of Systems and Software, 102:146-157, 2015 [CCF推荐B类期刊]",
      },
      {
        badge: "JSS",
        citation:
          "Dingyu Yang, Jian Cao, Jiwen Fu, Jie Wang, Jianmei Guo. A Pattern Fusion Model for Multi-step-ahead CPU Load Prediction. Journal of Systems and Software, 86(5), May 2013 [CCF推荐B类期刊]",
      },
    ],
  },
];

function get(obj, path) {
  return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

function initAnalytics() {
  const measurementId = window.SITE_CONFIG?.ga4MeasurementId?.trim();
  if (!measurementId || localStorage.getItem(GA_STORAGE_KEY) === "true") return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    anonymize_ip: true,
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);
}

function initPublicCounter() {
  if (!window.SITE_CONFIG?.enablePublicCounter) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = "//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
  script.onload = () => {
    document.querySelectorAll(".stat-fallback").forEach((el) => {
      el.hidden = true;
    });
  };
  document.head.appendChild(script);
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function emphasizeAuthor(text) {
  return escapeHtml(text)
    .replaceAll("Dingyu Yang", '<strong class="pub-author-strong">Dingyu Yang</strong>')
    .replaceAll("杨定裕", '<strong class="pub-author-strong">杨定裕</strong>');
}

function renderPublications(lang) {
  const container = document.querySelector("[data-publications]");
  if (!container) return;

  const yearKey = lang === "zh" ? "zh" : "en";
  container.innerHTML = PUBLICATIONS.map((group) => {
    const items = group.items
      .map(
        (item, index) => `
          <li class="pub-item">
            <p class="pub-citation">
              <span class="pub-idx">[${index + 1}]</span>
              <span class="pub-badge">[${escapeHtml(item.badge)}]</span>
              ${emphasizeAuthor(item.citation)}
            </p>
          </li>
        `,
      )
      .join("");

    return `
      <section class="pub-group" aria-label="${escapeHtml(group.year[yearKey])}">
        <div class="pub-year">[${escapeHtml(group.year[yearKey])}]</div>
        <ol class="pubs">
          ${items}
        </ol>
      </section>
    `;
  }).join("");
}

function detectLang() {
  return "zh";
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

  renderPublications(lang);
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
  return "light";
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

function initNavSpy() {
  const links = Array.from(document.querySelectorAll('.nav a[href^="#"]'));
  if (!links.length) return;

  const linkById = new Map(
    links.map((link) => [link.getAttribute("href")?.slice(1), link]),
  );
  const sections = links
    .map((link) => {
      const id = link.getAttribute("href")?.slice(1);
      return id ? document.getElementById(id) : null;
    })
    .filter(Boolean);

  function setActive(id) {
    links.forEach((link) => {
      const active = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("is-active", active);
      if (active) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  links.forEach((link) => {
    link.addEventListener("click", () => {
      const id = link.getAttribute("href")?.slice(1);
      if (id) setActive(id);
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible?.target?.id) return;
      setActive(visible.target.id);
    },
    {
      rootMargin: "-35% 0px -50% 0px",
      threshold: [0.15, 0.4, 0.65],
    },
  );

  sections.forEach((section) => observer.observe(section));

  const hash = window.location.hash.replace("#", "");
  if (hash && linkById.has(hash)) {
    setActive(hash);
  } else if (sections[0]?.id) {
    setActive(sections[0].id);
  }
}

initLang();
initTheme();
initYear();
initNavSpy();
initAnalytics();
initPublicCounter();
