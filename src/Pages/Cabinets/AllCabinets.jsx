import React from 'react';
import { Card,Button } from 'react-bootstrap';
import cabinets1 from '../../assets/cabinets1.jpeg';
import smCabinets from '../../assets/smCabinets12.jpeg'
import WoodenCabinets from '../../assets/WoodenCabinets149.jpeg'
import GlassCabinets from '../../assets/GlassCabinets39.jpeg'
import CabinetsLibr from '../../assets/CabinetsLibr46.jpeg'
import ServCabinets2 from '../../assets/ServCabinets2.jpeg';
// import './Sofa.css';
import { Link } from 'react-router-dom';

export default function AllCabinets() {
  return (
    <div className='d-flex flex-column'>
      <div className='d-flex gap-5 flex-wrap ms-4 mt-5'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={cabinets1} />
          <Card.Body>
            <Card.Title>خزائن غرف</Card.Title>
            <Button  as={Link} to="/cabinets">عرض المزيد</Button>
          </Card.Body>
        </Card>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={WoodenCabinets} />
          <Card.Body>
            <Card.Title>خزائن غرف خشب</Card.Title>
            <Button  as={Link} to="/WoodenCabinets">عرض المزيد</Button>
          </Card.Body>
        </Card>

  <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={GlassCabinets} />
          <Card.Body>
            <Card.Title>خزائن غرف زجاج</Card.Title>
            <Button  as={Link} to="/GlassCabinets">عرض المزيد</Button>
          </Card.Body>
        </Card>


        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={smCabinets} />
          <Card.Body>
            <Card.Title>خزائن صغيره و تواليتات  </Card.Title>
            <Button as={Link} to="/smCabinets">عرض المزيد</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={CabinetsLibr} />
          <Card.Body>
            <Card.Title>خزائن غرف و مكتبه  </Card.Title>
            <Button as={Link} to="/Library&Cabinets">عرض المزيد</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={ServCabinets2} />
          <Card.Body>
            <Card.Title>  خزائن خدمات   </Card.Title>
            <Button as={Link} to="/ServiceCabinets">عرض المزيد</Button>
          </Card.Body>
        </Card>
        
      </div>

     
   
    </div>
  );
}
