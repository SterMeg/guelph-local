module.exports = {
  siteMetadata: {
    title: `Guelph Local`,
    description: `Local Guelph businesses offering delivery and pick up options during the COVID-19 crisis`,
    author: `@meghasomething`,
  },
  plugins: [
    "gatsby-plugin-eslint",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        // icon: `src/images/tailwind-icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(`./tailwind.config.js`),
          ...(process.env.NODE_ENV === "production"
            ? [require(`autoprefixer`), require(`cssnano`)]
            : []),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`],
      },
    },
    `gatsby-transformer-json`,
    {
      resolve:
      `gatsby-source-filesystem`,
      options: {
        path: `./src/data`,
      }
    },
    `gatsby-plugin-offline`,
  ],
};
