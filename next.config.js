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
}

module.exports = withKumaUI(nextConfig)
