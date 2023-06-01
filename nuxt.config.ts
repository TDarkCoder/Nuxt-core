import {useLocales} from './composables/useLocales';

const isDev = process.env.APP_ENV !== 'production';
const locale = process.env.APP_LOCALE ?? 'uz_latn';

export default defineNuxtConfig({
    dev: isDev,
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: process.env.APP_NAME,
        },
    },
    runtimeConfig: {
        app: {
            name: process.env.APP_NAME,
            isDev,
        },
    },
    modules: [
        '@element-plus/nuxt',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/eslint-module',
        '@nuxtjs/i18n',
        '@nuxt/image-edge',
        '@storyblok/nuxt',
    ],
    css: [
        '~/assets/scss/app.scss',
    ],
    image: {},
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/scss/element/index.scss" as element;',
                },
            },
        },
    },
    eslint: {
        lintOnStart: false,
    },
    elementPlus: {
        icon: 'ElIcon',
        importStyle: 'scss',
    },
    i18n: {
        strategy: 'prefix_except_default',
        defaultLocale: locale,
        locales: useLocales(),
        vueI18n: './i18n.config.ts',
    },
    storyblok: {
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
        cacheProvider: 'memory',
    },
})
