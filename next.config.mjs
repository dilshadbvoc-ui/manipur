/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Trust the reverse proxy headers (required for RSC behind Nginx)
  experimental: {
    trustHostHeader: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '**.cloudinary.com' },
      { protocol: 'https', hostname: '**.googleapis.com' },
      { protocol: 'https', hostname: '**' },
    ],
  },
};

export default nextConfig;
