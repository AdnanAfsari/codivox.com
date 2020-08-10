/** @jsx jsx */
import { Box, Heading, jsx, Flex } from 'theme-ui';
import React from 'react';
import DesignSVG from '../../images/design';
import AppDevSVG from '../../images/appDev';
import WebDevSVG from '../../images/webdev';

const Services: React.FC = () => {
  const servicesTitle = 'We provide the best in the Market';
  const servicesSubtitle =
    'Here are some of the many ways that we can help you out.';
  return (
    <Box sx={{ minHeight: ['630px', '500px'] }}>
      <Box sx={{ textAlign: 'center' }}>
        <Heading sx={{ fontSize: '38px', width: 480, m: '0 auto' }}>
          {servicesTitle}
        </Heading>
        <p sx={{ opacity: '0.85' }}>{servicesSubtitle}</p>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: ['1fr 1fr 1fr'],
          columnGap: '60px',
          height: 330,
          my: '4rem',
        }}
      >
        <Flex
          sx={{
            variant: 'flex.card',
          }}
        >
          <DesignSVG />
          <Heading
            sx={{
              fontSize: '20px',
              mt: '2rem',
              opacity: 0.8,
            }}
          >
            Design
          </Heading>
        </Flex>
        <Flex
          sx={{
            variant: 'flex.card',
          }}
        >
          <WebDevSVG />
          <Heading
            sx={{
              fontSize: '20px',
              mt: '2rem',
              opacity: 0.8,
            }}
          >
            Web Development
          </Heading>
        </Flex>
        <Flex
          sx={{
            variant: 'flex.card',
          }}
        >
          <AppDevSVG />
          <Heading
            sx={{
              fontSize: '20px',
              mt: '2rem',
              opacity: 0.8,
            }}
          >
            App Development
          </Heading>
        </Flex>
      </Box>
    </Box>
  );
};

export default Services;
