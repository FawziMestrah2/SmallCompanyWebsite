import React, { useTransition } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

import '../styles/services.scss'
import Paper_Cub from '../assets/paper-cup.png';
import Grocery_Bag from '../assets/grocery-bag.png';
import Food_Container from '../assets/food-container.png';
import Electronic_Container from '../assets/electronic-container.png';
import data from '../Resources/ar.json';

import { useTranslation } from 'react-i18next';

const Services = () => {
  AOS.init();
  const [t,i18n] =  useTranslation("global");
  
  return (
    <div className='services-section'>
      <div className='service-subhead' data-aos='fade-up' data-aos-delay='200' data-aos-once="true"> 

        {/* What We Provide? */}
        {data["services"]["question"]}
     
 {/* <p>
 {t("services.services_question")}
  </p>     */}
      </div>
      <div className='service-head' data-aos='fade-up' data-aos-delay='300' data-aos-once="true">
        {/* Our Service */}
        {data["services"]["title"]}
      </div>
      <div className='services-container' data-aos='fade-up' data-aos-delay='400' data-aos-once="true">
        <div className='service'>
          <div className='service-icon'><img src={Paper_Cub} alt='Paper Cubs' /></div>
          <div className='service-title'>  {data["services"]["service1"]["title"]}</div>
          <div className='service-description'>{data["services"]["service1"]["text"]}</div>
          {/* <div className='read-more-link'>
            <div className='arrow'><FaArrowRight /></div>
            <button className='read-bttn'>Read More</button>
          </div> */}
        </div>
        <div className='service'>
          <div className='service-icon'><img src={Grocery_Bag} alt='Grocery Bag' /></div>
          <div className='service-title'>{data["services"]["service2"]["title"]}</div>
          <div className='service-description'>{data["services"]["service2"]["text"]}</div>
          {/* <div className='read-more-link'>
            <div className='arrow'><FaArrowRight /></div>
            <button className='read-bttn'>Read More</button>
          </div> */}
        </div>
        <div className='service'>
          <div className='service-icon'><img src={Food_Container} alt='Food Container' /></div>
          <div className='service-title'>{data["services"]["service3"]["title"]}</div>
          <div className='service-description'>{data["services"]["service3"]["text"]}</div>
          {/* <div className='read-more-link'>
            <div className='arrow'><FaArrowRight /></div>
            <button className='read-bttn'>Read More</button>
          </div> */}
        </div>
        <div className='service'>
          <div className='service-icon'><img src={Electronic_Container} alt='Electronic Container' /></div>
          <div className='service-title'>{data["services"]["service4"]["title"]}</div>
          <div className='service-description'>{data["services"]["service4"]["text"]}</div>
          {/* <div className='read-more-link'>
            <div className='arrow'><FaArrowRight /></div>
            <button className='read-bttn'>Read More</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Services;
