import { DefaultTheme } from "vitepress";

export const config: DefaultTheme.Config = {
  sidebar: [
    {
      text: "Android",
      items: [
        {
          text: "v2rayNG",
          link: "/fa/docs/v2rayNG",
        },
      ],
    },
    {
      text: "IOS",
      items: [{ text: "Streisand", link: "/fa/docs/streisand" }],
    },
    {
      text: "Windows",
      items: [{ text: "v2rayN", link: "/fa/docs/v2rayN" }],
    },
    {
      text: "MacOS",
      items: [{ text: "Streisand", link: "/fa/docs/streisand" }],
    },
    {
      text: "IPV6",
      items: [
        { text: "SAMSUNG", link: "/fa/docs/ipv6-samsung" },
        { text: "IOS", link: "/fa/docs/ipv6-apple" },
      ],
    },
  ],
  nav: [
    { text: "خانه", link: "/fa/" },
    { text: "آموزش ها", link: "/fa/docs/" },
  ],

  footer: {
    message: "© 2025",
    copyright: "CC Lab",
  },
  // editLink: {
  //   pattern: 'https://github.com/gozargah/gozargah.github.io/edit/master/marzban/:path',
  //   text: 'ویرایش این صفحه در گیت‌هاب',
  // },
  outlineTitle: "محتوا صفحه",
  returnToTopLabel: "برگشت به بالا",
  docFooter: {
    prev: "صفحه قبل",
    next: "صفحه بعد",
  },
  sidebarMenuLabel: "منو",
  notFound: {
    title: "صفحه مورد نظر پیدا نشد",
    quote:
      "برای مشاهده آموزش ها، به صفحه اصلی مراجعه کنید. برای پیدا کردن مطلب مورد نظر میتوانید از قابلیت جستجو استفاده کنید.",
    linkText: "خانه",
    linkLabel: "/fa",
  },
  darkModeSwitchLabel: "رنگبندی",
  darkModeSwitchTitle: "تاریک",
  lightModeSwitchTitle: "روشن",
};

export default config;
