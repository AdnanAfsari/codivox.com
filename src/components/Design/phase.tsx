/** @jsx jsx */
import { Box, Heading, jsx, Flex } from 'theme-ui';
import React from 'react';
import DesignSVG from '../../images/design';
import AppDevSVG from '../../images/appDev';
import WebDevSVG from '../../images/webdev';

const Phase: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: ['630px', '500px'],
        m: '0 auto',
        maxWidth: 1110,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: ['1fr', '1fr 1fr 1fr'],
          columnGap: '60px',
          height: 556,
          my: '4rem',
        }}
      >
        <Flex
          sx={{
            variant: 'flex.phase',
            mb: ['20px', '0px'],
            flexDirection: ['row', 'column'],
            px: '30px',
            textAlign: 'center',
          }}
        >
          <p>Phase 1</p>
          <DesignSVG />
          <Heading
            sx={{
              fontSize: '28px',
              mt: '2rem',
              opacity: 0.8,
              // ml: ['10px', '0px'],
            }}
          >
            Strategy before execution
          </Heading>
          <p
            sx={{
              color: 'rgba(20, 22, 51, 0.5)',
              lineHeight: '160%',
            }}
          >
            We start with an in-depth discussion of your business goals and
            challenges. We’ll ask big questions like, What is your vision? Who
            is your target audience? What keeps you up at night? Papyrus or
            Comic Sans? (Kidding!) Together, we’ll agree on the problems we’re
            trying to solve and create a set of goals to measure our success.
          </p>
        </Flex>
      </Box>
    </Box>
  );
};

export default Phase;
