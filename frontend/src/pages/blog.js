import { Link, graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Bio from '../components/bio';

export default function BlogPage({ data, location, siteTitle }) {
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blog" />
      <Bio />
      <div style={{ textAlign: 'center' }}>
        {data.allMarkdownRemark.edges.map(article => {
          const project = article.node.frontmatter;
          return (
            <article key={project.path}>
              <Link to={project.path} style={{ textDecoration: 'none' }}>
                <h1>{project.title}</h1>
                <p>
                  <span>{project.date}</span>
                </p>
                <p dangerouslySetInnerHTML={{ __html: article.node.excerpt }} />
                <button type="link">Read More</button>
              </Link>
            </article>
          );
        })}
      </div>
    </Layout>
  );
}
export const BlogQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date_published], order: DESC }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
          }
          id
          excerpt
          timeToRead
        }
      }
    }

    site {
      siteMetadata {
        title
      }
    }
  }
`;
