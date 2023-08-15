/** @type {import('next').NextConfig} */
const StylelintPlugin = require("stylelint-webpack-plugin");

nextConfig = {
  webpack: (config) => {
    if (process.env.NODE_ENV !== 'production' && process.env.STYLELINT_DISABLE !== 'true') config.plugins.push(new StylelintPlugin());

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  output: 'standalone',
}

module.exports = nextConfig
