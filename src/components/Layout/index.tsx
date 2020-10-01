import React from 'react';
import Layout from './layout';
import FullLayout from './fullLayout';

import './global.css';
// @ts-ignore
export default ({ path, children }) => {
  if (
    path === '/contact/' ||
    path === '/design/' ||
    path === '/app-development/' ||
    path === '/web-development/' ||
    path.includes('/blog/')
  ) {
    return <FullLayout>{children}</FullLayout>;
  }
  return <Layout>{children}</Layout>;
};
