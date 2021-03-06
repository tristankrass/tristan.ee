import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default function projecDetail({ data, location, siteTitle }) {
  // const project = data.markdownRemark;
  // const details = data.markdownRemark.frontmatter;
  // console.log(details);
  const { html } = data.markdownRemark;
  const {
    cups_of_coffee,
    date,
    githublink,
    tech_stack,
    title,
  } = data.markdownRemark.frontmatter;

  return (
    <Layout location={location} title={siteTitle}>
      <h1>{title}</h1>
      <p>{tech_stack}</p>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export const projectQuery = graphql`
  query ProjectByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        path
        title
        author
        date
        tech_stack
        cups_of_coffee
        githublink
        projectlink
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
