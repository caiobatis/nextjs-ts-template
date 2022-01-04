![nextjs-ts-template](public/nextjs-ts-template.png)

# NextJS with Typescript Template

## Builds Status

#### Master:
[![build](https://github.com/caiobatis/nextjs-ts-template/actions/workflows/build.yml/badge.svg)](https://github.com/caiobatis/nextjs-ts-template/actions/workflows/build.yml)

## Quality

#### Master:
[![quality](https://github.com/caiobatis/nextjs-ts-template/actions/workflows/quality.yml/badge.svg)](https://github.com/caiobatis/nextjs-ts-template/actions/workflows/quality.yml)

---

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
