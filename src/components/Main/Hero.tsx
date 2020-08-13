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
        gridTemplateColumns: ['100%', '55% 45%'],
        gridAutoFlow: ['dense', null],
        minHeight: '635px',
        alignItems: 'center',
        // justifyItems: 'center',
        mb: ['80px', '0px'],
      }}
    >
      <Flex
        sx={{
          display: 'grid',
          gridTemplateRows: 'auto auto auto',
          height: ['calc( 300px )', 'calc( 400px )'],
          gridTemplateColumns: ['100%'],
          gridColumn: [1, null],
          textAlign: ['center', 'left'],
        }}
      >
        <Heading sx={{ fontSize: ['24px', '38px'] }}>{heroTitle}</Heading>
        <p sx={{ maxWidth: '370px', opacity: '0.85' }}>{heroSubtitle}</p>
        <button sx={{ variant: 'buttons.prime', width: ['100%', 210] }}>
          Get a free estimate
        </button>
      </Flex>
      <HeroSVG
        sx={{
          '@media screen and (max-width: 40rem)': {
            gridRow: 1,
            gridColumn: 1,
          },
          width: '100%',
        }}
      />
    </Box>
  );
};

export default Hero;
