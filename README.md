## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

```storybook
npm run storybook
# or
yarn storybook
```

Open [http://localhost:6006](http://localhost:6006) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Dependencies

Install nvm
```
brew install nvm
# set to path
source $(brew --prefix nvm)/nvm.sh
# check version
nvm -v # 0.40.1
```

Install node 
```
nvm install 20 
nvm use 20
node -v # v20.18.0
```

Install yarn
```
brew install yarn
# or 
brew upgrade yarn 
# then
yarn -v # 1.22.22
```

Install storybook
```
npx storybook@latest init
* then verify

```

Verify Next JS version
```
npx next -v #14.2.17
```