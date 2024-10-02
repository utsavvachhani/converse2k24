

import React from 'react';
import './LogoHuntPage.css'; // Import the CSS file for styling
import Footer from '../../components/Footer';
import great from "./great.png";
import { Link } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import tresurhunt from '../../team/Non-tech-poster/tresurhunt.jpg';


const handleClick = () => {
  window.open(' https://forms.gle/vNar5QWnBLqAo7df7', '_blank', 'noopener,noreferrer');
};
const TreasureHuntPage = () => {
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
            <Link to="/Nontech-event" >Non Tech</Link>
          </h1>
        </div>
      </div>            
      <div className="logo-hunt-page">
        <h1>Treasure Hunt</h1>
        <div className="logo-hunt-content">
          <div className="logo-hunt-image">
            <img
              src={tresurhunt}
              alt="Treasure Hunt"
            />
            <button className="register-button" onClick={handleClick}>
              Register for Event
            </button>
          </div>
          <div className="logo-hunt-details">
            <h3 className='logo3'>Description</h3>
            <p>
              Event Name: Treasure Hunt
            </p>
            <p>
              Event Date: 20 September
            </p>
            <p>
              Event Time: 11 AM - 2 PM
            </p>
            <p>
              Venue: G 202 
            </p>
            <p>
              Registration Fee: ₹25 per person
            </p>
            <p>
              Prize: Cash Prize
            </p>
            <p>
              Number of Players: Individual or Team
            </p>
          

            <h3 className='logo3'>General Rules</h3>
            <ul>
              <li>Participation is individual or in teams.</li>
              <li>Details and rules for the treasure hunt will be provided at the event.</li>
            </ul>

            <h3 className='logo3'>Event Coordinators</h3>
            <ul>
              <li>Jal Parekh - 8200860269</li>
            </ul> 
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default TreasureHuntPage;