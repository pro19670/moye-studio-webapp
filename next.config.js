/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/moye-studio-webapp' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/moye-studio-webapp' : '',
  images: {
    unoptimized: true
  },
  // GitHub Pages 최적화
  distDir: 'out',
  // 정적 최적화 강화
  experimental: {
    optimizePackageImports: ['@heroicons/react']
  }
}

module.exports = nextConfig