import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Footer: React.FC = () => {
  return <footer>© {new Date().getFullYear()} , Footer Component</footer>;
};

export default Footer;
