/** @jsx jsx */
import { jsx, Box, Flex, Heading } from 'theme-ui';
import React from 'react';
import { Link } from 'gatsby';
import { slide as Menu } from 'react-burger-menu';
import Codivox from '../images/codivox';

interface HeaderProps {
  siteTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  const tabs = [
    {
      content: 'Services',
      href: '#services',
    },
    {
      content: 'Work process',
      href: '#work-process',
    },
    {
      content: 'Blog',
      href: 'blog',
    },
  ];
  const styles: object = {
    bmBurgerButton: {
      position: 'fixed',
      width: '22px',
      height: '22px',
      right: '22px',
      top: '20px',
    },
    bmBurgerBars: {
      background: '#373a47',
    },
    bmBurgerBarsHover: {
      background: '#a90000',
    },
    bmCrossButton: {
      height: '30px',
      width: '24px',
      top: '20px',
      right: '20px',
    },
    bmCross: {
      background: '#b75a62',
      width: 5,
      height: 22,
      opacity: 0.5,
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      top: '0',
    },
    bmMenu: {
      background: '#f4f5ff',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    bmMorphShape: {
      fill: '#373a47',
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
    },
    bmItem: {
      display: 'inline-block',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
      left: 0,
      top: 0,
    },
  };
  return (
    <header
      sx={{
        background: `#f4f5ff`,
        position: 'sticky',
        top: 0,
        zIndex: 10,
        boxShadow:
          '0px 5px 8px 0 rgb(204 204 254 / 38%), 0 1px 2px 0 rgba(0,0,0,.06)',
      }}
    >
      <Box>
        <Flex
          as={'nav'}
          px={3}
          py={[2, 2, 1]}
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
          {/* Mobile */}
          <Flex
            sx={{ alignItems: 'center', display: ['flex', 'flex', 'none'] }}
          >
            <Menu styles={styles} right isOpen={false}>
              <ul
                sx={{
                  listStyle: 'none',
                  display: 'flex !important',
                  alignItems: 'center',
                  pl: 0,
                  flexDirection: 'column',
                  '&:focus': {
                    outline: 0,
                  },
                }}
              >
                {tabs.map((tab) => {
                  const { href, content } = tab;
                  return (
                    <li key={href} sx={{ textAlign: 'center' }}>
                      <Link
                        sx={{
                          variant: 'styles.headerLinks',
                          mx: 0,
                          my: 2,
                          width: '150px',
                        }}
                        to={`/${href}`}
                      >
                        {content}
                      </Link>
                    </li>
                  );
                })}
                <Link
                  to={'/contact'}
                  sx={{
                    variant: 'buttons.outlined',
                    width: '150px',
                    ml: 0,
                    mt: 3,
                  }}
                >
                  Contact Us
                </Link>
              </ul>
            </Menu>
          </Flex>
          {/* Desktop */}
          <Flex
            sx={{ alignItems: 'center', display: ['none', 'none', 'flex'] }}
          >
            <ul
              sx={{ listStyle: 'none', display: 'flex', alignItems: 'center' }}
            >
              {tabs.map((tab) => {
                const { href, content } = tab;
                return (
                  <li key={href}>
                    <Link
                      sx={{ variant: 'styles.headerLinks' }}
                      to={`/${href}`}
                    >
                      {content}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              to={'/contact'}
              sx={{
                variant: 'buttons.outlined',
              }}
            >
              Contact Us
            </Link>
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
