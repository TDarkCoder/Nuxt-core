# Nuxt 3 Core

Welcome to the Nuxt 3 Core Repository! This repository is designed to provide a solid foundation for Nuxt 3 applications, packed with essential packages to kickstart your website development.

## Features

- **ESLint**: Maintain code quality and style effortlessly.
- **Storyblok**: Seamlessly integrate Storyblok Headless CMS for content management.
- **i18n**: Implement internationalization with ease, supporting multiple languages and locales, making your website multilingual.
- **Tailwind**: Enhance your styling capabilities with the Tailwind CSS framework.
- **Element Plus**: Access a comprehensive set of UI components from Element Plus.

## Tailor to Your Needs

We understand that not every project may require all of these packages. That's why this setup is designed to be flexible. If any of these packages are not needed for your specific project, simply uninstall them to keep your project lean and focused.

## Getting Started

Clone this repository and make sure to install the dependencies:
```bash
yarn install
```

## Development Server
Start the development server on http://localhost:3000
```bash
yarn dev
```

## Production
Build the application for production:
```bash
yarn build
```

Locally preview production build:
```bash
yarn preview
```

## How to add a new Locale
1. Add new Language in `useLocales` composable
2. Create new Language .js file in `locales` directory
3. Import this .js file to nuxt.config.ts `i18n` module's `VueI18n > messages` parameter
