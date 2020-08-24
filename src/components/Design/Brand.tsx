/** @jsx jsx */
import { jsx, Box, Flex, Heading } from 'theme-ui';
import React from 'react';
import DesignHeroSVG from '../../images/DesignHeroSVG';
import Oval1x from '../../images/oval1x';
import Oval2x from '../../images/oval2x';

const Brand: React.FC = () => {
  const heroTitle =
    'User-centric design, research, testing and prototyping for web and mobile apps.';
  const heroSubtitle =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In imperdiet dui non ex maximus varius. Fusce interdum felis at aliquet maximus.';
  return (
    <div sx={{ background: 'rgba(244, 245, 255, 0.5)', minHeight: '600px' }}>
      <Box
        sx={{
          m: '0 auto',
          maxWidth: 1110,
          padding: `0 1.0875rem 1.45rem`,
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

          <Flex sx={{ position: 'absolute', display: ['none', 'block'] }}>
            <Box sx={{ position: 'relative' }}>
              <span sx={{ position: 'relative', left: '300px', top: '49px' }}>
                <Oval1x />
              </span>
              <span sx={{ position: 'relative', left: '495px' }}>
                <Oval2x />
              </span>
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default Brand;
