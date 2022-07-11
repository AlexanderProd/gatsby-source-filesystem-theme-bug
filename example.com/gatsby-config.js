module.exports = {
  siteMetadata: {
    title: `Example.com`,
    description: `Lorem ipsum dolor sit amet.`,
    author: `Alexander Hörl`,
    siteUrl: `https://example.com/`,
  },
  plugins: [
    `gatsby-theme-example`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
