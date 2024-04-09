# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# Install the Capacitor CLI locally

npm install -D @capacitor/cli

# Initialize Capacitor in your Nuxt project

npx cap init

# Install the required packages

npm install @capacitor/core @capacitor/ios @capacitor/android

# Add the native platforms

npx cap add ios
npx cap add android

{
"appId": "com.example.app",
"appName": "my-app",
"webDir": "dist"
}

npm run generate
npx cap sync

npx cap open ios
npx cap open android

ipconfig getifaddr en0

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
appId: 'com.example.app',
appName: 'my-app',
webDir: 'dist',
bundledWebRuntime: false,
server: {
url: 'http://192.168.x.xx:3000',
cleartext: true
}
};

export default config;

npx cap copy

npm i @capacitor/share

<script setup lang="ts">
import { Share } from '@capacitor/share';

async function share() {
  await Share.share({
    title: 'Open Youtube',
    text: 'Check new video on youtube',
    url: 'https://www.youtube.com',
    dialogTitle: 'Share with friends'
  });
}
</script>

https://konstaui.com/
UI for iOS and Android
