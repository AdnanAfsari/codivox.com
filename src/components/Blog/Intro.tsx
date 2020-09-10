/** @jsx jsx */
import { jsx, Heading, Flex } from 'theme-ui';
import { Fragment } from 'react';
const Intro = (props: any) => {
  return (
    <Fragment>
      <Flex sx={{ backgroundColor: 'ghostWhite', padding: '5rem' }}>
        <div sx={{ flex: 1 }}>
          <div sx={{ color: 'main' }}>Blog Page</div>
          <Heading>Codivox Blog</Heading>
          <div sx={{ color: 'secondary' }}>
            From idea to launch, we build stunning and performant apps while
            putting a lot of effort into optimizations and enhancing UI/UX From
            idea to launch, we build stunning{' '}
          </div>
        </div>
        <div sx={{ flex: 1 }}>image..</div>
      </Flex>
    </Fragment>
  );
};

export default Intro;
