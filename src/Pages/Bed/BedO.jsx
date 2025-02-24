import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

import BedO1 from '../../assets/BedO1.jpeg';
import BedO2 from '../../assets/BedO2.jpeg';
import BedO3 from '../../assets/BedO3.jpeg';
import BedO4 from '../../assets/BedO4.jpeg';
import BedO5 from '../../assets/BedO5.jpeg';
import BedO6 from '../../assets/BedO6.jpeg';
import BedO7 from '../../assets/BedO7.jpeg';
import BedO8 from '../../assets/BedO8.jpeg';
import BedO9 from '../../assets/BedO9.jpeg';
import BedO10 from '../../assets/BedO10.jpeg';
import BedO11 from '../../assets/BedO11.jpeg';
import BedO12 from '../../assets/BedO12.jpeg';
import BedO13 from '../../assets/BedO13.jpeg';
import BedO14 from '../../assets/BedO14.jpeg';
import BedO15 from '../../assets/BedO15.jpeg';
import BedO16 from '../../assets/BedO16.jpeg';
import BedO17 from '../../assets/BedO17.jpeg';
import BedO18 from '../../assets/BedO18.jpeg';
import BedO19 from '../../assets/BedO19.jpeg';
import BedO20 from '../../assets/BedO20.jpeg';
import BedO21 from '../../assets/BedO21.jpeg';
import BedO22 from '../../assets/BedO22.jpeg';
import BedO23 from '../../assets/BedO23.jpeg';
import BedO24 from '../../assets/BedO24.jpeg';
import BedO25 from '../../assets/BedO25.jpeg';
import BedO26 from '../../assets/BedO26.jpeg';
import BedO27 from '../../assets/BedO27.jpeg';
import BedO28 from '../../assets/BedO28.jpeg';
import BedO29 from '../../assets/BedO29.jpeg';
import BedO30 from '../../assets/BedO30.jpeg';
import BedO31 from '../../assets/BedO31.jpeg';
import BedO32 from '../../assets/BedO32.jpeg';
import BedO33 from '../../assets/BedO33.jpeg';
import BedO34 from '../../assets/BedO34.jpeg';
import BedO35 from '../../assets/BedO35.jpeg';
import BedO36 from '../../assets/BedO36.jpeg';
import BedO37 from '../../assets/BedO37.jpeg';
import BedO38 from '../../assets/BedO38.jpeg';
import BedO39 from '../../assets/BedO39.jpeg';
import BedO40 from '../../assets/BedO40.jpeg';
import BedO41 from '../../assets/BedO41.jpeg';
import BedO42 from '../../assets/BedO42.jpeg';
import BedO43 from '../../assets/BedO43.jpeg';
import BedO44 from '../../assets/BedO44.jpeg';
import BedO45 from '../../assets/BedO45.jpeg';
import BedO46 from '../../assets/BedO46.jpeg';
import BedO47 from '../../assets/BedO47.jpeg';
import BedO48 from '../../assets/BedO48.jpeg';
import BedT29 from '../../assets/BedT29.jpeg';
import BedT30 from '../../assets/BedT30.jpeg';


export default function BedO() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleShow = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);
  const images = [
    BedO1, BedO2, BedO3, BedO4, BedO5, BedO6, BedO7, BedO8, BedO9, BedO10, 
    BedO11, BedO12, BedO13, BedO14, BedO15, BedO16, BedO17, BedO18, BedO19, BedO20, 
    BedO21, BedO22, BedO23, BedO24, BedO25, BedO26, BedO27, BedO28, BedO29, BedO30, BedO31,
    BedO32, BedO33, BedO34, BedO35, BedO36, BedO37, BedO38, BedO39,
  BedO40, BedO41, BedO42, BedO43, BedO44, BedO45, BedO46, BedO47, BedO48, BedT29, BedT30
  ];
  
  return (
    <div>
    <div className="d-flex gap-5 flex-wrap ms-5 mt-5">
      {images.map((img, index) => (
        <Card key={index} style={{ width: "16rem" }} onClick={() => handleShow(img)}>
          <Card.Img variant="top" src={img} className="mt-4" />
          <Card.Body className="card-body">
            <Button as={Link} to="/BedO"> اضغط</Button>
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
