/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // GitHub Pages는 이미 /moye-studio-webapp 경로에 있으므로 basePath 불필요
  images: {
    unoptimized: true
  },
  // GitHub Pages 최적화
  distDir: 'out'
}

module.exports = nextConfig