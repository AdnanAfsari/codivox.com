/** @jsx jsx */
import { Box, Heading, jsx } from 'theme-ui';
import React from 'react';
import { useStaticQuery, graphql, PageProps } from 'gatsby';
// @ts-ignore
// import MessengerCustomerChat from 'react-messenger-customer-chat';

// import Header from '../components/header';
// import Footer from '../components/Main/Footer';

import Layout from '../components/layout';
import ModalCom from '../components/Contact/Modal';

const ContactPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuerySecond {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    // <React.Fragment>
    //   <Header siteTitle={data.site.siteMetadata.title} />
    //   <ModalCom />
    //   <Footer />
    //   <MessengerCustomerChat
    //     pageId={process.env.GATSBY_PAGE_ID}
    //     appId={process.env.GATSBY_APP_ID}
    //     themeColor="#6670FD"
    //   />
    // </React.Fragment>

    // <Layout>
    //   <ModalCom />
    // </Layout>
    <ModalCom />
  );
};

export default ContactPage;
