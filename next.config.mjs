/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Required for GitHub Pages
  output: 'export',
  basePath: '/Soft-Drinks-next',
  trailingSlash: true,

  // Required for external images
  images: {
    unoptimized: true, // disables automatic optimization for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'th.bing.com',
      },
      {
        protocol: 'https',
        hostname: 'www.bing.com',
      }
    ]
  }
};

export default nextConfig;
