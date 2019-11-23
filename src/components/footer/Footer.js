import React from 'react';
import facebook from 'assets/facebook-icon.png';
import youtube from 'assets/youtube-icon.png';

const footerLinks = [
  'Termeni si Conditii',
  'Politica de Confidentialitate',
  'Politica de Cookies',
  'Copywrite KinetoSmile 2019',
];

const footerIcons = [
  facebook,
  youtube,
];

const Footer = () => {
  return (
    <div className="container-fluid footer-container app-bg">
      <div className="container">
        <div className="row footer d-flex align-items-center justify-content-between">
          <div className="d-flex">
            {footerLinks.map(link => {
              return <p key={link} className="mt-0 mb-0 text-white ml-4 text-white">{link}</p>;
            })}
          </div>
          <div>
            {footerIcons.map(icon => {
              return <img key={icon} className="footer-icon ml-2" src={icon} alt={icon} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;