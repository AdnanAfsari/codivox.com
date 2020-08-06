/** @jsx jsx */
import { Box, Heading, jsx, Flex } from 'theme-ui';
import React from 'react';
import Enquiry from '../../images/enquiry';
import Talk from '../../images/talk';
import Estimate from '../../images/estimate';
import Team from '../../images/team';

const Process: React.FC = () => {
  const processTitle = 'How it begins';
  const processSubtitle =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  return (
    <Box>
      <Box sx={{ textAlign: 'center', mt: '6rem', mb: '4rem' }}>
        <Heading sx={{ fontSize: '38px', width: 480, m: '0 auto' }}>
          {processTitle}
        </Heading>
        <p sx={{ opacity: '0.85', width: '500px', m: '0 auto' }}>
          {processSubtitle}
        </p>
      </Box>
      <Flex
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '4fr 2fr 4fr',
            gridTemplateRows: '250px',
          }}
        >
          <Flex sx={{ flexDirection: 'column' }}>
            <Enquiry />
            <Heading sx={{ color: 'mainDark', mt: 3 }}>1. Enquiry</Heading>
            <p sx={{ m: 0, opacity: 0.8, width: 300, mr: 20 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </Flex>
          <Box>2</Box>
          <Box></Box>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '4fr 2fr 4fr',
            gridTemplateRows: '250px',
          }}
        >
          <Box></Box>
          <Box>5</Box>
          <Flex sx={{ flexDirection: 'column', ml: 20 }}>
            <Talk />
            <Heading sx={{ color: 'mainDark', mt: 3 }}>2. Let's talk!</Heading>
            <p sx={{ m: 0, opacity: 0.8, width: 300 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </Flex>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '4fr 2fr 4fr',
            gridTemplateRows: '250px',
          }}
        >
          <Flex sx={{ flexDirection: 'column' }}>
            <Estimate />
            <Heading sx={{ color: 'mainDark', mt: 3 }}>
              3. First estimate
            </Heading>
            <p sx={{ m: 0, opacity: 0.8, width: 300, mr: 20 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </Flex>
          <Box>8</Box>
          <Box></Box>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '4fr 2fr 4fr',
            gridTemplateRows: '250px',
          }}
        >
          <Box></Box>
          <Box>11</Box>
          <Flex sx={{ flexDirection: 'column' }}>
            <Team />
            <Heading sx={{ color: 'mainDark', mt: 3 }}>
              4. Meet your team
            </Heading>
            <p sx={{ m: 0, opacity: 0.8, width: 300 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Process;
