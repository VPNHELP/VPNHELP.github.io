import { DefaultTheme, LocaleSpecificConfig, defineConfig } from 'vitepress'
import englishThemeConfig from '../en/config'
import persianThemeConfig from '../fa/config'
import russianThemeConfig from '../ru/config'

type ThemeConfig = LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link?: string }

export const BASE = '/'

const persianLang: ThemeConfig = {
  label: 'فارسی',
  lang: 'fa',
  dir: 'rtl',
  title: 'vpnhelp',
  description: '',
  link: '/',
  themeConfig: persianThemeConfig,
}

const englishLang: ThemeConfig = {
  title: 'vpnhelp',
  description: '',
  label: 'English',
  lang: 'en',
  link: '/',
  themeConfig: englishThemeConfig,
}

const russianLang: ThemeConfig = {
  title: 'vpnhelp',
  description: '',
  label: 'Русский',
  lang: 'ru',
  link: '/',
  themeConfig: russianThemeConfig,
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'vpnhelp',
  description: 'Unified Censorship Resistant Solution',
  base: BASE,
  cleanUrls: true,
  lang: 'fa',
  locales: {
    // root: englishLang,
    fa: {
      ...persianLang,
      link: '/fa/',
    },
    en: { ...englishLang, link: '/en/' },
    ru: { ...russianLang, link: '/ru/' },
  },
  themeConfig: {
    i18nRouting: true,
    logo: '/images/logo-dark.png',
    //socialLinks: [{ icon: 'github', link: 'https://github.com/gozargah/marzban' }],
    search: {
      provider: 'local',
    },
  },
  sitemap: {
    hostname: 'https://vpnhelp.github.io',
  },
})
