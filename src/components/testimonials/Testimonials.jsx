import React from 'react'

import {Pagination } from 'swiper';
import { Swiper,SwiperSlide } from "swiper/react";
import AV1 from "../../assets/avatar1.jpg";
import AV2 from "../../assets/avatar2.jpg";
import AV3 from "../../assets/avatar3.jpg";
import AV4 from "../../assets/avatar4.jpg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./testimonials.css"


export const Testimonials = () => {
  return (
    <section id='testimonial'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable:true}}>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AV1} alt="Avatar One" />
          </div>
          <h5 className="client__name">Ernest Achiver</h5>
          <small className="client__review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia quibusdam deserunt, consequuntur dignissimos omnis vitae id neque beatae sint, optio excepturi quos ad assumenda dolorum deleniti amet nemo, consequatur temporibus.
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AV2} alt="Avatar One" />
          </div>
          <h5 className="client__name">Ernest Achiver</h5>
          <small className="client__review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia quibusdam deserunt, consequuntur dignissimos omnis vitae id neque beatae sint, optio excepturi quos ad assumenda dolorum deleniti amet nemo, consequatur temporibus.</small>

        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AV3} alt="Avatar One" />
          </div>
          <p>This is working.</p>
          <h5 className="client__name">Ernest Achiver</h5>
          <small className="client__review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia quibusdam deserunt, consequuntur dignissimos omnis vitae id neque beatae sint, optio excepturi quos ad assumenda dolorum deleniti amet nemo, consequatur temporibus
          </small>

        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AV4} alt="Avatar One" />
          </div>
          <h5 className="client__name">Ernest Achiver</h5>
          <small className="client__review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia quibusdam deserunt, consequuntur dignissimos omnis vitae id neque beatae sint, optio excepturi quos ad assumenda dolorum deleniti amet nemo, consequatur temporibus.</small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
