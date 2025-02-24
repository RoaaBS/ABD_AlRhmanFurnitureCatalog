import React, { useState } from "react";
import { Card, Modal,Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import sofa1 from '../../assets/sofa1.jpeg';
import sofa2 from '../../assets/sofa2.jpeg';
import sofa3 from '../../assets/sofa3.jpeg';
import sofa4 from '../../assets/sofa4.jpeg';
import sofa5 from '../../assets/sofa5.jpeg';
import sofa6 from '../../assets/sofa6.jpeg';
import sofa7 from '../../assets/sofa7.jpeg';
import sofa8 from '../../assets/sofa8.jpeg';
import sofa9 from '../../assets/sofa9.jpeg';
import sofa10 from '../../assets/sofa10.jpeg';
import sofa11 from '../../assets/sofa11.jpeg';
import sofa12 from '../../assets/sofa12.jpeg';
import sofa13 from '../../assets/sofa13.jpeg';
import sofa14 from '../../assets/sofa14.jpeg';
import sofa15 from '../../assets/sofa15.jpeg';
import sofa16 from '../../assets/sofa16.jpeg';
import sofa17 from '../../assets/sofa17.jpeg';
import sofa18 from '../../assets/sofa18.jpeg';
import sofa19 from '../../assets/sofa19.jpeg';
import sofa20 from '../../assets/sofa20.jpeg';
import sofa21 from '../../assets/sofa21.jpeg';
import sofa22 from '../../assets/sofa22.jpeg';
import sofa23 from '../../assets/sofa23.jpeg';
import sofa24 from '../../assets/sofa24.jpeg';
import sofa25 from '../../assets/sofa25.jpeg';
import sofa26 from '../../assets/sofa26.jpeg';
import sofa27 from '../../assets/sofa27.jpeg';
import sofa28 from '../../assets/sofa28.jpeg';
import sofa29 from '../../assets/sofa29.jpeg';
import sofa30 from '../../assets/sofa30.jpeg';
import sofa31 from '../../assets/sofa31.jpeg';
import sofa32 from '../../assets/sofa32.jpeg';
import sofa33 from '../../assets/sofa33.jpeg';
import sofa34 from '../../assets/sofa34.jpeg';
import sofa35 from '../../assets/sofa35.jpeg';
import sofa36 from '../../assets/sofa36.jpeg';
import sofa37 from '../../assets/sofa37.jpeg';
import sofa38 from '../../assets/sofa38.jpeg';

// import sofa39 from '../../assets/sofa39.jpeg';


export default function Sofa() {
    const [showModal, setShowModal] = useState(false);
const [selectedImage, setSelectedImage] = useState(null);

const handleShow = (image) => {
  setSelectedImage(image);
  setShowModal(true);
};

const handleClose = () => setShowModal(false);

const images = [ sofa1, sofa2, sofa3, sofa4, sofa5, sofa6, sofa7, sofa8, sofa9, sofa10,
    sofa11, sofa12, sofa13, sofa14, sofa15, sofa16, sofa17, sofa18, sofa19, sofa20,
    sofa21, sofa22, sofa23, sofa24, sofa25, sofa26, sofa27, sofa28, sofa29, sofa30,
    sofa31, sofa32, sofa33, sofa34, sofa35, sofa36, sofa37, sofa38];
  return (
    <div>
    <div className="d-flex gap-5 flex-wrap ms-5 mt-5">
      {images.map((img, index) => (
        <Card key={index} style={{ width: "16rem" }} onClick={() => handleShow(img)}>
          <Card.Img variant="top" src={img} className="mt-4" />
          <Card.Body className="card-body">
            <Button as={Link} to="/sofa"> اضغط</Button>
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
