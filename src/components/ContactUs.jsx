// ContactForm.js
import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import '../styles/contactus.scss';

const ContactForm = () => {
  AOS.init();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic here to handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact" data-aos="zoom-out" data-aos-delay="500" data-aos-once="true">
      <div className='contact-form'>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor='message'>Message:</label>
        <textarea
          id='message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          rows='4'
          required
        />

        <button type='submit'>Submit</button>
      </form>
      </div>
    </div>
  );
};

export default ContactForm;
