import React, { useState } from "react";
import { Card, Modal,Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import BedRoom1 from '../../assets/BedRoom1.jpeg';
import BedRoom2 from '../../assets/BedRoom2.jpeg';
import BedRoom3 from '../../assets/BedRoom3.jpeg';
import BedRoom4 from '../../assets/BedRoom4.jpeg';
import BedRoom5 from '../../assets/BedRoom5.jpeg';
import BedRoom6 from '../../assets/BedRoom6.jpeg';
import BedRoom7 from '../../assets/BedRoom7.jpeg';
import BedRoom8 from '../../assets/BedRoom8.jpeg';
import BedRoom9 from '../../assets/BedRoom9.jpeg';
import BedRoom10 from '../../assets/BedRoom10.jpeg';
import BedRoom11 from '../../assets/BedRoom11.jpeg';
import BedRoom12 from '../../assets/BedRoom12.jpeg';
import BedRoom13 from '../../assets/BedRoom13.jpeg';
import BedRoom14 from '../../assets/BedRoom14.jpeg';
import BedRoom15 from '../../assets/BedRoom15.jpeg';
import BedRoom16 from '../../assets/BedRoom16.jpeg';
import BedRoom17 from '../../assets/BedRoom17.jpeg';
import BedRoom18 from '../../assets/BedRoom18.jpeg';
import BedRoom19 from '../../assets/BedRoom19.jpeg';
export default function BedRoom() {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleShow = (image) => {
      setSelectedImage(image);
      setShowModal(true);
    };
  
    const handleClose = () => setShowModal(false);
    const images = [
        BedRoom1, BedRoom2, BedRoom3, BedRoom4, BedRoom5, BedRoom6, BedRoom7, BedRoom8,
        BedRoom9, BedRoom10, BedRoom11, BedRoom12, BedRoom13, BedRoom14, BedRoom15, BedRoom16, BedRoom17
        ,BedRoom18,BedRoom19
      ];
      
  return (
    <div>
        <div className="d-flex gap-5 flex-wrap ms-5 mt-5">
          {images.map((img, index) => (
            <Card key={index} style={{ width: "16rem" }} onClick={() => handleShow(img)}>
              <Card.Img variant="top" src={img} className="mt-4" />
              <Card.Body className="card-body">
                <Button as={Link} to="/BedRoom"> اضغط</Button>
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
