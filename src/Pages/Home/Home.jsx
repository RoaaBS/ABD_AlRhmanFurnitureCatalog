import React from 'react'
import homepage from '../../assets/Homepage.jpeg'
import img1 from '../../assets/img1.jpeg';
import cabinets1 from '../../assets/cabinets1.jpeg';
import buffet1 from '../../assets/buffet1.jpeg'
import table20 from '../../assets/table20.jpeg'
import './Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Card,Button } from 'react-bootstrap';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import Chairs50 from '../../assets/Chairs50.jpeg'
export default function Home() {
  return (
    <div>
      <img src={homepage} className='mb-5' />
      <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={3.4}
      navigation
      breakpoints={{
        320: {
          slidesPerView: 1.3, 
        },
        768: {
          slidesPerView: 2.3, 
        },
        1024: {
          slidesPerView: 3, 
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>   
      <Card style={{ width: '18rem' }} className='ms-5'>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>اطقم كنب</Card.Title>
        <Button className='btn' as={Link}to="/sofaT" >عرض المزيد</Button>
      </Card.Body>
    </Card></SwiperSlide>
      <SwiperSlide> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={table20} />
      <Card.Body>
        <Card.Title>طاولات</Card.Title>
        <Button className='btn'as={Link}to="/Tables" >عرض المزيد</Button>
      </Card.Body>
    </Card></SwiperSlide>
      <SwiperSlide> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Chairs50} />
      <Card.Body>
        <Card.Title>كراسي و بفات</Card.Title>
        <Button className='btn' as={Link} to="/Chairs">عرض المزيد</Button>
      </Card.Body>
    </Card></SwiperSlide>
      <SwiperSlide> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cabinets1} />
      <Card.Body>
        <Card.Title>خزائن</Card.Title>
        <Button variant="primary" as={Link}to="/AllCabinets">عرض المزيد</Button>
      </Card.Body>
    </Card></SwiperSlide> <SwiperSlide> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={buffet1} />
      <Card.Body>
        <Card.Title>بوفيه</Card.Title>
        <Button variant="primary" as={Link}to="/buffets">عرض المزيد</Button>
      </Card.Body>
    </Card></SwiperSlide>
     
    </Swiper>
    </div>
  )
}
