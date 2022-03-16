module.exports = {
  siteMetadata: {
    title: `Azucena Zhou | Frontend Developer Portfolio`,
    description: `Ohayou sekai, good morinig World! I am a self-taught Software Developer who just really likes pretty things. This porfolio in itself is a sneak peek of my web developemnt skills.`,
    author: `@azuzhou`,
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
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Azucena Zhou | Frontend Developer Portfolio`,
        short_name: `Azucena Zhou | Portfolio`,
        lang: `en`,
        start_url: `/`,
        background_color: `#4F86F7`,
        theme_color: `#4F86F7`,
        display: `minimal-ui`,
        icon: `src/images/avatar.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    `gatsby-plugin-root-import`,
    `gatsby-plugin-netlify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
