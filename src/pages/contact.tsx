/** @jsx jsx */
import { Box, Heading, jsx } from 'theme-ui';
import React from 'react';
import ModalCom from '../components/Contact/modal';
import ContactForm from '../components/Contact/contactForm';

const ContactPage: React.FC = () => {
  return (
    <React.Fragment>
      <ModalCom />
      <ContactForm />
    </React.Fragment>
  );
};

export default ContactPage;
