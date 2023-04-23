// eslint-disable-next-line @typescript-eslint/no-var-requires
//const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

// module.exports = withPWA({
//   swcMinify: true,
//   typescript: {
//     ignoreBuildErrors: true
//   },
//   experimental: {
//     // Enables the styled-components SWC transform
//     styledComponents: true
//   },
//   pwa: {
//     dest: 'public',
//     disable: !isProd
//   }
// })

module.exports = () => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // compiler: {
    //   removeConsole: process.env.NODE_ENV !== 'development'
    // },
    pwa: {
      dest: 'public',
      disable: !isProd
      //register: true
    },
    typescript: {
      ignoreBuildErrors: true
    }
  }
  return nextConfig
}
