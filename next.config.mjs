/** @type {import('next').NextConfig} */
// const nextConfig = {};

const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'warathepj.github.io',
          port: '',
          pathname: '/js-ai-gallery/**',
        },
      ],
    },
  }
export default nextConfig;
