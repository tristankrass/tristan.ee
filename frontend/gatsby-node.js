const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve('src/templates/blogPost.js');
  const projectTemplate = path.resolve('src/templates/projectDetail.js');

  await graphql(`
    {
      blogPosts: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/blog/" } }
        sort: { fields: [frontmatter___date_published], order: DESC }
      ) {
        totalCount
        edges {
          node {
            id
            html
            frontmatter {
              title
              path
              date_published(formatString: "DD MMMM ,YYYY")
            }
          }
        }
      }
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
      ) {
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
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors);
    }
    // const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    // const next = index === 0 ? null : posts[index - 1].node;
    result.data.blogPosts.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogTemplate,
      });
    });
    result.data.projects.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: projectTemplate,
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode, basePath: 'content' });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
