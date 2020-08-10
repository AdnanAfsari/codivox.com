/** @jsx jsx */
import { jsx, Box, Flex, Heading } from 'theme-ui';
import React from 'react';
import HeroSVG from '../../images/hero';

const Hero: React.FC = () => {
  const heroTitle =
    'We’re developers and designers specialized in building quality web and mobile apps';
  const heroSubtitle =
    'From idea to launch, we build stunning and performant apps while putting a lot of effort into optimizations and enhancing UI/UX';
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: ['55% 45%'],
        minHeight: '635px',
        alignItems: 'center',
        // justifyItems: 'center',
      }}
    >
      <Flex
        sx={{
          display: 'grid',
          gridTemplateRows: 'auto auto auto',
          height: 'calc( 400px )',
          gridTemplateColumns: ['100%'],
        }}
      >
        <Heading sx={{ fontSize: '38px' }}>{heroTitle}</Heading>
        <p sx={{ maxWidth: '370px', opacity: '0.85' }}>{heroSubtitle}</p>
        <button sx={{ variant: 'buttons.prime' }}>Get a free estimate</button>
      </Flex>
      <HeroSVG />
    </Box>
  );
};

export default Hero;
