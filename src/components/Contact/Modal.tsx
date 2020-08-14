/** @jsx jsx */
import { Box, Heading, jsx } from 'theme-ui';
import React from 'react';
import { useStaticQuery, graphql, PageProps } from 'gatsby';

const Modal: React.FC = () => {
  return (
    <React.Fragment>
      <div sx={{ backgroundColor: '#6670FD', height: '50px' }}>
        <div
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              width: 1110,
              display: 'grid',
              gridTemplateColumns: ['1fr 1fr'],
              gridTemplateRows: ['1fr'],
              lineHeight: '50px',
              px: 3,
            }}
          >
            <p>Hey there, before you decide to contact us, see if we match.</p>
            <p
              sx={{
                justifySelf: 'end',
              }}
            >
              Hey there, before you decide to contact us, see if we match.
            </p>
          </Box>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
