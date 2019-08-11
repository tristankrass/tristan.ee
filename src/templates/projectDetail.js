import React from 'react';
import { graphql } from 'gatsby';

export default function projecDetail({ data }) {
  const project = data.markdownRemark;
  const details = data.markdownRemark.frontmatter;
  return (
    <>
      <h1>{details.title}</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: project.html }}></div>
    </>
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
  }
`;
