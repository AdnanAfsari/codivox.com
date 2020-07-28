// @ts-ignore
import { tailwind } from '@theme-ui/presets';

export default {
  ...tailwind,
  colors: {
    ...tailwind.colors,
    main: '#6670FD',
    background: 'white',
  },
  fonts: {
    body: 'Lato, sans-serif',
    heading: 'Josefin Sans, sans-serif',
  },
  fontWeight: {
    body: 400,
    heading: 700,
  },
  buttons: {
    outlined: {
      width: 130,
      height: 35,
      bg: 'white',
      border: `1px solid #6670FD`,
      borderRadius: 5,
      color: 'main',
      ml: 25,
      '&:hover': {
        bg: 'main',
        color: 'white',
        cursor: 'pointer',
        transition: 'background 0.5s',
      },
    },
  },
};
