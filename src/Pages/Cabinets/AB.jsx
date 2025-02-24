import React, { useState } from "react";
import { Card, Modal,Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import cabinets1 from '../../assets/cabinets1.jpeg';
import cabinets2 from '../../assets/cabinets2.jpeg';
import cabinets3 from '../../assets/cabinets3.jpeg';
import cabinets4 from '../../assets/cabinets4.jpeg';
import cabinets5 from '../../assets/cabinets5.jpeg';
import cabinets6 from '../../assets/cabinets6.jpeg';
import cabinets7 from '../../assets/cabinets7.jpeg';

export default function AB() {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleShow = (image) => {
      setSelectedImage(image);
      setShowModal(true);
    };
  
    const handleClose = () => setShowModal(false);
    const images = [cabinets1,cabinets2,cabinets3,cabinets4,cabinets5,cabinets6,cabinets7];

    return (
      <div>
        <div className="d-flex gap-5 flex-wrap ms-5 mt-5">
          {images.map((img, index) => (
            <Card key={index} style={{ width: "16rem" }} onClick={() => handleShow(img)}>
              <Card.Img variant="top" src={img} className="mt-4" />
              <Card.Body className="card-body">
                <Button as={Link} to="/ABCatalog"> اضغط</Button>
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
