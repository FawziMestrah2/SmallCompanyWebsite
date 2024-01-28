import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slide1 from '../assets/slide1.jpg'
import Slide2 from '../assets/slide2.jpg'
import Slide3 from '../assets/slide3.jpg'
import Slide4 from '../assets/slide4.jpg'
import '../styles/carousel.scss'

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
    };
  
    return (
      <div className="carousel-container">
        <Slider {...settings}>
            <div className="carousel-slide">
                <img src={Slide1} alt='slide 1'/>
            </div>
            <div className="carousel-slide">
                <img src={Slide2} alt='slide 2'/>
            </div>
            <div className="carousel-slide">
                <img src={Slide3} alt='slide 3'/>
            </div>
            <div className="carousel-slide">
                <img src={Slide4} alt='slide 4'/>
            </div>
        </Slider>
      </div>
    );
  };
  
export default Carousel;