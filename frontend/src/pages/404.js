import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql } from 'gatsby';

const NotFoundPage = ({ location, siteTitle }) => (
  <Layout location={location} title={siteTitle}>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
