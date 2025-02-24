import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BedO1 from '../../assets/BedO1.jpeg';
import BedT107 from '../../assets/BedT107.jpeg';

import { Link } from 'react-router-dom';

export default function Bed() {
  return (
    <div className='d-flex flex-column'>
      <div className='d-flex gap-5 flex-wrap ms-4 mt-5'>
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={BedO1} />
          <Card.Body>
            <Card.Title > تخت مفرد</Card.Title>
            <Button  as={Link} to="/BedO">عرض المزيد</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={BedT107} />
          <Card.Body>
            <Card.Title>  تخت مجوز</Card.Title>
            <Button  as={Link} to="/BedT">عرض المزيد</Button>
          </Card.Body>
        </Card>
      </div>

     
   
    </div>
  )
}
