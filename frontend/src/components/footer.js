import React from 'react';

const footer = () => (
  <footer className="footer" style={{ textAlign: 'center' }}>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
    &bull;
    <a href="https://firebase.google.com/"></a>
    &bull;
    <a href="https://firebase.google.com/"></a>
    <a href="https://docs.google.com/document/d/170mS6UaKov3612wl0vofmRzQFTbXimldN_UuXaYv-fo/edit">
      Resume
    </a>
    <a
      href="https://krass.netlify.com/rss.xml"
      className="button is-black"
      rel="no-reffer"
    >
      Rss
    </a>
  </footer>
);

export default footer;
