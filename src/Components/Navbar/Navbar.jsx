import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import style from './Navbar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function CustomNavbar() {
  return (
    <Navbar expand="lg" className={style.customNavbar}>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link as={Link} to="/footer">التواصل</Nav.Link>
            <Nav.Link as={Link} to="/Chairs">كراسي و بفات</Nav.Link>
            <Nav.Link as={Link} to="/buffets"> بوفيه</Nav.Link>
            <Nav.Link as={Link} to="/Tables">طاولات</Nav.Link>
            <Nav.Link as={Link} to="/AllCabinets">خزائن</Nav.Link>
            <Nav.Link as={Link} to="/sofaT">اطقم كنب</Nav.Link>
            <Nav.Link as={Link} to="/Bed"> تخت</Nav.Link>
            <Nav.Link as={Link} to="/Bedroom"> غرف نوم</Nav.Link>
            <NavDropdown.Divider />
          </Nav>
          <Navbar.Brand className="pe-5">مفروشات عبدالرحمن</Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
