/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  experimental: {
    serverActions: {
      allowedOrigins: ['sujathasanthurium.com', '*.sujathasanthurium.com'],
    },
  },
}

module.exports = nextConfig
