import {React} from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { useState } from "react";
import GlassCabinets1 from '../../assets/GlassCabinets1.jpeg';
import GlassCabinets2 from '../../assets/GlassCabinets2.jpeg';
import GlassCabinets3 from '../../assets/GlassCabinets3.jpeg';
import GlassCabinets4 from '../../assets/GlassCabinets4.jpeg';
import GlassCabinets5 from '../../assets/GlassCabinets5.jpeg';
import GlassCabinets6 from '../../assets/GlassCabinets6.jpeg';
import GlassCabinets7 from '../../assets/GlassCabinets7.jpeg';
import GlassCabinets8 from '../../assets/GlassCabinets8.jpeg';
import GlassCabinets9 from '../../assets/GlassCabinets9.jpeg';
import GlassCabinets10 from '../../assets/GlassCabinets10.jpeg';
import GlassCabinets11 from '../../assets/GlassCabinets11.jpeg';
import GlassCabinets12 from '../../assets/GlassCabinets12.jpeg';
import GlassCabinets13 from '../../assets/GlassCabinets13.jpeg';
import GlassCabinets14 from '../../assets/GlassCabinets14.jpeg';
import GlassCabinets15 from '../../assets/GlassCabinets15.jpeg';
import GlassCabinets16 from '../../assets/GlassCabinets16.jpeg';
import GlassCabinets17 from '../../assets/GlassCabinets17.jpeg';
import GlassCabinets18 from '../../assets/GlassCabinets18.jpeg';
import GlassCabinets19 from '../../assets/GlassCabinets19.jpeg';
import GlassCabinets20 from '../../assets/GlassCabinets20.jpeg';
import GlassCabinets21 from '../../assets/GlassCabinets21.jpeg';
import GlassCabinets22 from '../../assets/GlassCabinets22.jpeg';
import GlassCabinets23 from '../../assets/GlassCabinets23.jpeg';
import GlassCabinets24 from '../../assets/GlassCabinets24.jpeg';
import GlassCabinets25 from '../../assets/GlassCabinets25.jpeg';
import GlassCabinets26 from '../../assets/GlassCabinets26.jpeg';
import GlassCabinets27 from '../../assets/GlassCabinets27.jpeg';
import GlassCabinets28 from '../../assets/GlassCabinets28.jpeg';
import GlassCabinets29 from '../../assets/GlassCabinets29.jpeg';
import GlassCabinets30 from '../../assets/GlassCabinets30.jpeg';
import GlassCabinets31 from '../../assets/GlassCabinets31.jpeg';
import GlassCabinets32 from '../../assets/GlassCabinets32.jpeg';
import GlassCabinets33 from '../../assets/GlassCabinets33.jpeg';
import GlassCabinets34 from '../../assets/GlassCabinets34.jpeg';
import GlassCabinets35 from '../../assets/GlassCabinets35.jpeg';
import GlassCabinets36 from '../../assets/GlassCabinets36.jpeg';
import GlassCabinets37 from '../../assets/GlassCabinets37.jpeg';
import GlassCabinets38 from '../../assets/GlassCabinets38.jpeg';
import GlassCabinets39 from '../../assets/GlassCabinets39.jpeg';
import GlassCabinets40 from '../../assets/GlassCabinets40.jpeg';
import GlassCabinets41 from '../../assets/GlassCabinets41.jpeg';
import GlassCabinets42 from '../../assets/GlassCabinets42.jpeg';
import GlassCabinets43 from '../../assets/GlassCabinets43.jpeg';
import GlassCabinets44 from '../../assets/GlassCabinets44.jpeg';
import GlassCabinets45 from '../../assets/GlassCabinets45.jpeg';
import GlassCabinets46 from '../../assets/GlassCabinets46.jpeg';
import GlassCabinets47 from '../../assets/GlassCabinets47.jpeg';
import GlassCabinets48 from '../../assets/GlassCabinets48.jpeg';
import GlassCabinets49 from '../../assets/GlassCabinets49.jpeg';
import GlassCabinets50 from '../../assets/GlassCabinets50.jpeg';
import GlassCabinets51 from '../../assets/GlassCabinets51.jpeg';
import GlassCabinets52 from '../../assets/GlassCabinets52.jpeg';
import GlassCabinets53 from '../../assets/GlassCabinets53.jpeg';
import GlassCabinets54 from '../../assets/GlassCabinets54.jpeg';
import GlassCabinets55 from '../../assets/GlassCabinets55.jpeg';
import GlassCabinets56 from '../../assets/GlassCabinets56.jpeg';
import GlassCabinets57 from '../../assets/GlassCabinets57.jpeg';
import GlassCabinets58 from '../../assets/GlassCabinets58.jpeg';
import GlassCabinets59 from '../../assets/GlassCabinets59.jpeg';
import GlassCabinets60 from '../../assets/GlassCabinets60.jpeg';
import GlassCabinets61 from '../../assets/GlassCabinets61.jpeg';
import GlassCabinets62 from '../../assets/GlassCabinets62.jpeg';
import GlassCabinets63 from '../../assets/GlassCabinets63.jpeg';
import GlassCabinets64 from '../../assets/GlassCabinets64.jpeg';
import GlassCabinets65 from '../../assets/GlassCabinets65.jpeg';
import GlassCabinets66 from '../../assets/GlassCabinets66.jpeg';
import GlassCabinets67 from '../../assets/GlassCabinets67.jpeg';
import GlassCabinets68 from '../../assets/GlassCabinets68.jpeg';
import GlassCabinets69 from '../../assets/GlassCabinets69.jpeg';
import GlassCabinets70 from '../../assets/GlassCabinets70.jpeg';
import GlassCabinets71 from '../../assets/GlassCabinets71.jpeg';
import GlassCabinets72 from '../../assets/GlassCabinets72.jpeg';
import GlassCabinets73 from '../../assets/GlassCabinets73.jpeg';
import GlassCabinets74 from '../../assets/GlassCabinets74.jpeg';
import GlassCabinets75 from '../../assets/GlassCabinets75.jpeg';
import GlassCabinets76 from '../../assets/GlassCabinets76.jpeg';
import GlassCabinets77 from '../../assets/GlassCabinets77.jpeg';
import GlassCabinets78 from '../../assets/GlassCabinets78.jpeg';
import GlassCabinets79 from '../../assets/GlassCabinets79.jpeg';
import GlassCabinets80 from '../../assets/GlassCabinets80.jpeg';
import GlassCabinets81 from '../../assets/GlassCabinets81.jpeg';

