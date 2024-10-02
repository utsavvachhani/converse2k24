// AboutPage.js


import '../AboutPage.css'; 
import React from 'react';
import { Link } from "react-router-dom";
import ScrollToTop from '../components/ScrollToTop';
import great from "./great.png";
import Footer from '../components/Footer';

const AboutPage = () => {
  return (<>
  <ScrollToTop/>
    <div className='ab'>
    <div className="teams-section">
        <div className='lin'>
            <h1>
              <Link to="/" >Home</Link>
            </h1>
            <img src={great} className='symb' alt='Converse2k24'/>
             <h1>
              <Link to="/aboutpage" >About</Link>
            </h1>
            
             
        </div>
        </div>
        <div className="about-page">
      <h2 className='abhead'>Don't know about <span className="highlight">CONVERSE</span>?, here you go.</h2>

      <section className="section">
       
        <img src="https://media.tenor.com/0Ash_cvyKGAAAAAM/space-exploration.gif" alt="Converse 2K23" className="banner-image" />
        <h1 className="title">
         Step into Tomorrow at Converse 2K24 - A Fusion of Innovation and Inspiration! 🚀
         {/* 🌐 */}
        </h1><p>
        Get ready for an exciting journey into the world of technology and creativity! The Information Technology & Artificial Intelligence and Data Science departments of Sarvajanik College of Engineering and Technology are thrilled to present Converse 2K24. Mark your calendars for the 20th and 21st of September, 2024, as this event unfolds under the vibrant banner of Kshitij.
        </p>
      </section>

      <section className="section">
        <h2 className="subtitle"> A Fusion of Tech and Artistry</h2>
        <p>
        Converse 2K24 is far from your average technical festival; it's an inspiring blend of the latest in technology and limitless creativity. Featuring an impressive lineup of 10 technical and 8 non-technical events, this festival is a vibrant stage for the sharpest minds and the most inventive spirits. Immerse yourself in the realm of IT, or let your creativity shine in diverse non-technical areas like art, sports, and entrepreneurship.
        </p>
      </section>

      {/* <section className="section">
        <h2 className="subtitle">🔒 Ignite Your Passion</h2>
        <p>
        Whether you're a coding genius, a debugging expert, an aspiring entrepreneur, or just someone eager to explore new possibilities, Converse 2024 has something tailored for you. Dive into thrilling coding contests, participate in professional-level mock interviews, or pitch your innovative startup idea to a panel of experts. On the creative side, express your artistic talents through acting, video gaming, and a variety of cultural events that will captivate and inspire you.
        </p>
      </section> */}

      <section className="section">
        <h2 className="subtitle"> Why Converse 2K24?</h2>
        <p>
        Converse 2K24 isn't just a festival; it's a chance to connect with fellow enthusiasts, gain insights from industry leaders, and navigate your path into the future of technology and innovation. Mark your calendars and join us for an unforgettable experience that will leave you inspired, informed, and energized. The future is here, and it's unfolding at Converse 2K24!
        </p>
      </section>

      {/* <footer className="footer">
        <p>H.O.D : Dr. Vivaksha Jariwala</p>
      </footer> */}
    </div>
    <Footer/>
    </div>
    
    </>
  );
};

export default AboutPage;
