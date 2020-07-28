/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import React from 'react';
import { Link } from 'gatsby';
import Codivox from '../images/codivox';

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
        maxWidth: 1110,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Styled.h4>
        <Link
          to="/"
          sx={{
            color: (theme) => `${theme.colors.main}`,
            textDecoration: `none`,
          }}
        >
          <Codivox />
          {siteTitle}
        </Link>
      </Styled.h4>
    </div>
  </header>
);

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