export default function GlassCabinets() {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleShow = (image) => {
      setSelectedImage(image);
      setShowModal(true);
    };
    const handleClose = () => setShowModal(false);
    const images = [
        GlassCabinets1, GlassCabinets2, GlassCabinets3, GlassCabinets4, GlassCabinets5,
        GlassCabinets6, GlassCabinets7, GlassCabinets8, GlassCabinets9, GlassCabinets10,
        GlassCabinets11, GlassCabinets12, GlassCabinets13, GlassCabinets14, GlassCabinets15,
        GlassCabinets16, GlassCabinets17, GlassCabinets18, GlassCabinets19, GlassCabinets20,
        GlassCabinets21, GlassCabinets22, GlassCabinets23, GlassCabinets24, GlassCabinets25,
        GlassCabinets26, GlassCabinets27, GlassCabinets28, GlassCabinets29, GlassCabinets30,
        GlassCabinets31, GlassCabinets32, GlassCabinets33, GlassCabinets34, GlassCabinets35,
        GlassCabinets36, GlassCabinets37, GlassCabinets38, GlassCabinets39, GlassCabinets40,
        GlassCabinets41, GlassCabinets42, GlassCabinets43, GlassCabinets44, GlassCabinets45,
        GlassCabinets46, GlassCabinets47, GlassCabinets48, GlassCabinets49, GlassCabinets50,
        GlassCabinets51, GlassCabinets52, GlassCabinets53, GlassCabinets54, GlassCabinets55,
        GlassCabinets56, GlassCabinets57, GlassCabinets58, GlassCabinets59, GlassCabinets60,
        GlassCabinets61, GlassCabinets62, GlassCabinets63, GlassCabinets64, GlassCabinets65,
        GlassCabinets66, GlassCabinets67, GlassCabinets68, GlassCabinets69, GlassCabinets70,
        GlassCabinets71, GlassCabinets72, GlassCabinets73, GlassCabinets74, GlassCabinets75,
        GlassCabinets76, GlassCabinets77, GlassCabinets78, GlassCabinets79, GlassCabinets80,
        GlassCabinets81
      ];
      

      
  return (
    <div>
    <div className="d-flex gap-5 flex-wrap ms-5 mt-5">
      {images.map((img, index) => (
        <Card key={index} style={{ width: "16rem" }} onClick={() => handleShow(img)}>
          <Card.Img variant="top" src={img} className="mt-4" />
          <Card.Body className="card-body">
            <Button as={Link} to="/smCabinets"> اضغط</Button>
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
