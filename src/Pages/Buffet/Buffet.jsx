import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import buffet1 from '../../assets/buffet1.jpeg';
import buffet2 from '../../assets/buffet2.jpeg';
import buffet3 from '../../assets/buffet3.jpeg';
import buffet4 from '../../assets/buffet4.jpeg';
import buffet5 from '../../assets/buffet5.png';
import buffet6 from '../../assets/buffet6.png';
import buffet7 from '../../assets/buffet7.png';
import buffet8 from '../../assets/buffet8.png';
import buffet9 from '../../assets/buffet9.jpeg';
import buffet10 from '../../assets/buffet10.jpeg';
import buffet11 from '../../assets/buffet11.jpeg';
import buffet12 from '../../assets/buffet12.jpeg';
import buffet13 from '../../assets/buffet13.jpeg';
import buffet14 from '../../assets/buffet14.jpeg';
import buffet15 from '../../assets/buffet15.jpeg';
import buffet16 from '../../assets/buffet16.jpeg';
import buffet17 from '../../assets/buffet17.jpeg';
import buffet18 from '../../assets/buffet18.jpeg';
import buffet19 from '../../assets/buffet19.jpeg';
import buffet20 from '../../assets/buffet20.jpeg';
import buffet21 from '../../assets/buffet21.jpeg';
import buffet22 from '../../assets/buffet22.jpeg';
import buffet23 from '../../assets/buffet23.jpeg';
import buffet24 from '../../assets/buffet24.jpeg';
import buffet25 from '../../assets/buffet25.png';
import buffet26 from '../../assets/buffet26.jpeg';
import buffet27 from '../../assets/buffet27.jpeg';
import buffet28 from '../../assets/buffet28.jpeg';
import buffet29 from '../../assets/buffet29.jpeg';
import buffet30 from '../../assets/buffet30.jpeg';
import buffet31 from '../../assets/buffet31.jpeg';
import buffet32 from '../../assets/buffet32.jpeg';
import buffet33 from '../../assets/buffet33.jpeg';
import buffet34 from '../../assets/buffet34.jpeg';
import buffet35 from '../../assets/buffet35.jpeg';
import buffet36 from '../../assets/buffet36.jpeg';
import buffet37 from '../../assets/buffet37.jpeg';
import buffet38 from '../../assets/buffet38.jpeg';
import buffet39 from '../../assets/buffet39.jpeg';
import buffet40 from '../../assets/buffet40.jpeg';
import buffet41 from '../../assets/buffet41.jpeg';
import buffet42 from '../../assets/buffet42.jpeg';
import buffet43 from '../../assets/buffet43.jpeg';
import buffet44 from '../../assets/buffet44.jpeg';
import buffet45 from '../../assets/buffet45.jpeg';
import buffet46 from '../../assets/buffet46.jpeg';
import buffet47 from '../../assets/buffet47.jpeg';
import buffet48 from '../../assets/buffet48.jpeg';
import buffet49 from '../../assets/buffet49.jpeg';
import buffet50 from '../../assets/buffet50.jpeg';
import buffet51 from '../../assets/buffet51.jpeg';
import buffet52 from '../../assets/buffet52.jpeg';
import buffet53 from '../../assets/buffet53.jpeg';
import buffet54 from '../../assets/buffet54.jpeg';
import buffet55 from '../../assets/buffet55.jpeg';
import buffet56 from '../../assets/buffet56.jpeg';
import buffet57 from '../../assets/buffet57.jpeg';
import buffet58 from '../../assets/buffet58.jpeg';
import buffet59 from '../../assets/buffet59.jpeg';
import buffet60 from '../../assets/buffet60.jpeg';
import buffet61 from '../../assets/buffet61.jpeg';
import buffet62 from '../../assets/buffet62.jpeg';
import buffet63 from '../../assets/buffet63.jpeg';
import buffet64 from '../../assets/buffet64.jpeg';
import buffet65 from '../../assets/buffet65.jpeg';
import buffet66 from '../../assets/buffet66.jpeg';
import buffet67 from '../../assets/buffet67.jpeg';
import buffet68 from '../../assets/buffet68.jpeg';
import buffet69 from '../../assets/buffet69.jpeg';
import buffet70 from '../../assets/buffet70.jpeg';
import buffet71 from '../../assets/buffet71.jpeg';
import buffet72 from '../../assets/buffet72.jpeg';
import buffet73 from '../../assets/buffet73.jpeg';
import buffet74 from '../../assets/buffet74.jpeg';
import buffet75 from '../../assets/buffet75.jpeg';
import buffet76 from '../../assets/buffet76.jpeg';
import buffet77 from '../../assets/buffet77.jpeg';
import buffet78 from '../../assets/buffet78.jpeg';
import buffet79 from '../../assets/buffet79.jpeg';
import buffet80 from '../../assets/buffet80.jpeg';
import buffet81 from '../../assets/buffet81.jpeg';
import buffet82 from '../../assets/buffet82.jpeg';
import buffet83 from '../../assets/buffet83.jpeg';
import buffet84 from '../../assets/buffet84.jpeg';
import buffet85 from '../../assets/buffet85.jpeg';
import buffet86 from '../../assets/buffet86.jpeg';
import buffet87 from '../../assets/buffet87.jpeg';
import buffet88 from '../../assets/buffet88.jpeg';
import buffet89 from '../../assets/buffet89.jpeg';
import buffet90 from '../../assets/buffet90.jpeg';
import buffet91 from '../../assets/buffet91.jpeg';
import buffet92 from '../../assets/buffet92.jpeg';
import buffet93 from '../../assets/buffet93.jpeg';
import buffet94 from '../../assets/buffet94.jpeg';
import buffet95 from '../../assets/buffet95.jpeg';
import buffet96 from '../../assets/buffet96.jpeg';
import buffet97 from '../../assets/buffet97.jpeg';
import buffet98 from '../../assets/buffet98.jpeg';
import buffet99 from '../../assets/buffet99.jpeg';
import buffet100 from '../../assets/buffet100.jpeg';
import buffet101 from '../../assets/buffet101.jpeg';
import buffet102 from '../../assets/buffet102.jpeg';
import buffet103 from '../../assets/buffet103.jpeg';
import buffet104 from '../../assets/buffet104.jpeg';
import buffet105 from '../../assets/buffet105.jpeg';
import buffet106 from '../../assets/buffet106.jpeg';
import buffet107 from '../../assets/buffet107.jpeg';
import buffet108 from '../../assets/buffet108.jpeg';
import buffet109 from '../../assets/buffet109.jpeg';
import buffet110 from '../../assets/buffet110.jpeg';
import buffet111 from '../../assets/buffet111.jpeg';
import buffet112 from '../../assets/buffet112.jpeg';
import buffet113 from '../../assets/buffet113.jpeg';
import buffet114 from '../../assets/buffet114.jpeg';
import buffet115 from '../../assets/buffet115.jpeg';
import buffet116 from '../../assets/buffet116.jpeg';
import buffet117 from '../../assets/buffet117.jpeg';
import buffet118 from '../../assets/buffet118.jpeg';
import buffet119 from '../../assets/buffet119.jpeg';
import buffet120 from '../../assets/buffet120.jpeg';
import buffet121 from '../../assets/buffet121.jpeg';
import buffet122 from '../../assets/buffet122.jpeg';
import buffet123 from '../../assets/buffet123.jpeg';
import buffet124 from '../../assets/buffet124.jpeg';
import buffet125 from '../../assets/buffet125.jpeg';
import buffet126 from '../../assets/buffet126.jpeg';
import buffet127 from '../../assets/buffet127.jpeg';
import buffet128 from '../../assets/buffet128.jpeg';
import buffet129 from '../../assets/buffet129.jpeg';
import buffet130 from '../../assets/buffet130.jpeg';
import buffet131 from '../../assets/buffet131.jpeg';
import buffet132 from '../../assets/buffet132.jpeg';
import buffet133 from '../../assets/buffet133.jpeg';
import buffet134 from '../../assets/buffet134.jpeg';
import buffet135 from '../../assets/buffet135.jpeg';
import buffet136 from '../../assets/buffet136.jpeg';
import buffet137 from '../../assets/buffet137.jpeg';

