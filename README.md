# Packet Foundry

Packet Foundry is an Astro and Starlight knowledge base for cybersecurity,
infrastructure, development, and field notes. Its visual layer is owned by this
project so it can follow current Astro and Starlight releases without depending
on an older third-party theme stack.

## Development

Install dependencies:

```sh
npm install
```

Start Astro in background mode:

```sh
npx astro dev --background
```

Inspect or stop the server:

```sh
npx astro dev status
npx astro dev logs
npx astro dev stop
```

Build the production site:

```sh
npm run build
```

Documentation pages live in `src/content/docs/`. The sidebar is generated from
the `lab`, `infrastructure`, `code`, and `notes` directories.
