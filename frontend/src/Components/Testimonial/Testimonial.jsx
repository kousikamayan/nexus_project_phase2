import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import testimonial1 from '../../assets/images/testimonial-1.jpg';
import testimonial2 from '../../assets/images/testimonial-2.jpg';
import testimonial3 from '../../assets/images/testimonial-3.jpg';
import testimonial4 from '../../assets/images/testimonial-4.jpg';

import './Testimonial.css';

const testimonials = [
  {
    quote: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    name: "Saul Goodman",
    title: "Ceo & Founder",
    image: testimonial2
  },
  {
    quote: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    name: "Sara Wilsson",
    title: "Designer",
    image: testimonial1
  },
  {
    quote: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    name: "Jena Karlis",
    title: "Store Owner",
    image: testimonial3
  },
  {
    quote: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    name: "Ms Mike",
    title: "Store Owner",
    image: testimonial4
  }
];

function Testimonial() {
  return (
    <div className='testimonials container-xxl py-5 wow fadeInUp'>
      <div className="container">
        <div className='section-title'>
          <h2 className=''>Testimonial</h2>
          <h3 style={{}}>What they're saying about us</h3>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item ff-secondary" >
                <p className=''>
                  <i className='bi bi-quote quote-icon-left mb-3'></i>
                  {testimonial.quote}
               
                </p>
                <img src={testimonial.image} alt={testimonial.name} />
                <h3 className='' style={{color:"#9BEC00"}}>{testimonial.name}</h3>
                <h5 className=''>{testimonial.title}</h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonial;
