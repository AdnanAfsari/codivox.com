/** @jsx jsx */
import { jsx, Heading, Flex, Box } from 'theme-ui';
import BlogIntro from '../../images/blogIntro';

const Intro = () => {
  return (
    <div
      sx={{
        backgroundColor: 'ghostWhite',
        paddingTop: '2rem',
        paddingBottom: '7rem',
      }}
    >
      <Box sx={{ variant: 'styles.innerContainer' }}>
        <div
          sx={{
            display: ['block', 'flex'],
            flexFlow: 'row wrap',
            alignItems: 'center',
          }}
        >
          <div sx={{ flex: 1, marginRight: ['0', '3rem'], minWidth: '300px' }}>
            <div sx={{ color: 'main' }}>Blog Page</div>
            <Heading>Codivox Blog</Heading>
            <div sx={{ color: 'secondary' }}>
              From idea to launch, we build stunning and performant apps while
              putting a lot of effort into optimizations and enhancing UI/UX
              From idea to launch, we build stunning{' '}
            </div>
          </div>
          <div sx={{ flex: 1, maxWidth: '100%' }}>
            <BlogIntro />
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Intro;
