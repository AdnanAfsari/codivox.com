/** @jsx jsx */
import { jsx, Box, Flex, Heading } from 'theme-ui';
import React from 'react';
import SCircle from '../../images/sCircle';
import BCircle from '../../images/bCircle';
import ISixDots from '../../images/iSixDots';
import SixDots from '../../images/sixDots';

const Hi: React.FC = () => {
  const hiText =
    'Lorem ipsum dolor sit amet, at affert labitur signiferumque nec. Ea ius choro albucius appareat, ne facete officiis invidunt duo, nisl omittam sea an. Ut tale meis magna mei. Nec te impetus debitis feugait.';
  return (
    <Box
      sx={{
        width: '100%',
        m: '0 auto',
        background: [null, '#6670FD'],
        height: 400,
        my: '5rem',
        borderRadius: 30,
      }}
    >
      <Flex
        sx={{
          flexDirection: 'column',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Heading sx={{ color: ['#141633', 'background'], fontSize: '36px' }}>
          Say Hi!
        </Heading>
        <p
          sx={{
            maxWidth: '500px',
            opacity: '0.85',
            pb: '2rem',
            pt: '0.5rem',
            textAlign: 'center',
            color: ['#141633', '#fff'],
          }}
        >
          {hiText}
        </p>
        <Flex>
          <button
            sx={{
              variant: 'buttons.outlined',
              background: '#fff',
              fontWeight: 'bold',
              color: '#6670FD',
              width: 140,
              height: 50,
              mr: 10,
              ml: 0,
              fontSize: '1rem',
            }}
          >
            Get Estimate
          </button>
          <button
            sx={{
              variant: 'buttons.prime',
              background: ['#6670FD', '#fff'],
              color: ['#fff', '#6670FD'],
              width: 140,
              height: 50,
              ml: 10,
            }}
          >
            Contact Us
          </button>
        </Flex>
      </Flex>
      <Flex sx={{ position: 'absolute', display: ['none', 'block'] }}>
        <Box sx={{ position: 'relative', top: -400 }}>
          <span sx={{ position: 'relative', top: -150, left: -30 }}>
            <SCircle />
          </span>
          <span sx={{ position: 'relative', top: 150, left: -70 }}>
            <ISixDots />
          </span>
          <span sx={{ position: 'relative', bottom: -250, left: 650 }}>
            <BCircle />
          </span>
          <span sx={{ position: 'relative', top: -50, left: 420 }}>
            <SixDots />
          </span>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hi;
