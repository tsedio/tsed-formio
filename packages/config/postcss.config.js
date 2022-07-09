module.exports = {
  plugins: [
    require("postcss-flexbugs-fixes"),
    require("postcss-preset-env")({
      autoprefixer: {
        flexbox: "no-2009"
      },
      stage: 3
    }),
    require("postcss-normalize"),
    require("tailwindcss"),
    require("postcss-nested"),
    require("autoprefixer")
  ]
};
