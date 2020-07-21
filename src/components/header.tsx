import React from 'react';
import { Link } from 'gatsby';

interface HeaderProps {
  siteTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <header
    style={{
      background: `#2496ED`,
      marginBottom: `1.45rem`,
    }}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
