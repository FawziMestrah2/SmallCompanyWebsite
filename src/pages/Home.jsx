import React from 'react'
import { Element } from 'react-scroll'
import Carousel from '../components/Carousel'
import Services from '../components/Services'
import AboutUs from '../components/AboutUs'
import ContactUs from '../components/ContactUs'
import '../styles/home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Carousel />
      <Element name='services'>
        <Services />
      </Element>
      <Element name='aboutUs'>
        <AboutUs />
      </Element>
      <Element name='contactUs'>
        <ContactUs />
      </Element>
    </div>
  )
}

export default Home