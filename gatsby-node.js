const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const projectTemplate = path.resolve('src/templates/projectDetail.js');

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              author
              tech_stack
              cups_of_coffee
              githublink
              projectlink
              date(formatString: "DD MMMM, YYYY")
            }
            excerpt
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `${node.frontmatter.path}`,
        component: projectTemplate,
      });
    });
  });
};
