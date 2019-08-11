/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// import 'antd/dist/antd.css';
import { Icon, Layout, Menu } from 'antd';
import { graphql, useStaticQuery, Link } from 'gatsby';
import React from 'react';
import './layout.css';
import Image from './image';
import { routes } from '../routes';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Layout>
        <Sider
          collapsible
          collapsed={true}
          style={{
            backgroundColor: 'white',
          }}
        >
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <Image
              style={{
                width: '50px',
                height: '50px',
              }}
            />
          </Link>
          <Menu defaultSelectedKeys={['1']} mode="inline">
            {routes.map(route => {
              return (
                <Menu.Item key={route.id}>
                  <Link to={route.path}>
                    <Icon
                      type={route.icon}
                      twoToneColor="#531dab"
                      theme="twoTone"
                    />
                    <span>{route.title}</span>
                  </Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '0 16px' }}>
            <main style={{ minHeight: '100vh' }}>{children}</main>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
            &bull;
            <a href="https://firebase.google.com/">
              <Icon theme="twoTone" twoToneColor="#FFCA28" type="fire" />
            </a>
            &bull;
            <a href="https://firebase.google.com/">
              <Icon theme="github" twoToneColor="#FFCA28" type="fire" />
            </a>
          </Footer>
        </Layout>
      </Layout>
      {/*  */}
    </>
  );
};

export default layout;
