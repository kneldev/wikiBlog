// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://kneldev.com",
  integrations: [
    starlight({
      title: "Packet Foundry",
      favicon: "/favicon.png",
      customCss: ["./src/styles/sectional-splash.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/kneldev/wikiBlog",
        },
      ],
      sidebar: [
        {
          label: "Cyber Range",
          items: [{ autogenerate: { directory: "lab" } }],
        },
        {
          label: "Infrastructure",
          items: [{ autogenerate: { directory: "infrastructure" } }],
        },
        {
          label: "Code",
          items: [{ autogenerate: { directory: "code" } }],
        },
        {
          label: "Field Notes",
          items: [{ autogenerate: { directory: "notes" } }],
        },
      ],
    }),
  ],
});
