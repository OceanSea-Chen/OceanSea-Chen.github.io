const nav = [
  {
    text: "Diary",
    link: "/diary/2022/07-July.md",
    activeMatch: "/diary/"
  },
  {
    text: "Definition",
    link: "/definition/",
    activeMatch: "/definition/"
  },
  {
    text: "Practice Site",
    items: [
      { text: "Practice CSS Selector", link: "https://flukeout.github.io/" },
      {
        text: "Practice Markdown",
        link: "https://commonmark.org/help/tutorial/"
      }
    ]
  }
];
const sidebar = {
  "/diary/": [
    {
      text: "2022",
      collapsible: true,
      // collapsed: true,
      items: [
        { text: "07-July", link: "/diary/2022/07-July.md" },
        { text: "08-August", link: "/diary/2022/08-August.md" }
      ]
    }
  ]
};

export default {
  // appearance: true,
  // base: "/",
  description: "Just a diary",
  head: [["link", { rel: "icon", href: "/images/logo.png" }]],
  ignoreDeadLinks: true,
  lang: "zh-CH",
  lastUpdated: true,
  // markdown:{},
  title: "Diary",
  titleTemplate: "Vite & Vue powered static site generator",
  // Theme related configurations
  themeConfig: {
    logo: "/images/logo.png",
    siteTitle: "Oceansea Notes",
    nav,
    sidebar,
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present OceanSea"
    }
  }
};
