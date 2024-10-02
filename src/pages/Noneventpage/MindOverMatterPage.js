



import React from 'react';
import './LogoHuntPage.css'; // Import the CSS file for styling
import Footer from '../../components/Footer';
import great from "./great.png";
import { Link } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import mindovermatter from '../../team/Non-tech-poster/mindovermatter.jpg';


const handleClick = () => {
  window.open(' https://rb.gy/67h4ro', '_blank', 'noopener,noreferrer');
};
const MindOverMatterPage = () => {
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
        <h1>Mind Over Matter</h1>
        <div className="logo-hunt-content">
          <div className="logo-hunt-image">
            <img
              src={mindovermatter}
              alt="Mind Over Matter"
            />
            <button className="register-button" onClick={handleClick} >
              Register for Event
            </button>
          </div>
          <div className="logo-hunt-details">
            <h3 className='logo3'>Description</h3>
            <p>
              Event Name: Mind Over Matter
            </p>
            <p>
              Event Date: 20 September
            </p>
            <p>
              Event Time: 11:00 AM - 2:00 PM
            </p>
            <p>
              Venue: K 201
            </p>
            <p>
              Registration Fee: ₹20
            </p>
            <p>
              Prize: Cash Prize
            </p>
            <p>
              Number of Rounds: 1
            </p>
          

            <h3 className='logo3'>Rules</h3>
            <ul>
              <li>"Mind Over Matter" is a game that combines mental challenges with physical tasks, testing participants' knowledge, quick thinking, and physical endurance. Here are some rules to ensure the game is fair, engaging, and safe:
              </li>
              <li>Participants can compete as individuals.</li>
              <li>On-the-spot registration is available.</li>
              <li>The panel's decision will be final.</li>
            </ul>

            <h3 className='logo3'>Event Coordinators</h3>
            <ul>
              <li>Milap Gohil - 9429914065</li>
              <li>Renish Dhaduk - 79901 87323</li>
            </ul> 
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default MindOverMatterPage;