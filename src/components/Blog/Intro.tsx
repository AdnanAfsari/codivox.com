/** @jsx jsx */
import { jsx, Heading, Flex, Box } from 'theme-ui';

const Intro = () => {
  return (
    <div
      sx={{
        backgroundColor: 'ghostWhite',
        paddingTop: '5rem',
        paddingBottom: '10rem',
      }}
    >
      <Box
        sx={{
          m: '0 auto',
          maxWidth: 1110,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Flex>
          <div sx={{ flex: 1 }}>
            <div sx={{ color: 'main' }}>Blog Page</div>
            <Heading>Codivox Blog</Heading>
            <div sx={{ color: 'secondary' }}>
              From idea to launch, we build stunning and performant apps while
              putting a lot of effort into optimizations and enhancing UI/UX
              From idea to launch, we build stunning{' '}
            </div>
          </div>
          <div sx={{ flex: 1 }}>image..</div>
        </Flex>
      </Box>
    </div>
  );
};

export default Intro;
