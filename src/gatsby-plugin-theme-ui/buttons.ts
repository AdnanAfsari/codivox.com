export default {
  buttons: {
    outlined: {
      width: 130,
      height: 35,
      bg: 'white',
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
  },
};
