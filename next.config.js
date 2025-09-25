/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.builder.io', 'cdn.builder.io']
  }
}

module.exports = nextConfig
