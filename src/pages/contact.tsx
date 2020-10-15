import React from 'react';

import ModalComp from '../components/Contact/ModalComp';
import ContactForm from './../components/Contact/contactForm';
import SEO from '../components/seo';

const ContactPage: React.FC = () => {
  return (
    <React.Fragment>
      <SEO title={'Contact'} />
      <ModalComp />
      <ContactForm />
    </React.Fragment>
  );
};

export default ContactPage;
