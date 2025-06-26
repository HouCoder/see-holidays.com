// https://github.com/react-bootstrap/react-bootstrap/issues/6792#issuecomment-2040237754
// https://github.com/vercel/next.js/issues/51593

import Image from 'next/image';
import { useId } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavLink from 'react-bootstrap/NavLink';
import logoImg from '@/public/logo.png';

const Header = () => {
  const id = useId();

  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-5">
      <Container>
        <NavbarBrand href="/">
          <Image src={logoImg} alt="Logo" width={220} />
        </NavbarBrand>
        <NavbarToggle aria-controls={id} />
        <NavbarCollapse id={id}>
          <Nav className="ms-auto">
            <NavLink href="/api">Holiday API</NavLink>
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
