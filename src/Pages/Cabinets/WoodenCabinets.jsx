import {React} from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { useState } from "react";
import WoodenCabinets1 from '../../assets/WoodenCabinets1.jpeg';
import WoodenCabinets2 from '../../assets/WoodenCabinets2.jpeg';
import WoodenCabinets3 from '../../assets/WoodenCabinets3.jpeg';
import WoodenCabinets4 from '../../assets/WoodenCabinets4.jpeg';
import WoodenCabinets5 from '../../assets/WoodenCabinets5.jpeg';
import WoodenCabinets6 from '../../assets/WoodenCabinets6.jpeg';
import WoodenCabinets7 from '../../assets/WoodenCabinets7.jpeg';
import WoodenCabinets8 from '../../assets/WoodenCabinets8.jpeg';
import WoodenCabinets9 from '../../assets/WoodenCabinets9.jpeg';
import WoodenCabinets10 from '../../assets/WoodenCabinets10.jpeg';
import WoodenCabinets11 from '../../assets/WoodenCabinets11.jpeg';
import WoodenCabinets12 from '../../assets/WoodenCabinets12.jpeg';
import WoodenCabinets13 from '../../assets/WoodenCabinets13.jpeg';
import WoodenCabinets14 from '../../assets/WoodenCabinets14.jpeg';
import WoodenCabinets15 from '../../assets/WoodenCabinets15.jpeg';
import WoodenCabinets16 from '../../assets/WoodenCabinets16.jpeg';
import WoodenCabinets17 from '../../assets/WoodenCabinets17.jpeg';
import WoodenCabinets18 from '../../assets/WoodenCabinets18.jpeg';
import WoodenCabinets19 from '../../assets/WoodenCabinets19.jpeg';
import WoodenCabinets20 from '../../assets/WoodenCabinets20.jpeg';
import WoodenCabinets21 from '../../assets/WoodenCabinets21.jpeg';
import WoodenCabinets22 from '../../assets/WoodenCabinets22.jpeg';
import WoodenCabinets23 from '../../assets/WoodenCabinets23.jpeg';
import WoodenCabinets24 from '../../assets/WoodenCabinets24.jpeg';
import WoodenCabinets25 from '../../assets/WoodenCabinets25.jpeg';
import WoodenCabinets26 from '../../assets/WoodenCabinets26.jpeg';
import WoodenCabinets27 from '../../assets/WoodenCabinets27.jpeg';
import WoodenCabinets28 from '../../assets/WoodenCabinets28.jpeg';
import WoodenCabinets29 from '../../assets/WoodenCabinets29.jpeg';
import WoodenCabinets30 from '../../assets/WoodenCabinets30.jpeg';
import WoodenCabinets31 from '../../assets/WoodenCabinets31.jpeg';
import WoodenCabinets32 from '../../assets/WoodenCabinets32.jpeg';
import WoodenCabinets33 from '../../assets/WoodenCabinets33.jpeg';
import WoodenCabinets34 from '../../assets/WoodenCabinets34.jpeg';
import WoodenCabinets35 from '../../assets/WoodenCabinets35.jpeg';
import WoodenCabinets36 from '../../assets/WoodenCabinets36.jpeg';
import WoodenCabinets37 from '../../assets/WoodenCabinets37.jpeg';
import WoodenCabinets38 from '../../assets/WoodenCabinets38.jpeg';
import WoodenCabinets39 from '../../assets/WoodenCabinets39.jpeg';
import WoodenCabinets40 from '../../assets/WoodenCabinets40.jpeg';
import WoodenCabinets41 from '../../assets/WoodenCabinets41.jpeg';
import WoodenCabinets42 from '../../assets/WoodenCabinets42.jpeg';
import WoodenCabinets43 from '../../assets/WoodenCabinets43.jpeg';
import WoodenCabinets44 from '../../assets/WoodenCabinets44.jpeg';
import WoodenCabinets45 from '../../assets/WoodenCabinets45.jpeg';
import WoodenCabinets46 from '../../assets/WoodenCabinets46.jpeg';
import WoodenCabinets47 from '../../assets/WoodenCabinets47.jpeg';
import WoodenCabinets48 from '../../assets/WoodenCabinets48.jpeg';
import WoodenCabinets49 from '../../assets/WoodenCabinets49.jpeg';
import WoodenCabinets50 from '../../assets/WoodenCabinets50.jpeg';
import WoodenCabinets51 from '../../assets/WoodenCabinets51.jpeg';
import WoodenCabinets52 from '../../assets/WoodenCabinets52.jpeg';
import WoodenCabinets53 from '../../assets/WoodenCabinets53.jpeg';
import WoodenCabinets54 from '../../assets/WoodenCabinets54.jpeg';
import WoodenCabinets55 from '../../assets/WoodenCabinets55.jpeg';
import WoodenCabinets56 from '../../assets/WoodenCabinets56.jpeg';
import WoodenCabinets57 from '../../assets/WoodenCabinets57.jpeg';
import WoodenCabinets58 from '../../assets/WoodenCabinets58.jpeg';
import WoodenCabinets59 from '../../assets/WoodenCabinets59.jpeg';
import WoodenCabinets60 from '../../assets/WoodenCabinets60.jpeg';
import WoodenCabinets61 from '../../assets/WoodenCabinets61.jpeg';
import WoodenCabinets62 from '../../assets/WoodenCabinets62.jpeg';
import WoodenCabinets63 from '../../assets/WoodenCabinets63.jpeg';
import WoodenCabinets64 from '../../assets/WoodenCabinets64.jpeg';
import WoodenCabinets65 from '../../assets/WoodenCabinets65.jpeg';
import WoodenCabinets66 from '../../assets/WoodenCabinets66.jpeg';
import WoodenCabinets67 from '../../assets/WoodenCabinets67.jpeg';
import WoodenCabinets68 from '../../assets/WoodenCabinets68.jpeg';
import WoodenCabinets69 from '../../assets/WoodenCabinets69.jpeg';
import WoodenCabinets70 from '../../assets/WoodenCabinets70.jpeg';
import WoodenCabinets71 from '../../assets/WoodenCabinets71.jpeg';
import WoodenCabinets72 from '../../assets/WoodenCabinets72.jpeg';
import WoodenCabinets73 from '../../assets/WoodenCabinets73.jpeg';
import WoodenCabinets74 from '../../assets/WoodenCabinets74.jpeg';
import WoodenCabinets75 from '../../assets/WoodenCabinets75.jpeg';
import WoodenCabinets76 from '../../assets/WoodenCabinets76.jpeg';
import WoodenCabinets77 from '../../assets/WoodenCabinets77.jpeg';
import WoodenCabinets78 from '../../assets/WoodenCabinets78.jpeg';
import WoodenCabinets79 from '../../assets/WoodenCabinets79.jpeg';
import WoodenCabinets80 from '../../assets/WoodenCabinets80.jpeg';
import WoodenCabinets81 from '../../assets/WoodenCabinets81.jpeg';
import WoodenCabinets82 from '../../assets/WoodenCabinets82.jpeg';
import WoodenCabinets83 from '../../assets/WoodenCabinets83.jpeg';
import WoodenCabinets84 from '../../assets/WoodenCabinets84.jpeg';
import WoodenCabinets85 from '../../assets/WoodenCabinets85.jpeg';
import WoodenCabinets86 from '../../assets/WoodenCabinets86.jpeg';
import WoodenCabinets87 from '../../assets/WoodenCabinets87.jpeg';
import WoodenCabinets88 from '../../assets/WoodenCabinets88.jpeg';
import WoodenCabinets89 from '../../assets/WoodenCabinets89.jpeg';
import WoodenCabinets90 from '../../assets/WoodenCabinets90.jpeg';
import WoodenCabinets91 from '../../assets/WoodenCabinets91.jpeg';
import WoodenCabinets92 from '../../assets/WoodenCabinets92.jpeg';
import WoodenCabinets93 from '../../assets/WoodenCabinets93.jpeg';
import WoodenCabinets94 from '../../assets/WoodenCabinets94.jpeg';
import WoodenCabinets95 from '../../assets/WoodenCabinets95.jpeg';
import WoodenCabinets96 from '../../assets/WoodenCabinets96.jpeg';
import WoodenCabinets97 from '../../assets/WoodenCabinets97.jpeg';
import WoodenCabinets98 from '../../assets/WoodenCabinets98.jpeg';
import WoodenCabinets99 from '../../assets/WoodenCabinets99.jpeg';
import WoodenCabinets100 from '../../assets/WoodenCabinets100.jpeg';
import WoodenCabinets101 from '../../assets/WoodenCabinets101.jpeg';
import WoodenCabinets102 from '../../assets/WoodenCabinets102.jpeg';
import WoodenCabinets103 from '../../assets/WoodenCabinets103.jpeg';
import WoodenCabinets104 from '../../assets/WoodenCabinets104.jpeg';
import WoodenCabinets105 from '../../assets/WoodenCabinets105.jpeg';
import WoodenCabinets106 from '../../assets/WoodenCabinets106.jpeg';
import WoodenCabinets107 from '../../assets/WoodenCabinets107.jpeg';
import WoodenCabinets108 from '../../assets/WoodenCabinets108.jpeg';
import WoodenCabinets109 from '../../assets/WoodenCabinets109.jpeg';
import WoodenCabinets110 from '../../assets/WoodenCabinets110.jpeg';
import WoodenCabinets111 from '../../assets/WoodenCabinets111.jpeg';
import WoodenCabinets112 from '../../assets/WoodenCabinets112.jpeg';
import WoodenCabinets113 from '../../assets/WoodenCabinets113.jpeg';
import WoodenCabinets114 from '../../assets/WoodenCabinets114.jpeg';
import WoodenCabinets115 from '../../assets/WoodenCabinets115.jpeg';
import WoodenCabinets116 from '../../assets/WoodenCabinets116.jpeg';
import WoodenCabinets117 from '../../assets/WoodenCabinets117.jpeg';
import WoodenCabinets118 from '../../assets/WoodenCabinets118.jpeg';
import WoodenCabinets119 from '../../assets/WoodenCabinets119.jpeg';
import WoodenCabinets120 from '../../assets/WoodenCabinets120.jpeg';
import WoodenCabinets121 from '../../assets/WoodenCabinets121.jpeg';
import WoodenCabinets122 from '../../assets/WoodenCabinets122.jpeg';
import WoodenCabinets123 from '../../assets/WoodenCabinets123.jpeg';
import WoodenCabinets124 from '../../assets/WoodenCabinets124.jpeg';
import WoodenCabinets125 from '../../assets/WoodenCabinets125.jpeg';
import WoodenCabinets126 from '../../assets/WoodenCabinets126.jpeg';
import WoodenCabinets127 from '../../assets/WoodenCabinets127.jpeg';
import WoodenCabinets128 from '../../assets/WoodenCabinets128.jpeg';
import WoodenCabinets129 from '../../assets/WoodenCabinets129.jpeg';
import WoodenCabinets130 from '../../assets/WoodenCabinets130.jpeg';
import WoodenCabinets131 from '../../assets/WoodenCabinets131.jpeg';
import WoodenCabinets132 from '../../assets/WoodenCabinets132.jpeg';
import WoodenCabinets133 from '../../assets/WoodenCabinets133.jpeg';
import WoodenCabinets134 from '../../assets/WoodenCabinets134.jpeg';
import WoodenCabinets135 from '../../assets/WoodenCabinets135.jpeg';
import WoodenCabinets136 from '../../assets/WoodenCabinets136.jpeg';
import WoodenCabinets137 from '../../assets/WoodenCabinets137.jpeg';
import WoodenCabinets138 from '../../assets/WoodenCabinets138.jpeg';
import WoodenCabinets139 from '../../assets/WoodenCabinets139.jpeg';
import WoodenCabinets140 from '../../assets/WoodenCabinets140.jpeg';
import WoodenCabinets141 from '../../assets/WoodenCabinets141.jpeg';
import WoodenCabinets142 from '../../assets/WoodenCabinets142.jpeg';
import WoodenCabinets143 from '../../assets/WoodenCabinets143.jpeg';
import WoodenCabinets144 from '../../assets/WoodenCabinets144.jpeg';
import WoodenCabinets145 from '../../assets/WoodenCabinets145.jpeg';
import WoodenCabinets146 from '../../assets/WoodenCabinets146.jpeg';
import WoodenCabinets147 from '../../assets/WoodenCabinets147.jpeg';
import WoodenCabinets148 from '../../assets/WoodenCabinets148.jpeg';
import WoodenCabinets149 from '../../assets/WoodenCabinets149.jpeg';

