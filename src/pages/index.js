import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import { Button } from 'antd';
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hey!</h1>
    <Button>Hello antd</Button>
    <Link to="/page-2/">Blog</Link>
  </Layout>
);

export default IndexPage;
