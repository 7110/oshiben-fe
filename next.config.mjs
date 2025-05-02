const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/oshiben-fe/' : '',
  basePath: isProd ? '/oshiben-fe' : '',
  output: 'export'
};

export default nextConfig;