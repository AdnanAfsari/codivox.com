/** @jsx jsx */
import { jsx, Box, Flex, Heading } from 'theme-ui';
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
      maxWidth: 1110,
      margin: `0 auto`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
  >
    <Box py={4} bg="background" sx={{ width: '100%' }}>
      <Flex
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link to="/" sx={{ textDecoration: 'none' }}>
          <Heading sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Codivox />
            <span sx={{ ml: 2, color: 'text' }}>{siteTitle}</span>
            <span sx={{ color: (theme) => `${theme.colors.main}` }}>.</span>
          </Heading>
        </Link>
        <nav>
          <span sx={{ margin: '0 25px' }}>Services</span>
          <span sx={{ margin: '0 25px' }}>Work process</span>
          <span sx={{ margin: '0 25px' }}>Blog</span>
          <button sx={{ variant: 'buttons.outlined' }}>Let's Talk</button>
        </nav>
      </Flex>
    </Box>
  </header>
);

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
