/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'example.com'],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig 