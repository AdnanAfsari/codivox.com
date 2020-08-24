/** @jsx jsx */
import { jsx, Box, Flex, Heading } from 'theme-ui';
import React from 'react';
import DesignHeroSVG from '../../images/DesignHeroSVG';

const Hero: React.FC = () => {
  const heroTitle =
    'User-centric design, research, testing and prototyping for web and mobile apps.';
  const heroSubtitle =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In imperdiet dui non ex maximus varius. Fusce interdum felis at aliquet maximus.';
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: ['100%', '50% 55%'],
        gap: '5%',
        gridAutoFlow: ['dense', null],
        minHeight: '635px',
        alignItems: 'center',
        mb: ['80px', '0px'],
        mt: ['0px', '34px'],
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
        <Heading sx={{ fontSize: ['27px', '36px'] }}>{heroTitle}</Heading>
        <p sx={{ maxWidth: '370px', opacity: '0.85', mx: ['auto', 0] }}>
          {heroSubtitle}
        </p>
        <button
          sx={{ variant: 'buttons.prime', width: ['100%', 210], mt: [3, 0] }}
        >
          Get a free estimate
        </button>
      </Flex>
      <DesignHeroSVG
        sx={{
          gridRow: [1, 'unset'],
          gridColumn: [1, 'unset'],
          width: '100%',
          mt: 2,
        }}
      />
    </Box>
  );
};

export default Hero;
