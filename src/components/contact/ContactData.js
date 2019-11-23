import React from 'react';
import { Icon } from 'react-icons-kit';

const ContactData = ({ contactData }) => {
  const { icon, data } = contactData;

  return (
    <div className="col-lg-4 col-12">
      <div className="contact-data d-flex flex-column justify-content-center align-items-center app-bg pt-2 pb-2">
        <Icon size={40} icon={icon} />
        <span className="pt-1">{data}</span>
      </div>
    </div>
  );
};

export default ContactData;