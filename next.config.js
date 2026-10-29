/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");
module.exports = {
  reactStrictMode: true,
  i18n,
  images: {
    // Serve images as-is: the portfolio only has a few local images, and turning the optimizer off
    // removes the /_next/image endpoint, which carries several security advisories in Next 12.
    // In 12.3 `unoptimized` alone keeps the route alive; a non-default loader is what disables it
    // (next/image never calls the loader while `unoptimized` is set).
    unoptimized: true,
    loader: 'custom'
  }
};
