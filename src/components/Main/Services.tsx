/** @jsx jsx */
import { Box, Heading, jsx, Flex } from 'theme-ui';
import React from 'react';
import DesignSVG from '../../images/design';
import AppDevSVG from '../../images/appDev';
import WebDevSVG from '../../images/webdev';
import { Link } from 'gatsby';
import Consult from '../../images/consult';

const Services: React.FC = () => {
  const servicesTitle = 'We provide the best in the Market';
  const servicesSubtitle =
    'Here are some of the many ways that we can help you out.';
  return (
    <Box
      id="services"
      sx={{
        minHeight: ['630px', '500px'],
        maxWidth: '1110px',
        margin: '0 auto',
        padding: '100px 1.0875rem',
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Heading
          sx={{ fontSize: ['26px', '38px'], width: ['100%', 480], m: '0 auto' }}
        >
          {servicesTitle}
        </Heading>
        <p sx={{ opacity: '0.85' }}>{servicesSubtitle}</p>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: ['1fr', '1fr 1fr 1fr 1fr'],
          columnGap: '30px',
          height: 280,
          my: '4rem',
        }}
      >
        <Link
          to={'design'}
          style={{
            textDecoration: 'none',
          }}
        >
          <Flex
            sx={{
              variant: 'flex.card',
              mb: ['20px', '0px'],
              flexDirection: ['row', 'column'],
              py: ['15px', '0px'],
              height: '100%',
            }}
          >
            <DesignSVG />
            <Heading
              sx={{
                fontSize: '20px',
                mt: '2rem',
                opacity: 0.8,
                ml: ['10px', '0px'],
                color: `#000053`,
              }}
            >
              Design
            </Heading>
          </Flex>
        </Link>

        <Link
          to={'web-development'}
          style={{
            textDecoration: 'none',
          }}
        >
          <Flex
            sx={{
              variant: 'flex.card',
              mb: ['20px', '0px'],
              flexDirection: ['row', 'column'],
              py: ['15px', '0px'],
              height: '100%',
            }}
          >
            <WebDevSVG />
            <Heading
              sx={{
                fontSize: '20px',
                mt: '2rem',
                opacity: 0.8,
                ml: ['10px', '0px'],
                color: `#000053`,
              }}
            >
              Web Development
            </Heading>
          </Flex>
        </Link>

        <Link
          to={'app-development'}
          style={{
            textDecoration: 'none',
          }}
        >
          <Flex
            sx={{
              variant: 'flex.card',
              flexDirection: ['row', 'column'],
              py: ['15px', '0px'],
              height: '100%',
            }}
          >
            <AppDevSVG />
            <Heading
              sx={{
                fontSize: '20px',
                mt: '2rem',
                opacity: 0.8,
                ml: ['10px', '0px'],
                color: `#000053`,
              }}
            >
              App Development
            </Heading>
          </Flex>
        </Link>

        <Link
          to={''}
          style={{
            textDecoration: 'none',
          }}
        >
          <Flex
            sx={{
              variant: 'flex.card',
              flexDirection: ['row', 'column'],
              py: ['15px', '0px'],
              height: '100%',
            }}
          >
            <Consult />
            <Heading
              sx={{
                fontSize: '20px',
                mt: '2rem',
                opacity: 0.8,
                ml: ['10px', '0px'],
                color: `#000053`,
              }}
            >
              Technical Consulting
            </Heading>
          </Flex>
        </Link>
      </Box>
    </Box>
  );
};

export default Services;
