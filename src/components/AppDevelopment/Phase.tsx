/** @jsx jsx */
import { Box, Heading, jsx, Flex } from 'theme-ui';
import React from 'react';
import PhaseDiamond from '../../images/phaseDiamond';
import PhasePhto from '../../images/phasePhto';
import PhaseEng from '../../images/phaseEng';
import PhaseRocket from '../../images/phaseRocket';

const Phase: React.FC = () => {
  return (
    <div
      sx={{
        minHeight: ['1100px', '666px'],
        display: [null, 'block'],
        alignItems: 'center',
        pt: 95,
      }}
    >
      <Box
        sx={{
          m: '0 auto',
          maxWidth: 1110,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: ['1fr', '1fr 1fr'],
            gridTemplateRows: '1fr',
            columnGap: '30px',
            height: '197px',
            pt: 56,
            rowGap: '30px',
          }}
        >
          <Flex
            sx={{
              variant: 'flex.phaseV2',
              lineHeight: '2%',
              p: '29px 10px',
            }}
          >
            <PhaseDiamond />
            <div>
              <p
                sx={{
                  color: '#5A54FF',
                }}
              >
                Phase 1
              </p>
              <Heading
                sx={{
                  fontSize: '24px',
                  opacity: 0.8,
                  color: '#141633',
                }}
              >
                Research & Plan
              </Heading>
              <p
                sx={{
                  maxWidth: '70%',
                  color: 'rgba(20, 22, 51, 0.5)',
                  lineHeight: '160%',
                  fontSize: '14px',
                  mt: 0,
                  pr: ['28px', 0],
                }}
              >
                Just like building a house, we start with architecture.
                Together, we’ll find the most effective solution to your unique
                business challenges.
              </p>
            </div>
          </Flex>
          <Flex
            sx={{
              variant: 'flex.phaseV2',
              lineHeight: '2%',
              p: '29px 10px',
            }}
          >
            <PhasePhto />
            <div>
              <p
                sx={{
                  color: '#5A54FF',
                }}
              >
                Phase 1
              </p>
              <Heading
                sx={{
                  fontSize: '24px',
                  opacity: 0.8,
                  color: '#141633',
                }}
              >
                Research & Plan
              </Heading>
              <p
                sx={{
                  maxWidth: '70%',
                  color: 'rgba(20, 22, 51, 0.5)',
                  lineHeight: '160%',
                  fontSize: '14px',
                  mt: 0,
                  pr: ['28px', 0],
                }}
              >
                Just like building a house, we start with architecture.
                Together, we’ll find the most effective solution to your unique
                business challenges.
              </p>
            </div>
          </Flex>
          <Flex
            sx={{
              variant: 'flex.phaseV2',
              lineHeight: '2%',
              p: '29px 10px',
            }}
          >
            <PhaseEng />
            <div>
              <p
                sx={{
                  color: '#5A54FF',
                }}
              >
                Phase 1
              </p>
              <Heading
                sx={{
                  fontSize: '24px',
                  opacity: 0.8,
                  color: '#141633',
                }}
              >
                Research & Plan
              </Heading>
              <p
                sx={{
                  maxWidth: '70%',
                  color: 'rgba(20, 22, 51, 0.5)',
                  lineHeight: '160%',
                  fontSize: '14px',
                  mt: 0,
                  pr: ['28px', 0],
                }}
              >
                Just like building a house, we start with architecture.
                Together, we’ll find the most effective solution to your unique
                business challenges.
              </p>
            </div>
          </Flex>
          <Flex
            sx={{
              variant: 'flex.phaseV2',
              lineHeight: '2%',
              p: '29px 10px',
            }}
          >
            <PhaseRocket />
            <div>
              <p
                sx={{
                  color: '#5A54FF',
                }}
              >
                Phase 1
              </p>
              <Heading
                sx={{
                  fontSize: '24px',
                  opacity: 0.8,
                  color: '#141633',
                }}
              >
                Research & Plan
              </Heading>
              <p
                sx={{
                  maxWidth: '70%',
                  color: 'rgba(20, 22, 51, 0.5)',
                  lineHeight: '160%',
                  fontSize: '14px',
                  mt: 0,
                  pr: ['28px', 0],
                }}
              >
                Just like building a house, we start with architecture.
                Together, we’ll find the most effective solution to your unique
                business challenges.
              </p>
            </div>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default Phase;
