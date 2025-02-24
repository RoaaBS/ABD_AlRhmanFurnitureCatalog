import React, { useState } from "react";
import { Card, Modal,Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Sofa.css";

// Import all images
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpeg";
import img4 from "../../assets/img4.jpeg";
import img5 from "../../assets/img5.jpeg";
import img6 from "../../assets/img6.jpeg";
import img7 from "../../assets/img7.jpeg";
import img8 from "../../assets/img8.jpeg";
import img9 from "../../assets/img9.jpeg";
import img10 from '../../assets/img10.jpeg';
import img11 from '../../assets/img11.jpeg';
import img12 from '../../assets/img12.jpeg';
import img13 from '../../assets/img13.jpeg';
import img14 from '../../assets/img14.jpeg';
import img15 from '../../assets/img15.png';
import img16 from '../../assets/img16.png';
import img17 from '../../assets/img17.png';
import img18 from '../../assets/img18.jpeg';
import img19 from '../../assets/img19.jpeg';
import img20 from '../../assets/img20.jpeg';
import img21 from '../../assets/img21.jpeg';
import img22 from '../../assets/img22.jpeg';
import img23 from '../../assets/img23.jpeg';
import img24 from '../../assets/img24.jpeg';
import img25 from '../../assets/img25.png';
import img26 from '../../assets/img26.png';
import img27 from '../../assets/img27.png';
import img28 from '../../assets/img28.png';
import img29 from '../../assets/img29.png';
import img30 from '../../assets/img30.png';
import img31 from '../../assets/img31.png';
import img32 from '../../assets/img32.png';
import img33 from '../../assets/img33.png';
import img34 from '../../assets/img34.png';
import img35 from '../../assets/img35.png';
import img36 from '../../assets/img36.jpeg';
import img37 from '../../assets/img37.jpeg';
import corner from "../../assets/cornersofa.png";

export default function SofaCorners() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleShow = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const images = [corner, img2, img3, img4, img5, img6, img7, img8, img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24,img25,img25,img26,img27,img28,img29,img30,img31,img32,img33,img34,img35,img36,img37];

  return (
    <div>
      <div className="d-flex gap-5 flex-wrap ms-5 mt-5">
        {images.map((img, index) => (
          <Card key={index} style={{ width: "16rem" }} onClick={() => handleShow(img)}>
            <Card.Img variant="top" src={img} className="mt-4" />
            <Card.Body className="card-body">
              <Button as={Link} to="/sofa/sofaCorners"> اضغط</Button>
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
