export const config = {
  sidebar: [
    {
      text: "Android",
      items: [
        {
          text: "v2rayNG",
          link: "/ru/docs/v2rayNG",
        },
      ],
    },
    {
      text: "IOS",
      items: [{ text: "Streisand", link: "/ru/docs/streisand" }],
    },
    {
      text: "Windows",
      items: [{ text: "v2rayN", link: "/ru/docs/v2rayN" }],
    },
    {
      text: "MacOS",
      items: [{ text: "Streisand", link: "/ru/docs/streisand" }],
    },
    // {
    //   text: "IPV6",
    //   items: [
    //     { text: "SAMSUNG", link: "/ru/docs/ipv6-samsung" },
    //     { text: "IOS", link: "/ru/docs/ipv6-apple" },
    //   ],
    // },
  ],
  nav: [
    { text: "Главная", link: "/ru/" },
    { text: "Руководства", link: "/ru/docs/" },
  ],

  footer: {
    message: "© 2025",
    copyright: "CC Lab",
  },
  // editLink: {
  //   pattern:
  //     "https://github.com/gozargah/gozargah.github.io/edit/master/marzban/ru/:path",
  //   text: "Редактировать эту страницу на GitHub",
  // },
  notFound: {
    title: "СТРАНИЦА НЕ НАЙДЕНА",
    quote:
      "Но если вы не измените направление и продолжите искать, вы можете оказаться там, куда направляетесь.",
    linkText: "Вернуться на главную",
    linkLabel: "/ru",
  },
};

export default config;