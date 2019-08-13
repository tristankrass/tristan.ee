import { Typography } from 'antd';
import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
// import Image from '../components/image';
import SEO from '../components/seo';

const searchIndices = [
  { name: `Projects`, title: `Projects`, hitComp: `ProjectsHit` },
  { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
];
const { Title, Text } = Typography;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Title>Hey!</Title>
    <Text>I am a full-stack Dev, currently studying at Tal Tech.✌️</Text>

    <Link to="/blog/">Blog</Link>
  </Layout>
);

export default IndexPage;
