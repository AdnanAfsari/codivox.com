import React from 'react';
import { Box, Heading, Flex, Button, Grid } from 'theme-ui';

import SEO from '../components/seo';
import ErrorIlustration from './../images/ErrorIlustration';
import Ellipse from './../images/Ellipse';
import EFiveEllipses from './../images/EFiveEllipses';
import EllipsesRotated from './../images/EllipsesRotated';
import EllipseHalf from './../images/EllipseHalf';

const NotFoundPage = () => (
  <React.Fragment>
    <SEO title="404: Not found" />
    <Flex
      sx={{
        position: 'relative',
        marginTop: 60,
      }}
    >
      <span sx={{ position: 'absolute' }}>
        <Ellipse />
      </span>

      <span
        sx={{
          position: 'absolute',
        }}
      >
        <ErrorIlustration />
      </span>

      <span sx={{ position: 'absolute', left: 1226, top: 170 }}>
        <EFiveEllipses />
      </span>
    </Flex>

    <Flex>
      <span sx={{ position: 'absolute' }}>
        <EllipsesRotated />
      </span>
      <Flex
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}
      >
        <Heading
          as={'h1'}
          sx={{
            width: 173,
            height: 70,
            fontWeight: 'bold',
            fontSize: 64,
          }}
        >
          Oops!
        </Heading>

        <Heading
          as={'h2'}
          sx={{
            fontSize: 36,
            lineHeight: 3,
            fontWeight: 600,
          }}
        >
          We couldn't find that page.
        </Heading>

        <Button sx={{ variant: 'buttons.prime', width: ['100%', 212] }}>
          Back to Home
        </Button>
      </Flex>

      <span sx={{ position: 'absolute' }}>
        <EllipseHalf />
      </span>
    </Flex>
  </React.Fragment>
);

export default NotFoundPage;
