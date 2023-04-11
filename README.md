# Business challenge

## Setup
Make sure to install the dependencies:
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

## Adding new language for locales
1. Add new language in `useLocales` composable
2. Add new language .ts in `locales` directory
3. import this .ts file to nuxt.config.ts `i18n` module's `VueI18n > messages` parameter
