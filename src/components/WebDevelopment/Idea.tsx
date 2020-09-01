/** @jsx jsx */
import { jsx, Box, Flex, Heading } from 'theme-ui';
import React from 'react';
import UserExperianceImg from '../../images/userExperianceImg';

const Idea: React.FC = () => {
  const brandTitle =
    'Developed by Facebook, used by big players like Uber, Instagram and Spotify.';
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
            fontSize: ['26px', '36px'],
            width: ['100%', '512px'],
            m: '0 auto',
            fontWeight: 600,
          }}
        >
          Let’s turn your idea into stuning web app
        </Heading>
        <p sx={{ opacity: '0.85', width: ['100%', '446px'], m: '0 auto' }}>
          We provide good user experience, high performance, SEO friendly
          websites with modern technology.
        </p>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: ['100%', '45% 45%'],
          gridTemplateRows: '1fr',
          gap: '5%',
          alignItems: 'center',
          mt: '25px',
        }}
      >
        <UserExperianceImg
          sx={{
            width: '100%',
          }}
        />
        <Flex
          sx={{
            display: 'grid',
            gridTemplateRows: 'auto auto auto',
            height: ['calc( 300px )', 'calc( 400px )'],
            gridTemplateColumns: ['100%'],
            textAlign: ['center', 'left'],
          }}
        >
          <Heading
            sx={{
              fontSize: ['27px', '28px'],
              maxWidth: '455px',
              mt: ['10px', '100px'],
            }}
          >
            {brandTitle}
          </Heading>
          <p sx={{ opacity: '0.85', mt: ['10px', '-35px'] }}>{brandSubtitle}</p>
        </Flex>
      </Box>
    </Box>
  );
};

export default Idea;
