export default {
  styles: {
    root: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
    headerLinks: {
      textDecoration: 'none',
      mx: (theme: { space: string[] }) => `${theme.space[4]}`,
      color: '#141633',
      opacity: '0.7',
      display: 'inline-block',
      position: 'relative',
      '&:hover': {
        color: 'mainDark',
        opacity: '1',
        transition: 'all 0.25s',
      },
      '::after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        transform: 'scaleX(0)',
        height: '2px',
        bottom: 0,
        left: 0,
        backgroundColor: '#141633',
        opacity: 0.7,

        transformOrigin: 'bottom right',
        transition: 'transform 0.25s ease-out',
      },
      '&:hover:after': {
        backgroundColor: 'mainDark',
        transform: 'scaleX(1)',
        transformOrigin: 'bottom left',
      },
    },
    innerContainer: {
      m: '0 auto',
      maxWidth: 1110,
      padding: `0 1.0875rem 1.45rem`,
    },
  },
};
