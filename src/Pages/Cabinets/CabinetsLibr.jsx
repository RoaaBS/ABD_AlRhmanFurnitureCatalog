import {React,useState} from 'react'
import { Card, Modal,Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import CabinetsLibr1 from '../../assets/CabinetsLibr1.jpeg';
import CabinetsLibr2 from '../../assets/CabinetsLibr2.jpeg';
import CabinetsLibr3 from '../../assets/CabinetsLibr3.jpeg';
import CabinetsLibr4 from '../../assets/CabinetsLibr4.jpeg';
import CabinetsLibr5 from '../../assets/CabinetsLibr5.jpeg';
import CabinetsLibr6 from '../../assets/CabinetsLibr6.jpeg';
import CabinetsLibr7 from '../../assets/CabinetsLibr7.jpeg';
import CabinetsLibr8 from '../../assets/CabinetsLibr8.jpeg';
import CabinetsLibr9 from '../../assets/CabinetsLibr9.jpeg';
import CabinetsLibr10 from '../../assets/CabinetsLibr10.jpeg';
import CabinetsLibr11 from '../../assets/CabinetsLibr11.jpeg';
import CabinetsLibr12 from '../../assets/CabinetsLibr12.jpeg';
import CabinetsLibr13 from '../../assets/CabinetsLibr13.jpeg';
import CabinetsLibr14 from '../../assets/CabinetsLibr14.jpeg';
import CabinetsLibr15 from '../../assets/CabinetsLibr15.jpeg';
import CabinetsLibr16 from '../../assets/CabinetsLibr16.jpeg';
import CabinetsLibr17 from '../../assets/CabinetsLibr17.jpeg';
import CabinetsLibr18 from '../../assets/CabinetsLibr18.jpeg';
import CabinetsLibr19 from '../../assets/CabinetsLibr19.jpeg';
import CabinetsLibr20 from '../../assets/CabinetsLibr20.jpeg';
import CabinetsLibr21 from '../../assets/CabinetsLibr21.jpeg';
import CabinetsLibr22 from '../../assets/CabinetsLibr22.jpeg';
import CabinetsLibr23 from '../../assets/CabinetsLibr23.jpeg';
import CabinetsLibr24 from '../../assets/CabinetsLibr24.jpeg';
import CabinetsLibr25 from '../../assets/CabinetsLibr25.jpeg';
import CabinetsLibr26 from '../../assets/CabinetsLibr26.jpeg';
import CabinetsLibr27 from '../../assets/CabinetsLibr27.jpeg';
import CabinetsLibr28 from '../../assets/CabinetsLibr28.jpeg';
import CabinetsLibr29 from '../../assets/CabinetsLibr29.jpeg';
import CabinetsLibr30 from '../../assets/CabinetsLibr30.jpeg';
import CabinetsLibr31 from '../../assets/CabinetsLibr31.jpeg';
import CabinetsLibr32 from '../../assets/CabinetsLibr32.jpeg';
import CabinetsLibr33 from '../../assets/CabinetsLibr33.jpeg';
import CabinetsLibr34 from '../../assets/CabinetsLibr34.jpeg';
import CabinetsLibr35 from '../../assets/CabinetsLibr35.jpeg';
import CabinetsLibr36 from '../../assets/CabinetsLibr36.jpeg';
import CabinetsLibr37 from '../../assets/CabinetsLibr37.jpeg';
import CabinetsLibr38 from '../../assets/CabinetsLibr38.jpeg';
import CabinetsLibr39 from '../../assets/CabinetsLibr39.jpeg';
import CabinetsLibr40 from '../../assets/CabinetsLibr40.jpeg';
import CabinetsLibr41 from '../../assets/CabinetsLibr41.jpeg';
import CabinetsLibr42 from '../../assets/CabinetsLibr42.jpeg';
import CabinetsLibr43 from '../../assets/CabinetsLibr43.jpeg';
import CabinetsLibr44 from '../../assets/CabinetsLibr44.jpeg';
import CabinetsLibr45 from '../../assets/CabinetsLibr45.jpeg';
import CabinetsLibr46 from '../../assets/CabinetsLibr46.jpeg';
import CabinetsLibr47 from '../../assets/CabinetsLibr47.jpeg';
import CabinetsLibr48 from '../../assets/CabinetsLibr48.jpeg';
import CabinetsLibr49 from '../../assets/CabinetsLibr49.jpeg';
import CabinetsLibr50 from '../../assets/CabinetsLibr50.jpeg';

export default function CabinetsLibr() {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleShow = (image) => {
      setSelectedImage(image);
      setShowModal(true);
    };
  
    const handleClose = () => setShowModal(false);
    const images = [
        CabinetsLibr1, CabinetsLibr2, CabinetsLibr3, CabinetsLibr4, CabinetsLibr5, 
        CabinetsLibr6, CabinetsLibr7, CabinetsLibr8, CabinetsLibr9, CabinetsLibr10, 
        CabinetsLibr11, CabinetsLibr12, CabinetsLibr13, CabinetsLibr14, CabinetsLibr15, 
        CabinetsLibr16, CabinetsLibr17, CabinetsLibr18, CabinetsLibr19, CabinetsLibr20, 
        CabinetsLibr21, CabinetsLibr22, CabinetsLibr23, CabinetsLibr24, CabinetsLibr25, 
        CabinetsLibr26, CabinetsLibr27, CabinetsLibr28, CabinetsLibr29, CabinetsLibr30, 
        CabinetsLibr31, CabinetsLibr32, CabinetsLibr33, CabinetsLibr34, CabinetsLibr35, 
        CabinetsLibr36, CabinetsLibr37, CabinetsLibr38, CabinetsLibr39, CabinetsLibr40, 
        CabinetsLibr41, CabinetsLibr42, CabinetsLibr43, CabinetsLibr44, CabinetsLibr45, 
        CabinetsLibr46, CabinetsLibr47, CabinetsLibr48, CabinetsLibr49, CabinetsLibr50,
      
      ];
      
  return (
    <div>
    <div className="d-flex gap-5 flex-wrap ms-5 mt-5">
      {images.map((img, index) => (
        <Card key={index} style={{ width: "16rem" }} onClick={() => handleShow(img)}>
          <Card.Img variant="top" src={img} className="mt-4" />
          <Card.Body className="card-body">
            <Button as={Link} to="/Library&Cabinets"> اضغط</Button>
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
