import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image(), react()],
  site: 'https://nefonfo.github.io/',
  base: import.meta.env.DEV ? '/' : '/AstroCoffee'
});