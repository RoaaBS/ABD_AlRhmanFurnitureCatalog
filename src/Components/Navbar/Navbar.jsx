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
            <Nav.Link as={Link} to="/Chairs">كورسا و بفات</Nav.Link>
            <Nav.Link as={Link} to="/buffets">  مزنون طاوله وسط</Nav.Link>
            <Nav.Link as={Link} to="/Tables"> طاولات سفره</Nav.Link>
            <Nav.Link as={Link} to="/DinningChairs"> كراسي سفره</Nav.Link>
            <Nav.Link as={Link} to="/AllCabinets">خزائن</Nav.Link>
            <Nav.Link as={Link} to="/AllSofa">اطقم كنب</Nav.Link>
            <Nav.Link as={Link} to="/Bed"> تخت</Nav.Link>
            <Nav.Link as={Link} to="/GBCatalog">  غرف نوم G-B</Nav.Link>
            <Nav.Link as={Link} to="/ABCatalog">  غرف نوم A-B</Nav.Link>
            <NavDropdown.Divider />
          </Nav>
          <Navbar.Brand className="pe-5">مفروشات عبدالرحمن</Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
