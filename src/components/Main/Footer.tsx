/** @jsx jsx */
import { jsx, Box, Flex, Heading } from 'theme-ui';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Footer: React.FC = () => {
  return (
    <footer
      sx={{
        background: (theme) => `${theme.colors.footer}`,
        minHeight: '424px',
        margin: `0 auto`,
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
      }}
    >
      {/* © , Footer Component */}
    </footer>
  );
};

export default Footer;
