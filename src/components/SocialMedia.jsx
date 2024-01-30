// SocialMediaIcons.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const SocialMediaIcons = () => {
    return (
        <div  className='social-media-icons'>
            {/* Your existing content */}
            
            {/* WhatsApp */}
            <a href="https://wa.me/009647865146668" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} size="6x" />
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/your_instagram_username/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="6x" />
            </a>

            {/* Facebook */}
            <a href="https://www.facebook.com/your_facebook_page/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="6x" />
            </a>
        </div>
    );
};

export default SocialMediaIcons;
