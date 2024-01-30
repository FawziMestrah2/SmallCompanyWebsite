import React from 'react'

import Logo from '../assets/logo.png'
import '../styles/footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
    
      <div className="footer-container">
        <img src={Logo} alt='Logo'/>
        <h3>@2024</h3>
      </div>
    
    </div>
    
  )
}

export default Footer