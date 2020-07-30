import { number, string } from 'prop-types';

type SystemStyleObject = Record<string, any>;

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
    textDecoration: string;
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
    ml: number;
  };
};

export type Theme = {
  colors: Colors;
  buttons: Buttons;
  fonts: Fonts;
  styles: Styles;
};
