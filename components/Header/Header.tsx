// https://github.com/react-bootstrap/react-bootstrap/issues/6792#issuecomment-2040237754
// https://github.com/vercel/next.js/issues/51593
import Container from 'react-bootstrap/Container';
import Image from 'next/image'
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import Navbar from 'react-bootstrap/Navbar';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import logoImg from '@/public/logo.png';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-5">
      <Container>
        <NavbarBrand href="/">
		  <Image src={logoImg} alt="Logo" width={220} />
        </NavbarBrand>
        <NavbarToggle aria-controls="navbar-menu" />
        <NavbarCollapse id="navbar-menu">
          <Nav className="ms-auto">
            <NavLink href="https://forms.gle/KdGcTnig71GCmkhf7">
              Contact us
            </NavLink>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default Header;
