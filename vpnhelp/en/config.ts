export const config = {
  sidebar: [
    {
      text: "Android",
      items: [
        {
          text: "v2rayNG",
          link: "/en/docs/v2rayNG",
        },
      ],
    },
    {
      text: "IOS",
      items: [{ text: "Streisand", link: "/en/docs/streisand" }],
    },
    {
      text: "Windows",
      items: [{ text: "v2rayN", link: "/en/docs/v2rayN" }],
    },
    {
      text: "MacOS",
      items: [{ text: "Streisand", link: "/en/docs/streisand" }],
    },
    // {
    //   text: "IPV6",
    //   items: [
    //     { text: "SAMSUNG", link: "/en/docs/ipv6-samsung" },
    //     { text: "IOS", link: "/en/docs/ipv6-apple" },
    //   ],
    // },
  ],
  nav: [
    { text: "Home", link: "/en/" },
    { text: "Guides", link: "/en/docs/" },
  ],

  footer: {
    message: "© 2025",
    copyright: "CC Lab",
  },
  // editLink: {
  //   pattern:
  //     "https://github.com/gozargah/gozargah.github.io/edit/master/marzban/en/:path",
  //   text: "Edit this page on GitHub",
  // },
  notFound: {
    title: "PAGE NOT FOUND",
    quote:
      "But if you don't change your direction, and if you keep looking, you may end up where you are heading.",
    linkText: "Go to home",
    linkLabel: "/en",
  },
};

export default config;
