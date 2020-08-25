/** @jsx jsx */
import { jsx, Box, Flex, Heading } from 'theme-ui';
import React from 'react';
import AppDesignImg from '../../images/appDesignImg';
import Oval1x from '../../images/oval1x';
import Oval2x from '../../images/oval2x';

const AppDesign: React.FC = () => {
  const brandTitle =
    'App design that’s not just stunning, but a truly engaging product';
  const brandSubtitle =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In imperdiet dui non ex maximus varius. Fusce interdum felis at aliquet maximus. Vivamus tempor mauris ut molestie cursusm a.';
  return (
    <div sx={{ background: 'rgba(244, 245, 255, 0.5)', minHeight: '685px' }}>
      <Box
        sx={{
          m: '0 auto',
          maxWidth: 1110,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <hr
          sx={{
            borderTop: '1px solid #A7ADFF',
          }}
        />
        <Box sx={{ textAlign: 'center', pt: '77px' }}>
          <Heading
            sx={{
              fontSize: ['26px', '38px'],
              width: ['100%', 684],
              m: '0 auto',
              fontWeight: 600,
            }}
          >
            App design that provides unique experience across platforms
          </Heading>
          <p sx={{ opacity: '0.85', width: ['100%', 430], m: '0 auto' }}>
            We design stunning and exclusive layouts for Android and iOS apps
            that enhances user experience.
          </p>

          <Flex sx={{ position: 'absolute', display: ['none', 'block'] }}>
            <Box sx={{ position: 'relative', top: '-150px' }}>
              <span sx={{ position: 'relative', left: '752px', top: '6px' }}>
                <Oval1x />
              </span>
              <span sx={{ position: 'relative', left: '148px', top: '-27px' }}>
                <Oval2x />
              </span>
            </Box>
          </Flex>
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
                maxWidth: '520px',
                mt: ['10px', '100px'],
              }}
            >
              {brandTitle}
            </Heading>
            <p sx={{ opacity: '0.85', mt: ['10px', '-35px'] }}>
              {brandSubtitle}
            </p>
          </Flex>
          <AppDesignImg
            sx={{
              gridRow: [1, 'unset'],
              gridColumn: [1, 'unset'],
              width: '100%',
            }}
          />
        </Box>
        <hr
          sx={{
            borderBottom: '1px solid #A7ADFF',
            position: 'relative',
            bottom: '-31px',
          }}
        />
      </Box>
    </div>
  );
};

export default AppDesign;
