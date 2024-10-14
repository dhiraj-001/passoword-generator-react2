import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope, faLocation, faLocationDot, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
  return (
    <div className="footer">
      <div className="container1">
        <div className="ct-p1">
           Created by <br>
           </br> Dhiraj
        </div>
        <div className="ct-p2">
          <div className="location">
            <FontAwesomeIcon icon={faEnvelope} /><a href="mailto:gogoidhiraj207@gmail.com">
             <p>gogoidhiraj207@gmail.com</p>              
            </a>
          </div>
          <div className="location">
            <FontAwesomeIcon icon={faLocationDot} />
             <p>India, Assam </p>
          </div>
              </div>

             
      </div>
      <div className="line"></div>
      <div className="container2">
        <div className="icons">
          
        <p className="icon"><a href="https://github.com/dhiraj-001" target='blank'>
          <FontAwesomeIcon icon={faGithub}/>
        </a>
        </p>
          
        <p className="icon"><a href="https://www.instagram.com/dhi_raj__001" target='blank'>
          <FontAwesomeIcon icon={faInstagram}/>
        </a>

        </p>
        <p className="icon"><a href="https://www.linkedin.com/in/dhiraj-gogoi-330008274/" target='blank'>
        <FontAwesomeIcon icon={faLinkedin}/>
        </a>
        </p>

        <p className="icon"><a href="">
              <FontAwesomeIcon icon={faWhatsapp}/>
        </a>
        </p>
        </div>
        <div className='copyright'>
        <p>&copy; 2024 Dhiraj Gogoi</p>
      </div>
      </div>
      
    </div>
  );
};

export default Footer;