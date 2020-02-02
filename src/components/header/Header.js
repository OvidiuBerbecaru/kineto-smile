import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Navbar, Nav } from 'react-bootstrap';
import classNames from 'classnames';
import logo from 'assets/kinetoSmileLogo.png';
import facebook from 'assets/facebook-icon.png';
// import youtube from 'assets/youtube-icon.png';

const headerIcons = [
  facebook,
  // youtube,
];

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 100);

const Header = (props) => {
  const possiblePaths = ['/despre-noi', '/tarife', '/contact'];
  const {
    echipaRef, despreNoiRef, proiecteRef, tarifeRef, contactRef,
  } = props;
  const headerClasses = classNames(
    'menu-header position-absolute w-100',
    {
      'bg-transparent': !possiblePaths.includes(props.location.pathname),
      'app-bg': possiblePaths.includes(props.location.pathname),
    },
  );

  const pages = [
    {
      name: 'Despre Noi',
      path: '/despre-noi',
      ref: despreNoiRef,
    },
    {
      name: 'Proiecte',
      path: '/contact',
      ref: proiecteRef,
    },
    {
      name: 'Echipa',
      path: '/contact',
      ref: echipaRef,
    },
    {
      name: 'Tarife',
      path: '/tarife',
      ref: tarifeRef,
    },
    {
      name: 'Contact',
      path: '/contact',
      ref: contactRef,
    },
  ];

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
                        <div className="text-decoration-none nav-link" onClick={() => scrollToRef(page.ref)}>
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