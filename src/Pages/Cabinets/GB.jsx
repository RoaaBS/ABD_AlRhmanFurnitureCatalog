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
import GB1 from '../../assets/GB1.jpeg';
import GB2 from '../../assets/GB2.jpeg';
import GB3 from '../../assets/GB3.jpeg';
import GB4 from '../../assets/GB4.jpeg';
import GB5 from '../../assets/GB5.jpeg';
import GB6 from '../../assets/GB6.jpeg';
import GB7 from '../../assets/GB7.jpeg';
import GB8 from '../../assets/GB8.jpeg';
import GB9 from '../../assets/GB9.jpeg';
import GB10 from '../../assets/GB10.jpeg';
import GB11 from '../../assets/GB11.jpeg';
import GB12 from '../../assets/GB12.jpeg';
import GB13 from '../../assets/GB13.jpeg';
import GB14 from '../../assets/GB14.jpeg';
import GB15 from '../../assets/GB15.jpeg';
import GB16 from '../../assets/GB16.jpeg';
import GB17 from '../../assets/GB17.jpeg';
import GB18 from '../../assets/GB18.jpeg';
import GB19 from '../../assets/GB19.jpeg';
import GB20 from '../../assets/GB20.jpeg';
import GB21 from '../../assets/GB21.jpeg';
import GB22 from '../../assets/GB22.jpeg';
import GB23 from '../../assets/GB23.jpeg';
import GB24 from '../../assets/GB24.jpeg';
import GB25 from '../../assets/GB25.jpeg';
import GB26 from '../../assets/GB26.jpeg';
import GB27 from '../../assets/GB27.jpeg';
import GB28 from '../../assets/GB28.jpeg';
import GB29 from '../../assets/GB29.jpeg';
import GB30 from '../../assets/GB30.jpeg';
import GB31 from '../../assets/GB31.jpeg';
import GB32 from '../../assets/GB32.jpeg';
import GB33 from '../../assets/GB33.jpeg';
import GB34 from '../../assets/GB34.jpeg';
import GB35 from '../../assets/GB35.jpeg';
import GB36 from '../../assets/GB36.jpeg';
import GB37 from '../../assets/GB37.jpeg';
import GB38 from '../../assets/GB38.jpeg';
import GB39 from '../../assets/GB39.jpeg';
import GB40 from '../../assets/GB40.jpeg';
import GB41 from '../../assets/GB41.jpeg';
import GB42 from '../../assets/GB42.jpeg';
import GB43 from '../../assets/GB43.jpeg';
import GB44 from '../../assets/GB44.jpeg';
import GB45 from '../../assets/GB45.jpeg';
import GB46 from '../../assets/GB46.jpeg';
import GB47 from '../../assets/GB47.jpeg';
import GB48 from '../../assets/GB48.jpeg';
import GB49 from '../../assets/GB49.jpeg';
import GB50 from '../../assets/GB50.jpeg';
import GB51 from '../../assets/GB51.jpeg';
import GB52 from '../../assets/GB52.jpeg';
import GB53 from '../../assets/GB53.jpeg';
import GB54 from '../../assets/GB54.jpeg';
import GB55 from '../../assets/GB55.jpeg';
import GB56 from '../../assets/GB56.jpeg';
import GB57 from '../../assets/GB57.jpeg';
import GB58 from '../../assets/GB58.jpeg';
import GB59 from '../../assets/GB59.jpeg';
import GB60 from '../../assets/GB60.jpeg';
import GB61 from '../../assets/GB61.jpeg';
import GB62 from '../../assets/GB62.jpeg';
import GB63 from '../../assets/GB63.jpeg';
import GB64 from '../../assets/GB64.jpeg';
import GB65 from '../../assets/GB65.jpeg';
import GB66 from '../../assets/GB66.jpeg';
import GB67 from '../../assets/GB67.jpeg';
import GB68 from '../../assets/GB68.jpeg';
import GB69 from '../../assets/GB69.jpeg';
import GB70 from '../../assets/GB70.jpeg';
import GB71 from '../../assets/GB71.jpeg';
import GB72 from '../../assets/GB72.jpeg';

export default function GB() {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleShow = (image) => {
      setSelectedImage(image);
      setShowModal(true);
    };
  
    const handleClose = () => setShowModal(false);
    const images = [cabinets1,cabinets2,cabinets3,cabinets4,cabinets5,cabinets6,cabinets7,GB1,GB2,GB3,GB4
    ,GB5, GB6, GB7, GB8, GB9, GB10, GB11, GB12, GB13, GB14, GB15, GB16, GB17, GB18, GB19, GB20,
    GB21, GB22, GB23, GB24, GB25, GB26, GB27, GB28, GB29, GB30, GB31, GB32, GB33, GB34, GB35, GB36,
    GB37, GB38, GB39, GB40, GB41, GB42, GB43, GB44, GB45, GB46, GB47, GB48, GB49, GB50, GB51, GB52, GB53
  ,GB54,GB55,GB56,GB57,GB58,GB59,GB60,GB61,GB62,GB63,GB64,GB65,GB66,GB67,GB68,GB69,GB70,GB71,GB72];

    return (
      <div>
        <div className="d-flex gap-5 flex-wrap ms-5 mt-5">
          {images.map((img, index) => (
            <Card key={index} style={{ width: "16rem" }} onClick={() => handleShow(img)}>
              <Card.Img variant="top" src={img} className="mt-4" />
              <Card.Body className="card-body">
                <Button as={Link} to="/GBCatalog"> اضغط</Button>
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
