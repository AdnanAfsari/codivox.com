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
          height: 330,
          my: '4rem',
        }}
      >
        <Flex
          sx={{
            variant: 'flex.card',
            mb: ['20px', '0px'],
            flexDirection: ['row', 'column'],
            py: ['15px', '0px'],
          }}
        >
          <DesignSVG />
          <Heading
            sx={{
              fontSize: '20px',
              mt: '2rem',
              opacity: 0.8,
              ml: ['10px', '0px'],
            }}
          >
            Design
          </Heading>
        </Flex>
      </Box>
    </Box>
  );
};

export default Phase;
