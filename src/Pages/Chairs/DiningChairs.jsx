import { React, useState } from 'react';
import { Card, Modal,Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import chairs83 from '../../assets/chairs83.jpeg';
import chairs84 from '../../assets/chairs84.jpeg';
import chairs85 from '../../assets/chairs85.jpeg';
import chairs86 from '../../assets/chairs86.jpeg';
import chairs87 from '../../assets/chairs87.jpeg';
import chairs88 from '../../assets/chairs88.jpeg';
import chairs89 from '../../assets/chairs89.jpeg';
import chairs90 from '../../assets/chairs90.jpeg';
import chairs91 from '../../assets/chairs91.jpeg';
import chairs92 from '../../assets/chairs92.jpeg';
import chairs93 from '../../assets/chairs93.jpeg';
import chairs94 from '../../assets/chairs94.jpeg';
import chairs95 from '../../assets/chairs95.jpeg';
import chairs96 from '../../assets/chairs96.jpeg';
import chairs97 from '../../assets/chairs97.jpeg';
import chairs98 from '../../assets/chairs98.jpeg';
import chairs99 from '../../assets/chairs99.jpeg';
import chairs100 from '../../assets/chairs100.jpeg';
import chairs101 from '../../assets/chairs101.jpeg';
import chairs102 from '../../assets/chairs102.jpeg';
import chairs103 from '../../assets/chairs103.jpeg';
import chairs104 from '../../assets/chairs104.jpeg';
import chairs105 from '../../assets/chairs105.jpeg';
import chairs106 from '../../assets/chairs106.jpeg';
import chairs107 from '../../assets/chairs107.jpeg';
import chairs108 from '../../assets/chairs108.jpeg';
import chairs109 from '../../assets/chairs109.jpeg';
import chairs110 from '../../assets/chairs110.jpeg';
import chairs111 from '../../assets/chairs111.jpeg';
import chairs112 from '../../assets/chairs112.jpeg';
import chairs113 from '../../assets/chairs113.jpeg';
import chairs114 from '../../assets/chairs114.jpeg';
import chairs115 from '../../assets/chairs115.jpeg';
import chairs116 from '../../assets/chairs116.jpeg';
import chairs117 from '../../assets/chairs117.jpeg';
import chairs118 from '../../assets/chairs118.jpeg';
const images=[chairs83, chairs84, chairs85, chairs86, chairs87, chairs88, chairs89, chairs90, chairs91, chairs92, chairs93, chairs94, chairs95,
    chairs96, chairs97, chairs98, chairs99, chairs100, chairs101, chairs102, chairs103, chairs104, chairs105, chairs106, chairs107,
    chairs108, chairs109, chairs110, chairs111, chairs112, chairs113, chairs114, chairs115, chairs116, chairs117, chairs118]
export default function DiningChairs() {
   
        const [showModal, setShowModal] = useState(false);
        const [selectedImage, setSelectedImage] = useState(null);
      
        const handleShow = (image) => {
          setSelectedImage(image);
          setShowModal(true);
        };
      
        const handleClose = () => setShowModal(false);
    
  return (
    <div>
    <div className="d-flex gap-5 flex-wrap ms-5 mt-5">
      {images.map((img, index) => (
        <Card key={index} style={{ width: "16rem" }} onClick={() => handleShow(img)}>
          <Card.Img variant="top" src={img} className="mt-4" />
          <Card.Body className="card-body">
            <Button as={Link} to="/DinningChairs"> اضغط</Button>
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
