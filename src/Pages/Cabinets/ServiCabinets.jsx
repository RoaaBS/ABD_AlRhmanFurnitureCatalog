import { useState } from "react"
import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import ServCabinets1 from '../../assets/ServCabinets1.jpeg';
import ServCabinets2 from '../../assets/ServCabinets2.jpeg';
import ServCabinets3 from '../../assets/ServCabinets3.jpeg';
import ServCabinets4 from '../../assets/ServCabinets4.jpeg';
import ServCabinets5 from '../../assets/ServCabinets5.jpeg';
import ServCabinets6 from '../../assets/ServCabinets6.jpeg';
import ServCabinets7 from '../../assets/ServCabinets7.jpeg';
import ServCabinets8 from '../../assets/ServCabinets8.jpeg';
import ServCabinets9 from '../../assets/ServCabinets9.jpeg';
import ServCabinets10 from '../../assets/ServCabinets10.jpeg';
import ServCabinets11 from '../../assets/ServCabinets11.jpeg';
import ServCabinets12 from '../../assets/ServCabinets12.jpeg';
import ServCabinets13 from '../../assets/ServCabinets13.jpeg';


export default function ServiCabinets() {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleShow = (image) => {
      setSelectedImage(image);
      setShowModal(true);
    };
  
    const handleClose = () => setShowModal(false);
    const images = [
        ServCabinets1, ServCabinets2, ServCabinets3, ServCabinets4, ServCabinets5,
        ServCabinets6, ServCabinets7, ServCabinets8, ServCabinets9, ServCabinets10,
        ServCabinets11, ServCabinets12, ServCabinets13
      ];
      
  return (
    <div>
    <div className="d-flex gap-5 flex-wrap ms-5 mt-5">
      {images.map((img, index) => (
        <Card key={index} style={{ width: "16rem" }} onClick={() => handleShow(img)}>
          <Card.Img variant="top" src={img} className="mt-4" />
          <Card.Body className="card-body">
            <Button as={Link} to="/ServiceCabinets"> اضغط</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Body className="text-center">
        {selectedImage && <img src={selectedImage} className="img-fluid" />}
      </Modal.Body>
    </Modal>
  </div>
  )
}
