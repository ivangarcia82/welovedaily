import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import storyblok from "@storyblok/astro";
import { loadEnv } from 'vite'
import basicSsl from '@vitejs/plugin-basic-ssl'

const env = loadEnv("", process.cwd(), 'STORYBLOK')



export default defineConfig({
  experimental: {
   viewTransitions: true
  },
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        page: 'storyblok/Page',
        channels: 'storyblok/Channels',
        channel: 'storyblok/Channel',
        imageText: 'storyblok/ImageText',
        list: 'storyblok/List',
        slides: 'storyblok/Slides',
        cards: 'storyblok/Cards',
      },
    }),
    tailwind()
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});