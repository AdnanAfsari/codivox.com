/** @jsx jsx */
import { Box, Heading, jsx, Flex } from 'theme-ui';
import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

import Enquiry from '../../images/enquiry';
import Talk from '../../images/talk';
import Estimate from '../../images/estimate';
import Team from '../../images/team';
import LineComponent from '../../images/line';

const Process: React.FC = () => {
  const processTitle = `That's how it works`;
  const processSubtitle =
    'We are reliable, cooperative and believe in over-communication';

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
    gsap.defaults({ ease: 'none' });

    let tl = gsap
      .timeline({
        defaults: {
          duration: 0.05,
          autoAlpha: 1,
          transformOrigin: 'center',
          ease: 'elastic(2.5, 1)',
        },
      })
      .to('.ball1', { fill: '#6670FD', stroke: '#6670FD' }, 0)
      .to('.ball2', { fill: '#6670FD', stroke: '#6670FD' }, 0.3)
      .to('.ball3', { fill: '#6670FD', stroke: '#6670FD' }, 0.6)
      .to('.ball4', { fill: '#6670FD', stroke: '#6670FD' }, 0.98);

    // @ts-ignore
    let action = gsap
      .timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: '#svg',
          scrub: true,
          start: 'top center',
          end: 'bottom center',
        },
      })
      .to(
        '.line',
        { motionPath: { path: '.line', align: '.line', start: 0 } },
        0,
      )
      .add(tl, 0);
  });

  return (
    <Box
      id="work-process"
      sx={{
        background: `#f4f5ff`,
        margin: '0 auto',
        padding: '100px 1.0875rem',
      }}
    >
      <Box sx={{ textAlign: 'center', mb: '4rem' }}>
        <Heading
          sx={{
            fontSize: '38px',
            width: ['100%', '100%', 480],
            m: '0 auto',
            color: `#000053`,
          }}
        >
          {processTitle}
        </Heading>
        <p
          sx={{
            opacity: '0.85',
            textTransform: 'uppercase',
            color: ' #5954ff',
            letterSpacing: '2.5px',
            width: ['100%', '100%', '500px'],
            m: '0 auto',
          }}
        >
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
            gridTemplateColumns: ['1fr', '1fr', '4fr 2fr 4fr'],
            gridTemplateRows: ['300px', '300px', '250px'],
          }}
        >
          <Flex
            sx={{
              flexDirection: 'column',
              alignItems: ['center', 'center', 'flex-start'],
              textAlign: ['center', 'center', 'left'],
            }}
          >
            <Enquiry />
            <Heading sx={{ color: 'mainDark', mt: 3 }}>
              1. Partnership discovery
            </Heading>
            <p sx={{ m: 0, opacity: 0.8, width: 300 }}>
              We learn about your project goals and objectives. We discuss each
              milestones and tech stack before kickoff the project.
            </p>
          </Flex>
          <Box
            sx={{ display: ['none', 'none', 'flex'], justifyContent: 'center' }}
          >
            <LineComponent />
          </Box>
          <Box sx={{ display: ['none', 'none', 'flex'] }}></Box>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: ['1fr', '1fr', '4fr 2fr 4fr'],
            gridTemplateRows: ['300px', '300px', '250px'],
          }}
        >
          <Box sx={{ display: ['none', 'none', 'flex'] }}></Box>
          <Box sx={{ display: ['none', 'none', 'flex'] }}></Box>
          <Flex
            sx={{
              flexDirection: 'column',
              ml: 20,
              alignItems: ['center', 'center', 'flex-start'],
              textAlign: ['center', 'center', 'left'],
            }}
          >
            <Talk />
            <Heading sx={{ color: 'mainDark', mt: 3 }}>
              2. Onboarding & Kickoff
            </Heading>
            <p sx={{ m: 0, opacity: 0.8, width: 300 }}>
              We collaborate and analyse requirements for your project. Together
              with your team, we decide on stack and architecture.
            </p>
          </Flex>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: ['1fr', '1fr', '4fr 2fr 4fr'],
            gridTemplateRows: ['300px', '300px', '250px'],
          }}
        >
          <Flex
            sx={{
              flexDirection: 'column',
              alignItems: ['center', 'center', 'flex-start'],
              textAlign: ['center', 'center', 'left'],
            }}
          >
            <Estimate />
            <Heading sx={{ color: 'mainDark', mt: 3 }}>
              3. Project Execution
            </Heading>
            <p sx={{ m: 0, opacity: 0.8, width: 300 }}>
              We keep you updated based on daily standups, planning, executing
              sprints, demos and deliverables.
            </p>
          </Flex>
          <Box sx={{ display: ['none', 'none', 'flex'] }}></Box>
          <Box sx={{ display: ['none', 'none', 'flex'] }}></Box>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: ['1fr', '1fr', '4fr 2fr 4fr'],
            gridTemplateRows: ['300px', '300px', '250px'],
          }}
        >
          <Box sx={{ display: ['none', 'none', 'flex'] }}></Box>
          <Box sx={{ display: ['none', 'none', 'flex'] }}></Box>
          <Flex
            sx={{
              flexDirection: 'column',
              alignItems: ['center', 'center', 'flex-start'],
              textAlign: ['center', 'center', 'left'],
            }}
          >
            <Team />
            <Heading sx={{ color: 'mainDark', mt: 3 }}>4. Deployment</Heading>
            <p sx={{ m: 0, opacity: 0.8, width: 300 }}>
              We provide a delightful working relationship. After your
              satisfaction with result, we push it to production server.
            </p>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Process;
