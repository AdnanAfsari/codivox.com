import { Flex } from 'theme-ui';

export default {
  flex: {
    card: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      borderRadius: 30,
      border: '2px solid rgba(102, 112, 253, 0.05)',
      boxShadow: ' 0px 0px 5px rgba(102, 112, 253, 0.05)',
      '&:hover': {
        cursor: 'pointer',
        border: '2px dashed #6670FD',
        background: 'rgba(244, 245, 255, 0.5)',
        transition: 'all .3s ease-in',
        textDecorationLine: 'underline',
        color: '#5D67EE',
      },
    },
    phase: {
      alignItems: 'center',
      flexDirection: 'column',
      borderRadius: 16,
      boxShadow: '-40px 50px 80px 20px rgba(0, 0, 0, 0.05)',
      '&:hover': {
        cursor: 'pointer',
        border: '1px solid rgba(20, 22, 51, 0.25)',
        transition: 'all .3s ease-in',
        textDecorationLine: 'none',
        boxShadow: 'none',
        px: '32px',
      },
    },
    phaseV2: {
      display: ['flex', 'flex'],
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: ['center', 'left'],
      flexDirection: ['column', 'row'],
      borderRadius: 16,
      border: '1px solid rgba(20, 22, 51, 0.25)',
      '&:hover': {
        cursor: 'pointer',
        transition: 'all .3s ease-in',
        textDecorationLine: 'none',
        border: '0px solid rgba(20, 22, 51, 0.25)',
        boxShadow: '-40px 50px 80px 20px rgba(0, 0, 0, 0.05)',
        // px: '32px',
      },
    },
  },
};
