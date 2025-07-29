// next.config.mjs
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const webpack = (config) => {
  config.resolve.alias['@'] = resolve(__dirname, 'src');
  return config;
};

const nextConfig = {
  webpack,
};

export default nextConfig;
