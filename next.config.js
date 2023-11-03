const { withKumaUI } = require('@kuma-ui/next-plugin')

/** @type {import('next').NextConfig} */
// Next.js v13.5.4 のバグがありそうなのでコメントアウト
// const nextConfig = {
//   reactStrictMode: true,
//   output: 'export',
// }
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ['images.microcms-assets.io'],
  },
}

module.exports = withKumaUI(nextConfig)
