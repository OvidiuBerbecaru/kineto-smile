import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Navbar, Nav } from 'react-bootstrap';
import classNames from 'classnames';
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

const Header = (props) => {
  const possiblePaths = ['/despre-noi', '/tarife', '/contact'];
  const headerClasses = classNames(
    'menu-header position-absolute w-100',
    {
      'bg-transparent': !possiblePaths.includes(props.location.pathname),
      'app-bg': possiblePaths.includes(props.location.pathname),
    },
  );

  return (
    <Fragment>
      <div className={headerClasses}>
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
    </Fragment>
  );
};

export default withRouter(Header);