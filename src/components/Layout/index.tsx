import Layout from './layout';
import FullLayout from './fullLayout';
import React from 'react';
// @ts-ignore
export default ({ children, pageContext }) => {
  if (pageContext.layout === 'contact') {
    return <FullLayout>{children}</FullLayout>;
  }
  return <Layout>{children}</Layout>;
};
