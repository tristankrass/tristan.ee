require('dotenv').config({
  path: `.env`,
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
        name: `pages`,
        path: `${__dirname}/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog-posts`,
        name: 'blog-posts',
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
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true,
      },
    },
    {
      resolve: `gatsby-plugin-less`, // This is nessecary for overriding antd-default colors
      options: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#1890ff',
          // 'secondary-color': '',
          // 'text-color': '',
          // 'text-color-secondary': '',
          // 'heading-color': '',
          // 'layout-header-background': '',
          // 'btn-primary-bg': '',
          // 'processing-color': '',
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-remark`,
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
