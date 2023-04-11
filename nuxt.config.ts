import ru from './locales/ru';
import uz_latn from './locales/uz_latn';
import {useLocales} from './composables/useLocales';

const isDev = process.env.APP_ENV !== 'production';

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
        'nuxt-windicss',
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
        defaultLocale: 'uz_latn',
        locales: useLocales(),
        vueI18n: {
            legacy: false,
            locale: 'uz_latn',
            messages: {
                ru,
                uz_latn,
            },
        },
    },
    storyblok: {
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
        cacheProvider: 'memory',
    },
})
