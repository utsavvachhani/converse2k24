import React from 'react';
import { Link,useLocation, useNavigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import great from "./great.png";
import './pages/registration/Thankyou.css';

const Thankyou = () => {
  
  const location = useLocation();
  // const navigate = useNavigate();
  const { formData } = location.state || {};

  // const closeModal = () => {
  //   navigate('/'); // Redirect to the home page
  // };

  const getWhatsAppLink = (event) => {
    switch (event) {
      case 'IT QUIZ':
        return 'https://chat.whatsapp.com/JU2CzIhEwrW1N8EoiVjmYg';
      case 'LOGO HUNT':
        return 'https://chat.whatsapp.com/GIVpwyJiwE3BTDSgOxDqVv';
      case 'BUG BUZZ':
        return 'https://chat.whatsapp.com/JlrNy0MdGsS3IW6Kv6tvez';
      case 'CODATHON':
        return 'https://chat.whatsapp.com/EQCrvH0WRz66Mh37ZojVRg';
      case 'PY-IT':
        return 'https://chat.whatsapp.com/CjY6DkwcLjA2rrzvF6YF3I';
      case 'AI MEMES':
        return 'https://chat.whatsapp.com/CtteoVeNCPv67LAaKA8qD1';
      case 'TECH DEBATE':
        return 'https://chat.whatsapp.com/GZ9ZwGfAhtX18nIB1mzj0i';
      case 'CYBER SIEGE':
        return 'https://chat.whatsapp.com/IC9gPTmo0Ud2z54dHfWbvD';
      case 'WEB WAVE':
        return 'https://chat.whatsapp.com/I17xYhBBNXnHzqx8MRDINF';
      default:
        return 'https://chat.whatsapp.com/JU2CzIhEwrW1N8EoiVjmYg';
    }
  };

  return (
    <>
    <ScrollToTop/>
    <div className="teams-section">
                  <div className='lin'>
                      <h1>
                          <Link to="/" >Home</Link>
                      </h1>
                      <img src={great} className='symb' alt='Converse2k24'/>
                      <h1>
                          <Link to="/events" >Events</Link>
                      </h1>
                      <img src={great} className='symb' alt='Converse2k24'/>
                      <h1>
                          <Link to="/tech-event" >Tech </Link>
                      </h1>
                  </div>
      </div>  
      <div className="thankyou-body">
        <div className="container-thankyou">
          <h2>Thank You for Registering!</h2>
          <p className="con-text">We appreciate your interest in participating in the tech competition at Converse 2K24.</p>
      
          <div className="info-box">
            <h3>Join Our WhatsApp Group for Updates</h3>
            <p className="info-text">Stay updated with the latest news, schedules, and announcements by joining our WhatsApp group.</p>
            {formData?.event && (
              <a href={getWhatsAppLink(formData.event)} className="join-link" target="_blank" rel="noopener noreferrer">
                Join WhatsApp Group
              </a>
            )}
          </div>
        </div>
      </div>
    <Footer/>

    </>
  );
};

export default Thankyou;