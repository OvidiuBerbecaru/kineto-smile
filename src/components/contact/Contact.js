import React from 'react';
import { mobile } from 'react-icons-kit/entypo/mobile';
import { plane } from 'react-icons-kit/entypo/plane';
import { pin } from 'react-icons-kit/entypo/pin';
import ContactData from 'components/contact/ContactData';

const contactDataSet = [
  {
    icon: mobile,
    data: '0721 907 860',
  },
  {
    icon: plane,
    data: 'officekinetosmile@gmail.com',
  },
  {
    icon: pin,
    data: 'Str. Vasile Toneanu nr. 20',
  },
];

const Contact = () => {
  return (
    <div className="container contact mb-5">
      <div className="row">
        <h2>Hai sa ne cunoastem !</h2>
        <div className="container mt-5">
          <div className="row">
            {
              contactDataSet.map(contactData => <ContactData contactData={contactData} />)
            }
          </div>
          <iframe className="mt-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.5649186420246!2d26.12847252425368!3d44.42157298995636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1fee7351b88cf%3A0x15785b8e4e32f498!2sKineto%20Smile!5e0!3m2!1sen!2sro!4v1574537071970!5m2!1sen!2sro" width="100%" height="450" frameborder="0" allowfullscreen="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;