import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
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
    <div className="menu-header position-absolute w-100">
      <div className="container">
        <div className="row">
          <Navbar bg="transparent" expand="lg" className="w-100">
            <Navbar.Brand>
              <img src={logo} className="mt-3 mb-3" style={{ height: '75px' }} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-0 align-items-center">
                {
                  pages.map(page => (
                    <Nav.Link>
                      <div className="text-decoration-none nav-link">
                        <NavLink key={page.name} to={page.path}>{page.name}</NavLink>
                      </div>
                    </Nav.Link>
                  ))
                }
                {
                  headerIcons.map(icon => (
                    <Nav.Link>
                      <img key={icon} className="footer-icon" src={icon} alt={icon} />
                    </Nav.Link>
                  ))
                }
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default Header;