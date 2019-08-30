import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
export default function projecDetail({ data, location, siteTitle }) {
  const { html } = data.markdownRemark;
  const { title } = data.markdownRemark.frontmatter;

  return (
    <Layout location={location} title={siteTitle}>
      <h1>{title}</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}
export const blogQuery = graphql`
  query blogQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        path
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
