import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import cabinets1 from '../../assets/cabinets1.jpeg';
import cabinets2 from '../../assets/cabinets2.jpeg';
import cabinets3 from '../../assets/cabinets3.jpeg';
import cabinets4 from '../../assets/cabinets4.jpeg';
import cabinets5 from '../../assets/cabinets5.jpeg';
import cabinets6 from '../../assets/cabinets6.jpeg';
import cabinets7 from '../../assets/cabinets7.jpeg';
import cabinets8 from '../../assets/cabinets8.jpeg';
import cabinets9 from '../../assets/cabinets9.jpeg';
import cabinets10 from '../../assets/cabinets10.jpeg';
import cabinets11 from '../../assets/cabinets11.jpeg';
export default function Cabinets() {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleShow = (image) => {
      setSelectedImage(image);
      setShowModal(true);
    };
  
    const handleClose = () => setShowModal(false);
    const images = [cabinets1,cabinets2,cabinets3,cabinets4,cabinets5,cabinets6,cabinets7,cabinets8,cabinets9
    ,cabinets10,cabinets11];

    return (
      <div>
        <div className="d-flex gap-5 flex-wrap ms-5 mt-5">
          {images.map((img, index) => (
            <Card key={index} style={{ width: "16rem" }} onClick={() => handleShow(img)}>
              <Card.Img variant="top" src={img} className="mt-4" />
              <Card.Body className="card-body">
                <Button as={Link} to="/cabinets"> اضغط</Button>
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
    );
  }
