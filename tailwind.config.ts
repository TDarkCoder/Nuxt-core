export default {
    content: [
        'storyblok/**/*.{vue,js}',
        'components/**/*.{vue,js}',
        'pages/**/*.vue',
    ],
    theme: {
        container: {
            screens: {
                sm: '650px',
                md: '768px',
                lg: '992px',
                xl: '1200px',
                '2xl': '1920px',
            },
            padding: {
                DEFAULT: '20px',
            },
        },
    },
};
