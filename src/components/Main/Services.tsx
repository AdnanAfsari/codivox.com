/** @jsx jsx */
import { Box, Heading, jsx, Flex } from 'theme-ui';
import React from 'react';
import DesignSVG from '../../images/design';
import AppDevSVG from '../../images/appDev';
import WebDevSVG from '../../images/webdev';
import { Link } from 'gatsby';
import Consult from '../../images/consult';

const Services: React.FC = () => {
  const servicesTitle = 'Build your idea with quality-first approach';
  const servicesSubtitle = 'Here is what we can do together';
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
          sx={{
            fontSize: ['26px', '38px'],
            width: ['100%', 480],
            m: '0 auto',
            color: `#000053`,
          }}
        >
          {servicesTitle}
        </Heading>
        <p
          style={{
            opacity: '0.85',
            textTransform: 'uppercase',
            color: ' #5954ff',
            letterSpacing: '2.5px',
          }}
        >
          {servicesSubtitle}
        </p>
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
                mt: '1rem',
                opacity: 0.8,
                ml: ['10px', '0px'],
                color: `#000053`,
              }}
            >
              Design
            </Heading>
            <p
              style={{
                textAlign: 'center',
                marginTop: 5,
                opacity: 0.85,
                color: '#353376',
                padding: '0 10px',
              }}
            >
              We design your idea from sleek logo to stunning UI with huge
              emphasis on UX
            </p>
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
                mt: '1rem',
                opacity: 0.8,
                ml: ['10px', '0px'],
                color: `#000053`,
              }}
            >
              Web Development
            </Heading>
            <p
              style={{
                textAlign: 'center',
                marginTop: 5,
                opacity: 0.85,
                color: '#353376',
                padding: '0 10px',
              }}
            >
              We can modernize and enhance the way your website look, or
              optimize it load faster
            </p>
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
                mt: '1rem',
                opacity: 0.8,
                ml: ['10px', '0px'],
                color: `#000053`,
              }}
            >
              App Development
            </Heading>
            <p
              style={{
                textAlign: 'center',
                marginTop: 5,
                opacity: 0.85,
                color: '#353376',
                padding: '0 10px',
              }}
            >
              Make your MVP with cost-efficient and cross-platform code with
              engaging UX
            </p>
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
                mt: '1rem',
                opacity: 0.8,
                ml: ['10px', '0px'],
                color: `#000053`,
              }}
            >
              Technical Consulting
            </Heading>
            <p
              style={{
                textAlign: 'center',
                marginTop: 5,
                opacity: 0.85,
                color: '#353376',
                padding: '0 10px',
              }}
            >
              Need an expert knowledge? or want to validate project from
              technical perspective
            </p>
          </Flex>
        </Link>
      </Box>
    </Box>
  );
};

export default Services;
