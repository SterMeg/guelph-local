module.exports = {
  siteMetadata: {
    title: `Shop Guelph Local`,
    description: `Local Guelph businesses offering delivery and pick up options during the COVID-19 crisis`,
    author: `@meghasomething`,
  },
  plugins: [
    "gatsby-plugin-eslint",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shop Guelph Local`,
        short_name: `ShopGuelph`,
        description: `Local Guelph and area businesses offering delivery and pick up options during the COVID-19 crisis`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#457B9D`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
