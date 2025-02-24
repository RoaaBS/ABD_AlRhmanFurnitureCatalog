import { React, useState } from 'react';
import { Card, Modal,Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

// Import all images
import Chairs1 from '../../assets/Chairs1.jpeg';
import Chairs2 from '../../assets/Chairs2.jpeg';
import Chairs3 from '../../assets/Chairs3.jpeg';
import Chairs4 from '../../assets/Chairs4.jpeg';
import Chairs5 from '../../assets/Chairs5.jpeg';
import Chairs6 from '../../assets/Chairs6.jpeg';
import Chairs7 from '../../assets/Chairs7.jpeg';
import Chairs8 from '../../assets/Chairs8.jpeg';
import Chairs9 from '../../assets/Chairs9.jpeg';
import Chairs10 from '../../assets/Chairs10.jpeg';
import Chairs11 from '../../assets/Chairs11.jpeg';
import Chairs12 from '../../assets/Chairs12.jpeg';
import Chairs13 from '../../assets/Chairs13.jpeg';
import Chairs14 from '../../assets/Chairs14.jpeg';
import Chairs15 from '../../assets/Chairs15.jpeg';
import Chairs16 from '../../assets/Chairs16.jpeg';
import Chairs17 from '../../assets/Chairs17.jpeg';
import Chairs18 from '../../assets/Chairs18.jpeg';
import Chairs19 from '../../assets/Chairs19.jpeg';
import Chairs20 from '../../assets/Chairs20.jpeg';
import Chairs21 from '../../assets/Chairs21.jpeg';
import Chairs22 from '../../assets/Chairs22.jpeg';
import Chairs23 from '../../assets/Chairs23.jpeg';
import Chairs24 from '../../assets/Chairs24.jpeg';
import Chairs25 from '../../assets/Chairs25.jpeg';
import Chairs26 from '../../assets/Chairs26.jpeg';
import Chairs27 from '../../assets/Chairs27.jpeg';
import Chairs28 from '../../assets/Chairs28.jpeg';
import Chairs29 from '../../assets/Chairs29.jpeg';
import Chairs30 from '../../assets/Chairs30.jpeg';
import Chairs31 from '../../assets/Chairs31.jpeg';
import Chairs32 from '../../assets/Chairs32.jpeg';
import Chairs33 from '../../assets/Chairs33.jpeg';
import Chairs34 from '../../assets/Chairs34.jpeg';
import Chairs35 from '../../assets/Chairs35.jpeg';
import Chairs36 from '../../assets/Chairs36.jpeg';
import Chairs37 from '../../assets/Chairs37.jpeg';
import Chairs38 from '../../assets/Chairs38.jpeg';
import Chairs39 from '../../assets/Chairs39.jpeg';
import Chairs40 from '../../assets/Chairs40.jpeg';
import Chairs41 from '../../assets/Chairs41.jpeg';
import Chairs42 from '../../assets/Chairs42.jpeg';
import Chairs43 from '../../assets/Chairs43.jpeg';
import Chairs44 from '../../assets/Chairs44.jpeg';
import Chairs45 from '../../assets/Chairs45.jpeg';
import Chairs46 from '../../assets/Chairs46.jpeg';
import Chairs47 from '../../assets/Chairs47.jpeg';
import Chairs48 from '../../assets/Chairs48.jpeg';
import Chairs49 from '../../assets/Chairs49.jpeg';
import Chairs50 from '../../assets/Chairs50.jpeg';
import Chairs51 from '../../assets/Chairs51.jpeg';
import Chairs52 from '../../assets/Chairs52.jpeg';
import Chairs53 from '../../assets/Chairs53.jpeg';
import Chairs54 from '../../assets/Chairs54.jpeg';
import Chairs55 from '../../assets/Chairs55.jpeg';
import Chairs56 from '../../assets/Chairs56.jpeg';
import Chairs57 from '../../assets/Chairs57.jpeg';
import Chairs58 from '../../assets/Chairs58.jpeg';
import Chairs59 from '../../assets/Chairs59.jpeg';
import Chairs60 from '../../assets/Chairs60.jpeg';
import Chairs61 from '../../assets/Chairs61.jpeg';
import Chairs62 from '../../assets/Chairs62.jpeg';
import Chairs63 from '../../assets/Chairs63.jpeg';
import Chairs64 from '../../assets/Chairs64.jpeg';
import Chairs65 from '../../assets/Chairs65.jpeg';
import Chairs66 from '../../assets/Chairs66.jpeg';
import Chairs67 from '../../assets/Chairs67.jpeg';
import Chairs68 from '../../assets/Chairs68.jpeg';
import Chairs69 from '../../assets/Chairs69.jpeg';
import Chairs70 from '../../assets/Chairs70.jpeg';
import Chairs71 from '../../assets/Chairs71.jpeg';
import Chairs72 from '../../assets/Chairs72.jpeg';
import Chairs73 from '../../assets/Chairs73.jpeg';
import Chairs74 from '../../assets/Chairs74.jpeg';
import Chairs75 from '../../assets/Chairs75.jpeg';
import Chairs76 from '../../assets/Chairs76.jpeg';
import Chairs77 from '../../assets/Chairs77.jpeg';
import Chairs78 from '../../assets/Chairs78.jpeg';
import Chairs79 from '../../assets/Chairs79.jpeg';
import Chairs80 from '../../assets/Chairs80.jpeg';
import Chairs81 from '../../assets/Chairs81.jpeg';
import Chairs82 from '../../assets/Chairs82.jpeg';
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




const images = [
  Chairs1, Chairs2, Chairs3, Chairs4, Chairs5, Chairs6, Chairs7, Chairs8, Chairs9, Chairs10,
  Chairs11, Chairs12, Chairs13, Chairs14, Chairs15, Chairs16, Chairs17, Chairs18, Chairs19, Chairs20,
  Chairs21, Chairs22, Chairs23, Chairs24, Chairs25, Chairs26, Chairs27, Chairs28, Chairs29, Chairs30,
  Chairs31, Chairs32, Chairs33, Chairs34, Chairs35, Chairs36, Chairs37, Chairs38, Chairs39, Chairs40,
  Chairs41, Chairs42, Chairs43, Chairs44, Chairs45, Chairs46, Chairs47, Chairs48, Chairs49, Chairs50,
  Chairs51, Chairs52, Chairs53, Chairs54, Chairs55, Chairs56, Chairs57, Chairs58, Chairs59, Chairs60,
  Chairs61,Chairs62, Chairs63, Chairs64, Chairs65, Chairs66, Chairs67, Chairs68, Chairs69, Chairs70,
  Chairs71, Chairs72, Chairs73, Chairs74, Chairs75, Chairs76, Chairs77, Chairs78, Chairs79, Chairs80, Chairs81,Chairs82
  ,chairs83, chairs84, chairs85, chairs86, chairs87, chairs88, chairs89, chairs90, chairs91, chairs92, chairs93, chairs94, chairs95,
  chairs96, chairs97, chairs98, chairs99, chairs100, chairs101, chairs102, chairs103, chairs104, chairs105, chairs106, chairs107,
  chairs108, chairs109, chairs110, chairs111, chairs112, chairs113, chairs114, chairs115, chairs116, chairs117, chairs118
  
];

export default function Chairs() {
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
            <Button as={Link} to="/Chairs"> اضغط</Button>
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
