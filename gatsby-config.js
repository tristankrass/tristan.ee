require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
console.log(process.env.GATSBY_GRAPHQL_IDE);

module.exports = {
  siteMetadata: {
    title: `Tristan Krass`,
    description: `I am a bussiness oriented developer. While not developing my next crazy idea, I am playing football`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-github-api`,
      options: {
        // token: required by the GitHub API
        token: process.env.GH_TOKEN,
        // GraphQLquery: defaults to a search query
        // graphQLQuery: anotherString,
        // // variables: defaults to variables needed for a search query
        // variables: someObject,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
