/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If your GitHub Pages URL is https://tajnees.github.io/Portfolio/, use '/Portfolio'
  // If it's a custom domain or user page, set basePath to ''
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio',
  distDir: 'docs',
}

module.exports = nextConfig

