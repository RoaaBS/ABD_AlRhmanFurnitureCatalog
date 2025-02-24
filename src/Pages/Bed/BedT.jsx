import React, { useState } from "react";
import { Card, Modal,Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

import BedT1 from '../../assets/BedT1.jpeg';
import BedT2 from '../../assets/BedT2.jpeg';
import BedT3 from '../../assets/BedT3.jpeg';
import BedT4 from '../../assets/BedT4.jpeg';
import BedT5 from '../../assets/BedT5.jpeg';
import BedT6 from '../../assets/BedT6.jpeg';
import BedT7 from '../../assets/BedT7.jpeg';
import BedT8 from '../../assets/BedT8.jpeg';
import BedT9 from '../../assets/BedT9.jpeg';
import BedT10 from '../../assets/BedT10.jpeg';
import BedT11 from '../../assets/BedT11.jpeg';
import BedT12 from '../../assets/BedT12.jpeg';
import BedT13 from '../../assets/BedT13.jpeg';
import BedT14 from '../../assets/BedT14.jpeg';
import BedT15 from '../../assets/BedT15.jpeg';
import BedT16 from '../../assets/BedT16.jpeg';
import BedT17 from '../../assets/BedT17.jpeg';
import BedT18 from '../../assets/BedT18.jpeg';
import BedT19 from '../../assets/BedT19.jpeg';
import BedT20 from '../../assets/BedT20.jpeg';
import BedT21 from '../../assets/BedT21.jpeg';
import BedT22 from '../../assets/BedT22.jpeg';
import BedT23 from '../../assets/BedT23.jpeg';
import BedT24 from '../../assets/BedT24.jpeg';
import BedT25 from '../../assets/BedT25.jpeg';
import BedT26 from '../../assets/BedT26.jpeg';
import BedT27 from '../../assets/BedT27.jpeg';
import BedT28 from '../../assets/BedT28.jpeg';

import BedT31 from '../../assets/BedT31.jpeg';
import BedT32 from '../../assets/BedT32.jpeg';
import BedT33 from '../../assets/BedT33.jpeg';
import BedT34 from '../../assets/BedT34.jpeg';
import BedT35 from '../../assets/BedT35.jpeg';
import BedT36 from '../../assets/BedT36.jpeg';
import BedT37 from '../../assets/BedT37.jpeg';
import BedT38 from '../../assets/BedT38.jpeg';
import BedT39 from '../../assets/BedT39.jpeg';
import BedT40 from '../../assets/BedT40.jpeg';
import BedT41 from '../../assets/BedT41.jpeg';
import BedT42 from '../../assets/BedT42.jpeg';
import BedT43 from '../../assets/BedT43.jpeg';
import BedT44 from '../../assets/BedT44.jpeg';
import BedT45 from '../../assets/BedT45.jpeg';
import BedT46 from '../../assets/BedT46.jpeg';
import BedT47 from '../../assets/BedT47.jpeg';
import BedT48 from '../../assets/BedT48.jpeg';
import BedT49 from '../../assets/BedT49.jpeg';
import BedT50 from '../../assets/BedT50.jpeg';
import BedT51 from '../../assets/BedT51.jpeg';
import BedT52 from '../../assets/BedT52.jpeg';
import BedT53 from '../../assets/BedT53.jpeg';
import BedT54 from '../../assets/BedT54.jpeg';
import BedT55 from '../../assets/BedT55.jpeg';
import BedT56 from '../../assets/BedT56.jpeg';
import BedT57 from '../../assets/BedT57.jpeg';
import BedT58 from '../../assets/BedT58.jpeg';
import BedT59 from '../../assets/BedT59.jpeg';
import BedT60 from '../../assets/BedT60.jpeg';
import BedT61 from '../../assets/BedT61.jpeg';
import BedT62 from '../../assets/BedT62.jpeg';
import BedT63 from '../../assets/BedT63.jpeg';
import BedT64 from '../../assets/BedT64.jpeg';
import BedT65 from '../../assets/BedT65.jpeg';
import BedT66 from '../../assets/BedT66.jpeg';
import BedT67 from '../../assets/BedT67.jpeg';
import BedT69 from '../../assets/BedT69.jpeg';
import BedT71 from '../../assets/BedT71.jpeg';
import BedT72 from '../../assets/BedT72.jpeg';
import BedT73 from '../../assets/BedT73.jpeg';
import BedT74 from '../../assets/BedT74.jpeg';
import BedT75 from '../../assets/BedT75.jpeg';
import BedT76 from '../../assets/BedT76.jpeg';
import BedT77 from '../../assets/BedT77.jpeg';
import BedT78 from '../../assets/BedT78.jpeg';
import BedT79 from '../../assets/BedT79.jpeg';
import BedT80 from '../../assets/BedT80.jpeg';
import BedT81 from '../../assets/BedT81.jpeg';
import BedT82 from '../../assets/BedT82.jpeg';
import BedT83 from '../../assets/BedT83.jpeg';
import BedT84 from '../../assets/BedT84.jpeg';
import BedT85 from '../../assets/BedT85.jpeg';
import BedT86 from '../../assets/BedT86.jpeg';
import BedT87 from '../../assets/BedT87.jpeg';
import BedT88 from '../../assets/BedT88.jpeg';
import BedT89 from '../../assets/BedT89.jpeg';
import BedT90 from '../../assets/BedT90.jpeg';
import BedT91 from '../../assets/BedT91.jpeg';
import BedT92 from '../../assets/BedT92.jpeg';
import BedT93 from '../../assets/BedT93.jpeg';
import BedT94 from '../../assets/BedT94.jpeg';
import BedT95 from '../../assets/BedT95.jpeg';
import BedT96 from '../../assets/BedT96.jpeg';
import BedT97 from '../../assets/BedT97.jpeg';
import BedT98 from '../../assets/BedT98.jpeg';
import BedT99 from '../../assets/BedT99.jpeg';
import BedT100 from '../../assets/BedT100.jpeg';
import BedT101 from '../../assets/BedT101.jpeg';
import BedT102 from '../../assets/BedT102.jpeg';
import BedT103 from '../../assets/BedT103.jpeg';
import BedT104 from '../../assets/BedT104.jpeg';
import BedT105 from '../../assets/BedT105.jpeg';
import BedT106 from '../../assets/BedT106.jpeg';
import BedT107 from '../../assets/BedT107.jpeg';
import BedT108 from '../../assets/BedT108.jpeg';
import BedT109 from '../../assets/BedT109.jpeg';
import BedT110 from '../../assets/BedT110.jpeg';
import BedT111 from '../../assets/BedT111.jpeg';

export default function BedT() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleShow = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);
  const images = [
    BedT1, BedT2, BedT3, BedT4, BedT5, BedT6, BedT7, BedT8, BedT9, BedT10, 
    BedT11, BedT12, BedT13, BedT14, BedT15, BedT16, BedT17, BedT18, BedT19, BedT20, 
    BedT21, BedT22, BedT23, BedT24, BedT25, BedT26, BedT27, BedT28, 
    BedT31, BedT32, BedT33, BedT34, BedT35, BedT36, BedT37, BedT38, BedT39, BedT40, 
    BedT41, BedT42, BedT43, BedT44, BedT45, BedT46, BedT47, BedT48, BedT49, BedT50, 
    BedT51, BedT52, BedT53, BedT54, BedT55, BedT56, BedT57, BedT58, BedT59, BedT60, 
    BedT61, BedT62, BedT63, BedT64, BedT65, BedT66, BedT67, BedT69, 
    BedT71, BedT72, BedT73, BedT74, BedT75, BedT76, BedT77, BedT78, BedT79, BedT80, 
    BedT81, BedT82, BedT83, BedT84, BedT85, BedT86, BedT87, BedT88, BedT89, BedT90, 
    BedT91, BedT92, BedT93, BedT94, BedT95, BedT96, BedT97, BedT98, BedT99, BedT100, 
    BedT101, BedT102, BedT103, BedT104, BedT105, BedT106, BedT107, BedT108,BedT109,BedT110
    ,BedT111
  ];
  
  return (
    <div>
    <div className="d-flex gap-5 flex-wrap ms-5 mt-5">
      {images.map((img, index) => (
        <Card key={index} style={{ width: "16rem" }} onClick={() => handleShow(img)}>
          <Card.Img variant="top" src={img} className="mt-4" />
          <Card.Body className="card-body">
            <Button as={Link} to="/BedT"> اضغط</Button>
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
