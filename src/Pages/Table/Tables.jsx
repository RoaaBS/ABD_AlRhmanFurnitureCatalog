import {React} from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import table1 from '../../assets/table1.jpeg'
import table2 from '../../assets/table2.jpeg'
import table3 from '../../assets/table3.jpeg'
import table4 from '../../assets/table4.jpeg'
import table5 from '../../assets/table5.jpeg'
import table6 from '../../assets/table6.jpeg'
import table7 from '../../assets/table7.jpeg'
import table8 from '../../assets/table8.jpeg'
import table9 from '../../assets/table9.jpeg'
import table10 from '../../assets/table10.jpeg'
import table11 from '../../assets/table11.jpeg'
import table12 from '../../assets/table12.jpeg'
import table13 from '../../assets/table13.jpeg'
import table14 from '../../assets/table14.jpeg'
import table15 from '../../assets/table15.jpeg'
import table16 from '../../assets/table16.jpeg'
import table17 from '../../assets/table17.jpeg'
import table18 from '../../assets/table18.jpeg'
import table19 from '../../assets/table19.jpeg'
import table20 from '../../assets/table20.jpeg'
import table21 from '../../assets/table21.jpeg'
import table22 from '../../assets/table22.jpeg'
import table23 from '../../assets/table23.jpeg'
import table24 from '../../assets/table24.jpeg'
import table25 from '../../assets/table25.jpeg'
import table26 from '../../assets/table26.jpeg'
import table27 from '../../assets/table27.jpeg'
import table28 from '../../assets/table28.jpeg'
import table29 from '../../assets/table29.jpeg'
import table30 from '../../assets/table30.jpeg'
import table31 from '../../assets/table31.jpeg'
import table32 from '../../assets/table32.jpeg'
import table33 from '../../assets/table33.jpeg'
import table34 from '../../assets/table34.jpeg'
import table35 from '../../assets/table35.jpeg'
import table36 from '../../assets/table36.jpeg'
import table37 from '../../assets/table37.jpeg'
import table38 from '../../assets/table38.jpeg'
import table39 from '../../assets/table39.jpeg'
import table40 from '../../assets/table40.jpeg'
import table41 from '../../assets/table41.jpeg'
import table42 from '../../assets/table42.jpeg'
import table43 from '../../assets/table43.jpeg'
import table44 from '../../assets/table44.jpeg'
import table45 from '../../assets/table45.jpeg'
import table46 from '../../assets/table46.jpeg'
import table47 from '../../assets/table47.jpeg'
import table48 from '../../assets/table48.jpeg'
import table49 from '../../assets/table49.jpeg'
import table50 from '../../assets/table50.jpeg'
import table51 from '../../assets/table51.jpeg'
import table52 from '../../assets/table52.jpeg'
import { useState } from "react";
export default function Tables() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleShow = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);
  const images = [table1,table2,table3,table4,table5,table6,table7,table8,table9,table10,table11
    ,table12,table13,table14,table15,table16,table17,table18,table19,table20,table21,table22,
    table23,table24,table25,table26,table27,table28,table29,table30,table31,table32,table33,
    table34,table35,table36,table37,table38,table39,table40,table41,table42,table43,table44,table45,table46,table47,table48,table49,table50,table51,table52];

  return (
    <div>
      <div className="d-flex gap-5 flex-wrap ms-5 mt-5">
        {images.map((img, index) => (
          <Card key={index} style={{ width: "16rem" }} onClick={() => handleShow(img)}>
            <Card.Img variant="top" src={img} className="mt-4" />
            <Card.Body className="card-body">
              <Button as={Link} to="/Tables"> اضغط</Button>
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
