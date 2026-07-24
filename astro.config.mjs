// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://kneldev.com',
  integrations: [
    starlight({
      title: 'Packet Foundry',
      favicon: '/favicon.png',
      customCss: ['./src/styles/custom.css'],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/kneldev/wikiBlog' }],
      sidebar: [
        {
          label: 'Section 1',
          items: [{ autogenerate: { directory: 'section1' } }],
        },
        {
          label: 'Section 2',
          items: [{ autogenerate: { directory: 'section2' } }],
        },
      ],
    }),
  ],
});