export default function WoodenCabinets() {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleShow = (image) => {
      setSelectedImage(image);
      setShowModal(true);
    };
    const handleClose = () => setShowModal(false);

const images = [
    WoodenCabinets1, WoodenCabinets2, WoodenCabinets3, WoodenCabinets4, WoodenCabinets5,
    WoodenCabinets6, WoodenCabinets7, WoodenCabinets8, WoodenCabinets9, WoodenCabinets10,
    WoodenCabinets11, WoodenCabinets12, WoodenCabinets13, WoodenCabinets14, WoodenCabinets15,
    WoodenCabinets16, WoodenCabinets17, WoodenCabinets18, WoodenCabinets19, WoodenCabinets20,
    WoodenCabinets21, WoodenCabinets22, WoodenCabinets23, WoodenCabinets24, WoodenCabinets25,
    WoodenCabinets26, WoodenCabinets27, WoodenCabinets28, WoodenCabinets29, WoodenCabinets30,
    WoodenCabinets31, WoodenCabinets32, WoodenCabinets33, WoodenCabinets34, WoodenCabinets35,
    WoodenCabinets36, WoodenCabinets37, WoodenCabinets38, WoodenCabinets39, WoodenCabinets40,
    WoodenCabinets41, WoodenCabinets42, WoodenCabinets43, WoodenCabinets44, WoodenCabinets45,
    WoodenCabinets46,WoodenCabinets47,WoodenCabinets48,WoodenCabinets49,WoodenCabinets50,
    WoodenCabinets51, WoodenCabinets52, WoodenCabinets53, WoodenCabinets54, WoodenCabinets55,
    WoodenCabinets56, WoodenCabinets57, WoodenCabinets58, WoodenCabinets59, WoodenCabinets60,
    WoodenCabinets61,WoodenCabinets62,WoodenCabinets63,WoodenCabinets64,WoodenCabinets65,
    WoodenCabinets66,WoodenCabinets67,WoodenCabinets68,WoodenCabinets69,WoodenCabinets70,
    WoodenCabinets71,WoodenCabinets72,WoodenCabinets73,WoodenCabinets74,WoodenCabinets75,
    WoodenCabinets76,WoodenCabinets77,WoodenCabinets78,WoodenCabinets79,WoodenCabinets80,
    WoodenCabinets81, WoodenCabinets82, WoodenCabinets83, WoodenCabinets84, WoodenCabinets85, WoodenCabinets86,
    WoodenCabinets87, WoodenCabinets88, WoodenCabinets89, WoodenCabinets90, WoodenCabinets91,
    WoodenCabinets92, WoodenCabinets93, WoodenCabinets94, WoodenCabinets95, WoodenCabinets96,
    WoodenCabinets97, WoodenCabinets98, WoodenCabinets99, WoodenCabinets100, WoodenCabinets101,
    WoodenCabinets102, WoodenCabinets103, WoodenCabinets104, WoodenCabinets105, WoodenCabinets106,
    WoodenCabinets107, WoodenCabinets108, WoodenCabinets109, WoodenCabinets110, WoodenCabinets111,
    WoodenCabinets112, WoodenCabinets113, WoodenCabinets114, WoodenCabinets115, WoodenCabinets116,
    WoodenCabinets117, WoodenCabinets118, WoodenCabinets119, WoodenCabinets120, WoodenCabinets121,
    WoodenCabinets122, WoodenCabinets123, WoodenCabinets124, WoodenCabinets125, WoodenCabinets126,
    WoodenCabinets127, WoodenCabinets128, WoodenCabinets129, WoodenCabinets130, WoodenCabinets131,
    WoodenCabinets132, WoodenCabinets133, WoodenCabinets134, WoodenCabinets135, WoodenCabinets136,
    WoodenCabinets137, WoodenCabinets138, WoodenCabinets139, WoodenCabinets140, WoodenCabinets141,
    WoodenCabinets142, WoodenCabinets143, WoodenCabinets144, WoodenCabinets145, WoodenCabinets146,
    WoodenCabinets147, WoodenCabinets148, WoodenCabinets149 


   
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
