import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql } from 'gatsby';

const SecondPage = ({ siteTitle, location }) => (
  <Layout location={location} title={siteTitle}>
    <SEO title="Blog" />
    <h1>here</h1>
  </Layout>
);

export default SecondPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
