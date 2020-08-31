/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// @ts-ignore
import MessengerCustomerChat from 'react-messenger-customer-chat';

import Header from '../header';
import Footer from '../Main/Footer';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <React.Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />

      <div
        sx={{
          margin: `0 auto`,
          maxWidth: 1110,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
      <MessengerCustomerChat
        pageId={process.env.GATSBY_PAGE_ID}
        appId={process.env.GATSBY_APP_ID}
        themeColor="#6670FD"
      />
    </React.Fragment>
  );
};

export default Layout;
