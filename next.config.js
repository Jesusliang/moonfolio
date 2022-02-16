/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");
module.exports = {
  reactStrictMode: true,
  i18n
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: ["@svgr/webpack"]
  //   });

  //   return config;
  // }
  // experimental: {
  //   concurrentFeatures: true
  // }
  // i18n
};
