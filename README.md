![nextjs-ts-template](public/nextjs-ts-template.png)


## NextJS with Typescript Template

[![build](https://github.com/caiobatis/nextjs-ts-template/actions/workflows/build.yml/badge.svg)](https://github.com/caiobatis/nextjs-ts-template/actions/workflows/build.yml) [![quality](https://github.com/caiobatis/nextjs-ts-template/actions/workflows/quality.yml/badge.svg)](https://github.com/caiobatis/nextjs-ts-template/actions/workflows/quality.yml)
<img alt="Repository size" src="https://img.shields.io/github/repo-size/caiobatis/nextjs-ts-template">
<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/caiobatis/nextjs-ts-template">
<img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
<img alt="Stargazers" src="https://img.shields.io/github/stars/caiobatis/nextjs-ts-template?style=social">


## Requirements

- nvm (v) ([install details](https://github.com/nvm-sh/nvm#installation-and-update))
- Node (v) ([install details](https://github.com/nvm-sh/nvm#nvmrc))
- yarn (v)

## Stack

The future stack:

- NextJS
- ES6 (Babel)
- React
- Axios
- Tailwind
- Styled Components
- ESlint
- Prettier
- Husky

## Environment Variables

Set the application variables according to the [`.env.sample`](.env.sample) file as template

```
API_BASE_URL=https://mybaseurl.com
```

## Initialization

Run the application in development mode:

```bash
yarn && yarn dev
```

#### Build to production or stage

```bash
NODE_ENV=production yarn build
```

## Deploy

In the future, maybe I will bring this model a good way to deploy. In case I can get the time.
For now use Vercel, Netlify or whatever you want
