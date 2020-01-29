import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Navbar, Nav } from 'react-bootstrap';
import classNames from 'classnames';
import logo from 'assets/kinetoSmileLogo.png';
import facebook from 'assets/facebook-icon.png';
import scrollToComponent from 'react-scroll-to-component';
// import youtube from 'assets/youtube-icon.png';

const headerIcons = [
  facebook,
  // youtube,
];

const pages = [
  {
    name: 'Despre Noi',
    path: '/despre-noi',
  },
  {
    name: 'Proiecte',
    path: '/contact',
  },
  {
    name: 'Echipa',
    path: '/contact',
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

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 100);

const Header = (props) => {
  const possiblePaths = ['/despre-noi', '/tarife', '/contact'];
  const { echipaRef } = props;
  console.log(echipaRef);
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
                <NavLink to="/">
                  <img src={logo} className="mt-3 mb-3" style={{ height: '75px' }} alt="Logo" />
                </NavLink>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-0 align-items-center">
                  {
                    pages.map(page => (
                      <Nav.Link>
                        <div className="text-decoration-none nav-link" onClick={() => scrollToRef(echipaRef)}>
                          <NavLink key={page.name}>{page.name}</NavLink>
                        </div>
                      </Nav.Link>
                    ))
                  }
                  {
                    headerIcons.map(icon => (
                      <Nav.Link href="https://www.facebook.com/cabinetkineto/">
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