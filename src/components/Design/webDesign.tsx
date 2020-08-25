/** @jsx jsx */
import { jsx, Box, Flex, Heading } from 'theme-ui';
import React from 'react';
import DesingBrandImg from '../../images/designBrandImg';

const WebDesign: React.FC = () => {
  const brandTitle = 'From logo and branding to print and social media designs';
  const brandSubtitle =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In imperdiet dui non ex maximus varius. Fusce interdum felis at aliquet maximus. Vivamus tempor mauris ut molestie cursusm a.';
  return (
    <Box
      sx={{
        m: '0 auto',
        maxWidth: 1110,
        padding: `0 1.0875rem 1.45rem`,
        minHeight: '685px',
      }}
    >
      <Box sx={{ textAlign: 'center', pt: '77px' }}>
        <Heading
          sx={{
            fontSize: ['26px', '38px'],
            width: ['100%', 480],
            m: '0 auto',
            fontWeight: 600,
          }}
        >
          Make your brands go into the future
        </Heading>
        <p sx={{ opacity: '0.85' }}>
          We offers a rise-above attitude, a holistic approach to branding
        </p>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: ['100%', '50% 55%'],
          gap: '5%',
          gridAutoFlow: ['dense', null],
          alignItems: 'center',
          mt: '25px',
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
          <Heading
            sx={{
              fontSize: ['27px', '28px'],
              maxWidth: '450px',
              mt: ['10px', '100px'],
            }}
          >
            {brandTitle}
          </Heading>
          <p sx={{ opacity: '0.85', mt: ['10px', '-35px'] }}>{brandSubtitle}</p>
        </Flex>
        <DesingBrandImg
          sx={{
            gridRow: [1, 'unset'],
            gridColumn: [1, 'unset'],
            width: '100%',
          }}
        />
      </Box>
    </Box>
  );
};

export default WebDesign;
