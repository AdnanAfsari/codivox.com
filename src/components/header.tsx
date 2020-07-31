/** @jsx jsx */
import { jsx, Box, Flex, Heading } from 'theme-ui';
import React from 'react';
import { Link } from 'gatsby';
import Codivox from '../images/codivox';

interface HeaderProps {
  siteTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  const tabs = [
    {
      content: 'Services',
      href: 'services',
    },
    {
      content: 'Work process',
      href: 'work-process',
    },
    {
      content: 'Blog',
      href: 'blog',
    },
  ];
  return (
    <header
      sx={{
        background: (theme) => `${theme.colors.background}`,
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}
    >
      <Box bg="background">
        <Flex
          as={'nav'}
          px={3}
          py={1}
          sx={{
            maxWidth: 1110,
            margin: `0 auto`,
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
          <Flex sx={{ alignItems: 'center' }}>
            <ul
              sx={{ listStyle: 'none', display: 'flex', alignItems: 'center' }}
            >
              {tabs.map((tab, i) => {
                const { href, content } = tab;
                return (
                  <li key={href}>
                    <Link
                      sx={{ variant: 'styles.headerLinks' }}
                      to={`#${href}`}
                    >
                      {content}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <button sx={{ variant: 'buttons.outlined' }}>Let's Talk</button>
          </Flex>
        </Flex>
      </Box>
    </header>
  );
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
