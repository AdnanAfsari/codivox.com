export default {
  styles: {
    headerLinks: {
      textDecoration: 'none',
      mx: (theme: { space: string[] }) => `${theme.space[4]}`,
      color: '#141633',
      opacity: '0.7',
      display: 'inline-block',
      position: 'relative',
      '&:hover': {
        color: 'main',
        opacity: '1',
        transition: 'opacity 1s',
      },
      '::after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        transform: 'scaleX(0)',
        height: '2px',
        bottom: 0,
        left: 0,
        backgroundColor: 'main',
        transformOrigin: 'bottom right',
        transition: 'transform 0.25s ease-out',
      },
      '&:hover:after': {
        transform: 'scaleX(1)',
        transformOrigin: 'bottom left',
      },
    },
  },
};
