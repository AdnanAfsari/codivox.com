export default {
  buttons: {
    outlined: {
      width: 130,
      height: 35,
      bg: 'transparent',
      border: `1px solid #6670FD`,
      borderRadius: 5,
      color: 'main',
      ml: (theme: { space: string[] }) => `${theme.space[4]}`,
      '&:hover': {
        bg: 'main',
        color: 'white',
        cursor: 'pointer',
        transition: 'background 0.5s',
      },
    },
    prime: {
      width: 210,
      height: 55,
      bg: 'main',
      border: `1px solid #6670FD`,
      borderRadius: 5,
      color: 'background',
      fontSize: (theme: { fontSizes: any[] }) => `${theme.fontSizes[1]}`,
      fontWeight: (theme: { fontWeights: string }) =>
        `${theme.fontWeights.bold}`,
      '&:hover': {
        bg: 'background',
        color: 'main',
        cursor: 'pointer',
        transition: 'background 0.5s',
      },
    },
  },
};
