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
      <div className="container is-narrow columns is-multiline is-variable is-12">
        {data.allMarkdownRemark.edges.map(article => {
          const project = article.node.frontmatter;
          return (
            <article
              key={project.path}
              className="column is-4-desktop is-6-tablet is-12-phone"
            >
              <h1 className="title is-1">{project.title}</h1>
              <p>
                <span>{project.date}</span>
              </p>
              <p
                className=""
                dangerouslySetInnerHTML={{ __html: article.node.excerpt }}
              />
              <Link to={project.path} style={{ textDecoration: 'none' }}>
                <button className="button is-light" type="link">
                  Read More
                </button>
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
