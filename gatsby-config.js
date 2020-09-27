module.exports = {
  siteMetadata: {
    siteUrl: `https://tomhsiao1260.github.io`, // Domain of your site. No trailing slash!
    title: `Hsiao Yao`, // Navigation and Site Title
    titleAlt: `Hsiao Yao`, // Title for JSONLD
    description: `Website built by Hsiao Yao who is an art lover with physics and engineering background.`,
    banner: `/images/gatsby-icon.png`, // Used for SEO
    headline: `This is a Hsiao Yao personal website.`, // Headline for schema.org JSONLD
    siteLanguage: 'en', // Language Tag on <html> element
    ogLanguage: 'en_US', // Facebook Language
    author: `Hsiao Yao`, // Author for schemaORGJSONLD
    twitter: ``, // Twitter Username
    facebook: ``, // Facebook Site Name
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
