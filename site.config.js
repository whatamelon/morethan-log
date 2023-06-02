const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Denny Hong",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "frontend developer",
    bio: "Always Forward",
    email: "whatup@summerclout.dev",
    linkedin: "seung-ho-hong-b18407253",
    github: "whatamelon",
    instagram: "",
  },
  projects: [
    {
      name: `Relay`,
      href: "https://the-relay.com/",
    },
  ],
  // blog setting (required)
  blog: {
    title: "morethan-log",
    description: "welcome to morethan-log!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://summerclout.dev",
  since: 2022, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: '5cce33e26a9444aea78e86df4f731130' // process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: "G-GNNP22HN8X",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: "google-site-verification=-qwOY63zJA5YMHq3zYEanV8QAnph2LPPAZtyp1Vbc_A",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "morethanmin/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }