import React from 'react';
import { Link } from 'gatsby';
import '../styles/style.scss';
import { routes } from '../utils/routes';
import Footer from './footer';
class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    return (
      <div className="">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-menu">
            <div className="navbar-start">
              {routes.map(r => {
                return (
                  <Link className="navbar-item" to={r.path}>
                    {r.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
        <main className="container is-narrow">{children}</main>

        <Footer />
      </div>
    );
  }
}

export default Layout;
