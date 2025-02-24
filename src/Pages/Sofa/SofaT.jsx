import React from 'react';
import { Card,Button } from 'react-bootstrap';
import img1 from '../../assets/img1.jpeg';
import corner from '../../assets/cornersofa.png';
import './Sofa.css';
import { Link } from 'react-router-dom';


export default function SofaT() {
  return (
    <div className='d-flex flex-column'>
      <div className='d-flex gap-5 flex-wrap ms-4 mt-5'>
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={corner} />
          <Card.Body>
            <Card.Title>اطقم كنب زاويه</Card.Title>
            <Button  as={Link} to="/sofa/sofaCorners">عرض المزيد</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title>اطقم كنب عادي</Card.Title>
            <Button as={Link} to="/sofa">عرض المزيد</Button>
          </Card.Body>
        </Card>
      </div>

     
   
    </div>
  );
}
