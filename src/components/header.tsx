/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import React from 'react';
import { Link } from 'gatsby';

interface HeaderProps {
  siteTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <header
    sx={{
      background: (theme) => `${theme.colors.background}`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      sx={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Styled.h1>
        <Link
          to="/"
          sx={{
            color: (theme) => `${theme.colors.main}`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Styled.h1>
    </div>
  </header>
);

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
