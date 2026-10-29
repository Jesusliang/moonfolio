module.exports = {
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es"],
    localeDetection: true
  },
  reloadOnPrerender: process.env.NODE_ENV === "development"
};
