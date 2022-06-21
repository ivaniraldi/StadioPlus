import React from 'react'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero'
import Lanzamientos from '../Lanzamientos/Lanzamientos'
import NavBar from '../NavBar/NavBar'
import Sponsor from '../Sponsor/Sponsor'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Hero2 from '../Hero/Hero2'
import Banner2 from '../Banner/Banner2'
import Lanzamientos2 from '../Lanzamientos/Lanzamientos2'

export default function Home() {
  SwiperCore.use([Navigation, Autoplay, Pagination]);
  return (
    <div>

      <div className='hidden sm:contents'>

        <NavBar />
        <Swiper
          id='swiper'
          spaceBetween={0}
          slidesPerView={1}
          loop={true} >
          <SwiperSlide key="1">
            <Hero2 />
          </SwiperSlide>
          <SwiperSlide>
            <Hero />
          </SwiperSlide>
        </Swiper>
        <Swiper
          id='swiper'
          spaceBetween={0}
          slidesPerView={1}
          loop={true} >
          <SwiperSlide key="1">
            <Lanzamientos />
          </SwiperSlide>
          <SwiperSlide>
            <Lanzamientos2 />
          </SwiperSlide>
        </Swiper>
        <Swiper
          id='swiper'
          spaceBetween={0}
          slidesPerView={1}
          loop={true}>
          <SwiperSlide key="1">
            <Banner />
          </SwiperSlide>
          <SwiperSlide>
            <Banner2 />
          </SwiperSlide>
        </Swiper>
        <Sponsor />
        <Footer />
      </div>

      <div className='contents sm:hidden'>
       <NavBar />
        <Hero/> 
            <Lanzamientos2 />
            <Banner />
          <Banner2 />
        <Sponsor />
        <Footer />
      </div>



    </div>
  )
}
