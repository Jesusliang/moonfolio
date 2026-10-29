/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");
module.exports = {
  reactStrictMode: true,
  i18n,
  images: {
    // Serve images as-is: the portfolio only has a few local images, and turning the optimizer off
    // removes the /_next/image endpoint, which carries several security advisories in Next 12.
    unoptimized: true
  }
};
