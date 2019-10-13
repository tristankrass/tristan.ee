require('dotenv').config({
  path: `.env`,
});
console.log(process.env.GATSBY_GRAPHQL_IDE);

module.exports = {
  siteMetadata: {
    title: `Tristan Krass`,
    description: `I am a bussiness oriented developer. While not developing my next crazy idea, I am playing football`,
    author: `@tristankrass`,
    siteUrl: `https://krass.netlify.com/`,
    social: {
      twitter: 'tristankrass',
      github: '',
      instagram: '',
    },
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'projects',
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-remark`,
    `gatsby-remark-prismjs`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tristan Krass`,
        short_name: `Tristan`,
        start_url: `/`,
        background_color: `#0336FF`,
        theme_color: `#0336FF`,
        display: `standalone`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,

    // resolve: `gatsby-source-github-api`,
    // options: {
    //   // token: required by the GitHub API
    //   token: process.env.GH_TOKEN,
    // GraphQLquery: defaults to a search query
    // graphQLQuery: anotherString,
    // // variables: defaults to variables needed for a search query
    // variables: someObject,
    // },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
