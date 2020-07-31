// @ts-ignore
import { tailwind } from '@theme-ui/presets';
import { merge } from 'theme-ui';

import { Theme } from './../types/theme';

import buttons from './buttons';
import colors from './colors';
import font from './font';
import styles from './styles';
import flex from './flex';

const theme: Theme = {
  ...buttons,
  ...colors,
  ...font,
  ...flex,
  ...styles,
};

// @ts-ignore
export default merge(tailwind, theme);
