const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/oshiben-fe/' : '',
  basePath: isProd ? '/oshiben-fe' : '',
  output: 'export'
};

module.exports = nextConfig;