export default function Buffet() {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleShow = (image) => {
      setSelectedImage(image);
      setShowModal(true);
    };
  
    const handleClose = () => setShowModal(false);
    const images = [
      buffet1, buffet2, buffet3, buffet4, buffet5, buffet6, buffet7, buffet8, buffet9, buffet10,
      buffet11, buffet12, buffet13, buffet14, buffet15, buffet16, buffet17, buffet18, buffet19, buffet20,
      buffet21, buffet22, buffet23, buffet24, buffet25, buffet26, buffet27, buffet28, buffet29, buffet30,
      buffet31, buffet32, buffet33, buffet34, buffet35, buffet36, buffet37, buffet38, buffet39, buffet40,
      buffet41, buffet42, buffet43, buffet44, buffet45, buffet46, buffet47, buffet48, buffet49, buffet50,
      buffet51, buffet52, buffet53, buffet54, buffet55, buffet56, buffet57, buffet58, buffet59, buffet60,
      buffet61, buffet62, buffet63, buffet64, buffet65, buffet66, buffet67, buffet68, buffet69, buffet70,
      buffet71, buffet72, buffet73, buffet74, buffet75, buffet76, buffet77, buffet78, buffet79, buffet80,
      buffet81, buffet82, buffet83, buffet84, buffet85, buffet86, buffet87, buffet88, buffet89, buffet90,
      buffet91, buffet92, buffet93, buffet94, buffet95, buffet96, buffet97, buffet98, buffet99, buffet100,
      buffet101, buffet102, buffet103, buffet104, buffet105, buffet106, buffet107, buffet108, buffet109, buffet110,
      buffet111, buffet112, buffet113, buffet114, buffet115, buffet116, buffet117, buffet118, buffet119, buffet120,
      buffet121, buffet122, buffet123, buffet124, buffet125, buffet126, buffet127, buffet128, buffet129, buffet130,
      buffet131,buffet132,buffet133,buffet134,buffet135,buffet136,buffet137
    ];
    


    return (
      <div>
        <div className="d-flex gap-5 flex-wrap ms-5 mt-5">
          {images.map((img, index) => (
            <Card key={index} style={{ width: "16rem" }} onClick={() => handleShow(img)}>
              <Card.Img variant="top" src={img} className="mt-4" />
              <Card.Body className="card-body">
                <Button as={Link} to="/buffets"> اضغط</Button>
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
