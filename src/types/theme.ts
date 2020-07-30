export type Colors = {
  background: string;
  main: string;
};

export type Fonts = {
  heading: string;
  body: string;
};

export type Styles = {
  headerLinks: {
    '&:hover:after': { transform: string; transformOrigin: string };
    color: string;
    '::after': {
      transform: string;
      backgroundColor: string;
      left: number;
      bottom: number;
      width: string;
      position: string;
      transformOrigin: string;
      content: string;
      transition: string;
      height: string;
    };
    display: string;
    textDecoration: string;
    mx: (theme: { space: string[] }) => string;
    position: string;
    '&:hover': { color: string; opacity: string; transition: string };
    opacity: string;
  };
};

export type Buttons = {
  outlined: {
    border: string;
    borderRadius: number;
    color: string;
    bg: string;
    width: number;
    '&:hover': {
      cursor: string;
      color: string;
      bg: string;
      transition: string;
    };
    height: number;
    ml: (theme: { space: string[] }) => string;
  };
};

export type Theme = {
  colors: Colors;
  buttons: Buttons;
  fonts: Fonts;
  styles: Styles;
};
