export default {
  buttons: {
    outlined: {
      width: 130,
      height: 35,
      bg: 'transparent',
      border: `1px solid #6670FD`,
      borderRadius: 5,
      color: 'mainDark',
      ml: (theme: { space: string[] }) => `${theme.space[4]}`,
      '&:hover': {
        bg: 'mainDark',
        color: 'white',
        cursor: 'pointer',
        border: `1px solid #fff`,
        transition: 'all 0.5s',
      },
    },
    prime: {
      width: 210,
      height: 55,
      bg: 'mainDark',
      border: `1px solid #fff`,
      borderRadius: 5,
      color: 'background',
      fontSize: (theme: { fontSizes: any[] }) => `${theme.fontSizes[1]}`,
      fontWeight: (theme: { fontWeights: string }) =>
        `${theme.fontWeights.bold}`,
      '&:hover': {
        bg: 'background',
        color: 'mainDark',
        cursor: 'pointer',
        border: `1px solid #6670FD`,
        transition: 'all 0.5s',
      },
    },
  },
};
