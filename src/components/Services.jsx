import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

import '../styles/services.scss'
import Paper_Cub from '../assets/paper-cup.png';
import Grocery_Bag from '../assets/grocery-bag.png';
import Food_Container from '../assets/food-container.png';
import Electronic_Container from '../assets/electronic-container.png';

const Services = () => {
  AOS.init();

  return (
    <div className='services-section'>
      <div className='service-subhead' data-aos='fade-up' data-aos-delay='200' data-aos-once="true">
        What We Provide?
      </div>
      <div className='service-head' data-aos='fade-up' data-aos-delay='300' data-aos-once="true">
        Our Service
      </div>
      <div className='services-container' data-aos='fade-up' data-aos-delay='400' data-aos-once="true">
        <div className='service'>
          <div className='service-icon'><img src={Paper_Cub} alt='Paper Cubs' /></div>
          <div className='service-title'>Paper Cubs</div>
          <div className='service-description'>Eco-friendly disposable paper cups for various purposes.</div>
          <div className='read-more-link'>
            <div className='arrow'><FaArrowRight /></div>
            <button className='read-bttn'>Read More</button>
          </div>
        </div>
        <div className='service'>
          <div className='service-icon'><img src={Grocery_Bag} alt='Grocery Bag' /></div>
          <div className='service-title'>Grocery Bags</div>
          <div className='service-description'>Reusable and sturdy grocery bags made from sustainable materials.</div>
          <div className='read-more-link'>
            <div className='arrow'><FaArrowRight /></div>
            <button className='read-bttn'>Read More</button>
          </div>
        </div>
        <div className='service'>
          <div className='service-icon'><img src={Food_Container} alt='Food Container' /></div>
          <div className='service-title'>Food Container</div>
          <div className='service-description'>Containers suitable for packaging and storing various food items.</div>
          <div className='read-more-link'>
            <div className='arrow'><FaArrowRight /></div>
            <button className='read-bttn'>Read More</button>
          </div>
        </div>
        <div className='service'>
          <div className='service-icon'><img src={Electronic_Container} alt='Electronic Container' /></div>
          <div className='service-title'>Electronic Container</div>
          <div className='service-description'>Specialized containers for safe storage and transportation of electronic components.</div>
          <div className='read-more-link'>
            <div className='arrow'><FaArrowRight /></div>
            <button className='read-bttn'>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
