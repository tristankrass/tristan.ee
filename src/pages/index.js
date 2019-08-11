import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
// import Image from '../components/image';
import SEO from '../components/seo';
import { Button, Typography } from 'antd';

const { Title, Text } = Typography;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Title>Hey!</Title>
    <Text>I am a full-stack Dev, currently studying at Tal Tech.✌️</Text>

    <Button>Hello antd</Button>
    <Link to="/blog/">Blog</Link>
  </Layout>
);

export default IndexPage;
