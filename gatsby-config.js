module.exports = {
  siteMetadata: {
    title: `Codivox`,
    description: ``,
    author: `@codivox`,
  },
  plugins: [
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
        name: `codivox`,
        short_name: `codivox`,
        start_url: `/`,
        background_color: `#6670FD`,
        theme_color: `#6670FD`,
        display: `minimal-ui`,
        icon: `src/images/codivox.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-theme-ui`,
      options: {
        preset: "@theme-ui/preset-tailwind",
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Josefin Sans:bold', 'Lato:400,700']
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
