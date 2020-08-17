/** @jsx jsx */
import { Box, Flex, Heading, jsx } from 'theme-ui';
import React from 'react';
import { useStaticQuery, graphql, PageProps } from 'gatsby';
import Warning from '../../images/warning';
import Union from '../../images/union';
import flex from '../../gatsby-plugin-theme-ui/flex';

const Modal: React.FC = () => {
  return (
    <React.Fragment>
      <div
        sx={{
          backgroundColor: '#6670FD',
          height: '50px',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <div
          sx={{
            margin: '0 auto',
          }}
        >
          <Box
            sx={{
              width: 1110,
              display: 'grid',
              gridTemplateColumns: ['1fr 1fr'],
              gridTemplateRows: ['1fr'],
              px: 3,
            }}
          >
            <Flex
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '16px',
              }}
            >
              <Warning />
              <p
                sx={{
                  paddingLeft: '10px',
                }}
              >
                Hey there, before you decide to contact us, see if we match.
              </p>
            </Flex>

            <Flex
              sx={{
                justifySelf: 'end',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <button
                sx={{
                  pr: '5px',
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                  fontSize: '16px',
                }}
              >
                See if we match
              </button>
              <Union />
            </Flex>
          </Box>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
