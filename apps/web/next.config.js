// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     typedRoutes: true
//   }
// };

// module.exports = nextConfig;

const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(new NodePolyfillPlugin());
    return config;
  },
};

module.exports = nextConfig;


