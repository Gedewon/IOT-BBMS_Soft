import React from 'react';
import { Link } from 'react-router-dom';
// nodejs library that concatenates strings
import classnames from 'classnames';

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Button,
} from 'reactstrap';

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState(
    'navbar-transparent',
  );
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle('nav-open');
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor('');
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor('navbar-transparent');
      }
    };

    window.addEventListener('scroll', updateNavbarColor);

    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor);
    };
  });
  return (
    <Navbar
      className={classnames('fixed-top', navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            // to="/la"
            href="/landing-page"
            title="Coded by Creative Tim"
            // tag={Link}
          >
            Efoye
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames('navbar-toggler navbar-toggler', {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                href="/product-page"
                // target="_blank"
              >
                <i className="nc-icon nc-book-product" /> Product Page
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/document-page"
                // target="_blank"
              >
                <i className="nc-icon nc-book-bookmark" />{' '}
                Documentation
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="landing-page#aboutus">
                {' '}
                {/*removed tag={Link}*/}
                <i
                  href="landing-page#aboutus"
                  className="nc-icon "
                />{' '}
                About us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="landing-page#contactus">
                <i
                  href="landing-page#contactus"
                  className="nc-icon "
                />{' '}
                Contact us
              </NavLink>
            </NavItem>

            <NavItem>
              <Button
                className="btn-round"
                color="success"
                href="/login"
                // target="_blank"
              >
                <i className="nc-icon "></i> SignIn
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default ExamplesNavbar;
