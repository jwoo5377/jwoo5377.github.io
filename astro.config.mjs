import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY;
const [owner, name] = repository?.split('/') ?? [];
const isUserSite = name?.toLowerCase() === `${owner?.toLowerCase()}.github.io`;
const site = process.env.SITE_URL || (owner ? `https://${owner}.github.io` : undefined);
const base = process.env.BASE_PATH || (repository && !isUserSite && !process.env.SITE_URL ? `/${name}` : '/');

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
