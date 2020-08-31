import React from 'react';

import ModalComp from '../components/Contact/ModalComp';
import ContactForm from './../components/Contact/contactForm';

const ContactPage: React.FC = () => {
  return (
    <React.Fragment>
      <ModalComp />
      <ContactForm />
    </React.Fragment>
  );
};

export default ContactPage;
