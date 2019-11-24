require('dotenv').config({
  path: `.env`,
});
console.log(
  '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++'
);

console.log(
  '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++'
);

module.exports = {
  siteMetadata: {
    title: `Tristan Krass`,
    description: `I am a bussiness oriented developer. While not developing my next crazy idea, I am playing football`,
    author: `@tristankrass`,
    siteUrl: `https://tristan.ee/`,
    copyright: `$tk © ${new Date().getFullYear()}`,
    social: {
      twitter: 'tristankrass',
      github: 'tristankrass',
      instagram: 'tristankrass',
    },
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-feed`,
    `gatsby-plugin-typescript`,
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
        icon: `src/images/logo.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GitHub`,
        fieldName: `github`,
        url: `https://api.github.com/graphql`,
        headers: {
          Authorization: `bearer ${process.env.GH_TOKEN}`,
        },
        fetchOptions: {},
      },
    },
    `gatsby-plugin-offline`,
  ],
};
