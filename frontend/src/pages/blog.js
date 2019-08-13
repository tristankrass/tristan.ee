import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';
import { Button } from 'antd';

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    {data.allMarkdownRemark.edges.map(article => {
      const project = article.node.frontmatter;
      return (
        <div container spacing={40} key={article.node.id} wrap-xs-wrap-reverse>
          <div item sm={12} md={4} style={{ marginBottom: '5rem' }}>
            <h1>{project.title}</h1>
            <p>
              <Link href={project.githublink} target="_blank">
                <Button color="primary">Visit The Project here.</Button>
              </Link>
            </p>
            <p>
              <span>{project.date}</span>
            </p>
            <p>{article.node.excerpt}</p>
            <Link to={project.path} style={{ textDecoration: 'none' }}>
              <Button type="primary">Read More</Button>
            </Link>
          </div>
        </div>
      );
    })}
  </Layout>
);
export const projectQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(blog-posts)/" } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            path
            title
            githublink
            projectPhoto
            date(formatString: "YYYY,  DD MMMM")
          }
          excerpt
        }
      }
    }
  }
`;
export default BlogPage;
