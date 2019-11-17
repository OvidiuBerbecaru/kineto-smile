import React from 'react';
import { NavLink } from 'react-router-dom';
// import { routes } from 'routes';
import logo from 'assets/kinetoSmileLogo.png';
import facebook from 'assets/facebook-icon.png';
import youtube from 'assets/youtube-icon.png';

const headerIcons = [
  facebook,
  youtube,
];

const pages = [
  {
    name: 'Despre Noi',
    path: '/despre-noi',
  },
  {
    name: 'Tarife',
    path: '/tarife',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

const Header = () => {
  return (
    <div className="container-fluid header bg-transparent">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <img src={logo} className="mt-3 mb-3" style={{ height: '75px' }} alt="Logo" />
          <div className="d-flex align-items-center text-decoration-none">
            {
              pages.map((page) => <NavLink key={page.name} to={page.path}>{page.name}</NavLink>)
            }
            <div>
              {headerIcons.map(icon => {
                return <img key={icon} className="footer-icon ml-2" src={icon} alt={icon} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;