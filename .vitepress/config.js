const nav = [
  {
    text: "Experience",
    link: "/experience/index.md",
    activeMatch: "/experience/"
  },
  {
    text: "Diary",
    link: "/diary/2022/07-July.md",
    activeMatch: "/diary/"
  },
  {
    text: "Definition",
    link: "/definition/web/html.md",
    activeMatch: "/definition/"
  },
  {
    text: "Awesome Site",
    items: [
      {
        text: "Consult",
        items: [{ text: "Cubic-Bezier", link: "https://cubic-bezier.com" }]
      },
      {
        text: "Practice",
        items: [
          { text: "CSS Selector", link: "https://flukeout.github.io/" },
          {
            text: "Markdown",
            link: "https://commonmark.org/help/tutorial/"
          },
          { text: "GridGarden", link: "http://cssgridgarden.com/" },
          {
            text: "Games",
            link: "https://dev.to/devmount/8-games-to-learn-css-the-fun-way-4e0f"
          }
        ]
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
        { text: "07 - July", link: "/diary/2022/07-July.md" },
        { text: "08 - August", link: "/diary/2022/08-August.md" }
      ]
    }
  ],
  "/definition/": [
    {
      text: "web",
      collapsible: true,
      // collapsed: true,
      items: [
        { text: "html", link: "/definition/web/html.md" },
        { text: "css", link: "/definition/web/css.md" },
        { text: "JavaScript", link: "/definition/web/javascript.md" },
        { text: "vue", link: "/definition/web/vue.md" }
      ]
    }
  ]
};

export default {
  srcDir: "src",
  cleanUrls: true,
  description: "Just a diary",
  head: [["link", { rel: "icon", href: "/images/logo.png" }]],
  ignoreDeadLinks: true,
  lang: "zh-CH",
  lastUpdated: true,
  title: "Diary",
  titleTemplate: "Vite & Vue powered static site generator",
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
