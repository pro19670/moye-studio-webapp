/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/moye-studio-webapp' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/moye-studio-webapp' : '',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig