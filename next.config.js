/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org'],
    formats: ['image/avif', 'image/webp'],
  },
  publicRuntimeConfig: {
    apiKey: process.env.API_KEY,
  }
}

module.exports = nextConfig
