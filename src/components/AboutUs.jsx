import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import '../styles/aboutus.scss';
import AboutUs from '../assets/aboutus.jpg';

const AboutUsSection = () => {
  AOS.init();

  return (
    <div className='aboutus-section'>
      <div className='aboutus-container'>
        <img src={AboutUs} className='aboutus-img' alt="" data-aos='fade-right' data-aos-delay='200' data-aos-once="true" />
        <div className='aboutus-sec'>
          <div className='aboutus-subhead' data-aos='fade-left' data-aos-delay='200' data-aos-once="true">
            Why Choose Us?
          </div>
          <div className='aboutus-head' data-aos='fade-left' data-aos-delay='300' data-aos-once="true">
            Sustainable Solutions for a Better Tomorrow
          </div>
          <div className='aboutus-desc' data-aos='fade-left' data-aos-delay='400' data-aos-once="true">
            Here, our commitment lies in providing sustainable solutions through the production and sale of eco-friendly cardboard and plastic products. We are dedicated to making a positive impact on the environment by offering reliable and environmentally conscious choices for your packaging needs.
          </div>
          <div className='aboutus-reasons' data-aos='fade-left' data-aos-delay='500' data-aos-once="true">
            <div className="about">
              <div>Environmentally Friendly Materials</div>
              <div>75%</div>
            </div>
            <div className="about-bar">
              <div className="about-progress1"></div>
            </div>
            <div className="about">
              <div>Innovative Packaging Solutions</div>
              <div>70%</div>
            </div>
            <div className="about-bar">
              <div className="about-progress2"></div>
            </div>
            <div className="about">
              <div>Customer Satisfaction</div>
              <div>80%</div>
            </div>
            <div className="about-bar">
              <div className="about-progress3"></div>
            </div>
            <div className="about">
              <div>Commitment to Sustainability</div>
              <div>90%</div>
            </div>
            <div className="about-bar">
              <div className="about-progress4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
