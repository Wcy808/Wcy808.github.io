export type Lang = "zh" | "en";

export const profile = {
  name: "Wcy808",
  avatar: "https://avatars.githubusercontent.com/u/357709715?v=4",
  github: "https://github.com/Wcy808",
};

export const projects = [
  {
    id: "toonflow",
    tags: ["TypeScript", "Vue 3", "Bun", "Electrobun", "AI Agent", "MCP"],
    github: "https://github.com/HBAI-Ltd/Toonflow-app",
    site: "https://toonflow.net",
    stars: "22.8k",
    zh: {
      name: "Toonflow",
      tagline: "开源 AI 短剧 · 漫剧 · 视频创作平台",
      desc: "面向短剧、漫剧与短视频创作者的开源 AI 创作平台：在同一张无限画布上编写剧本与分镜、管理角色与场景素材、生成图片与视频。支持本地部署与自选模型，可通过 AI Agent、MCP 与插件扩展创作流程。",
      highlights: [
        "无限画布：剧本、分镜、素材与视频片段同屏编排",
        "本地部署：桌面 / Android / Docker / 服务器，数据自主可控",
        "AI Agent + MCP + 插件市场，自由接入各家模型",
        "GitHub 22.8k+ stars · AtomGit G-Star 认证项目",
      ],
    },
    en: {
      name: "Toonflow",
      tagline: "Open-source AI short drama · motion comic · video studio",
      desc: "An open-source AI creation platform for short dramas, motion comics and short videos: write scripts and storyboards, manage character & scene assets, and generate images and videos on one infinite canvas. Self-hosted and model-agnostic, extensible via AI agents, MCP and plugins.",
      highlights: [
        "Infinite canvas: scripts, storyboards, assets and clips side by side",
        "Self-hosted: desktop / Android / Docker / server, your data stays yours",
        "AI agents + MCP + plugin marketplace, bring your own models",
        "22.8k+ GitHub stars · AtomGit G-Star certified project",
      ],
    },
  },
  {
    id: "bossAndQcc",
    tags: ["Python", "AI Agent", "CLI 编排", "YAML"],
    github: "https://github.com/Wcy808/boss-and-qcc",
    site: "",
    stars: "",
    zh: {
      name: "boss-and-qcc",
      tagline: "AI 求职自动化流水线",
      desc: "把 BOSS直聘 与企查查两个 Agent CLI 编排成一条完整的求职流水线：搜索岗位 → 企业风险过滤 → 定向投递 → HR 消息管理。用工商与司法数据避开风险企业，把宝贵的每日投递额度花在有质量的岗位上。",
      highlights: [
        "35 项企业风险因子扫描，经营异常 / 严重违法一票否决",
        "风控优先：限速、每日限额、命中风险立即熔断、dry-run 预览",
        "断线无损恢复：从本地缓存离线找回全部已搜岗位",
        "话术池轮换 + AI 起草 HR 回复，人工确认后发送",
      ],
      pipeline: ["搜索岗位", "企业风险过滤", "定向投递", "HR 消息管理"],
    },
    en: {
      name: "boss-and-qcc",
      tagline: "AI job-hunting automation pipeline",
      desc: "Orchestrates two agent CLIs (BOSS Zhipin + Qichacha) into one job-hunting pipeline: search jobs → filter company risk → targeted applications → HR inbox management. Uses business & judicial data to skip risky companies and spend the daily application quota on quality jobs.",
      highlights: [
        "35 company risk factors scanned; operating anomalies veto instantly",
        "Risk-first: rate limits, daily caps, circuit breaker, dry-run preview",
        "Lossless recovery: restore searched jobs offline from local cache",
        "Rotating greeting templates + AI-drafted HR replies, human-confirmed",
      ],
      pipeline: ["Search jobs", "Risk filtering", "Apply", "HR inbox"],
    },
  },
];

export const ui = {
  zh: {
    nav: { projects: "项目", about: "关于", contact: "联系", toggle: "EN" },
    hero: {
      role: "AI 应用开发者 · 开源爱好者",
      tagline: "把 AI 装进创作工具与自动化流水线",
      intro:
        "专注于 AI 创作平台与 Agent 自动化：从无限画布上的短剧工厂，到一条命令跑通的求职流水线。喜欢把复杂流程做成普通人也能用的工具。",
      ctaProjects: "查看项目",
      ctaGithub: "GitHub",
    },
    sections: {
      projects: "参与的项目",
      projectsSub: "开源创作平台与自动化工具",
      about: "关于我",
      skills: "技术栈",
      contact: "联系我",
    },
    project: { github: "源码", site: "官网", stars: "stars", highlights: "亮点" },
    about: {
      p1: "我在开源项目里打磨产品细节：插件体系、多租户架构、文件与数据的安全边界；也在自动化工具里坚持「风控是硬边界」——限速、限额、熔断即停、可恢复设计。",
      p2: "相信好的工具应该把复杂留给自己，把简单交给用户。欢迎通过 GitHub 交流与合作。",
    },
    skillGroups: [
      { label: "前端", items: ["TypeScript", "Vue 3", "React", "TanStack Start", "Vite"] },
      { label: "服务端与脚本", items: ["Bun", "Node.js", "Python", "Express", "CLI 设计"] },
      { label: "AI 与自动化", items: ["AI Agent", "MCP", "LLM 集成", "流水线编排", "Docker"] },
    ],
    contact: {
      text: "对项目感兴趣、想交流技术或一起合作？欢迎在 GitHub 上找到我。",
      button: "GitHub @Wcy808",
    },
    footer: { built: "使用 TanStack Start 构建", source: "本站源码" },
  },
  en: {
    nav: { projects: "Projects", about: "About", contact: "Contact", toggle: "中" },
    hero: {
      role: "AI App Developer · Open-source Enthusiast",
      tagline: "Building AI into creative tools and automation pipelines",
      intro:
        "Focused on AI creation platforms and agent automation — from a short-drama factory on an infinite canvas to a job-hunting pipeline that runs with one command. I like turning complex workflows into tools anyone can use.",
      ctaProjects: "View projects",
      ctaGithub: "GitHub",
    },
    sections: {
      projects: "Projects I work on",
      projectsSub: "Open-source creative platform & automation tooling",
      about: "About me",
      skills: "Tech stack",
      contact: "Get in touch",
    },
    project: { github: "Source", site: "Website", stars: "stars", highlights: "Highlights" },
    about: {
      p1: "I polish product details in open-source projects: plugin systems, multi-tenant architecture, file & data safety boundaries. In automation tooling I treat platform risk control as a hard boundary — rate limits, quotas, circuit breakers and recoverable design.",
      p2: "Good tools keep the complexity to themselves and hand simplicity to the user. Feel free to reach out on GitHub.",
    },
    skillGroups: [
      { label: "Frontend", items: ["TypeScript", "Vue 3", "React", "TanStack Start", "Vite"] },
      { label: "Backend & scripting", items: ["Bun", "Node.js", "Python", "Express", "CLI design"] },
      { label: "AI & automation", items: ["AI Agent", "MCP", "LLM integration", "Pipeline orchestration", "Docker"] },
    ],
    contact: {
      text: "Interested in these projects, want to talk tech or collaborate? Find me on GitHub.",
      button: "GitHub @Wcy808",
    },
    footer: { built: "Built with TanStack Start", source: "Site source" },
  },
};