

import React from 'react';
import './LogoHuntPage.css'; // Import the CSS file for styling
import Footer from '../../components/Footer';
import great from "./great.png";
import { Link } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import blind from '../../team/Non-tech-poster/blind.jpg';


const handleClick = () => {
  window.open('https://rb.gy/8t8t9c', '_blank', 'noopener,noreferrer');
};
const BlindNavigatorPage = () => {
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
        <h1>Blind Navigator</h1>
        <div className="logo-hunt-content">
          <div className="logo-hunt-image">
            <img
              src={blind}
              alt="Blind Navigator"
            />
            <button className="register-button" onClick={handleClick} >
              Register for Event
            </button>
          </div>
          <div className="logo-hunt-details">
            <h3 className='logo3'>Description</h3>
            <p>
              Event Name: Blind Navigator
            </p>
            <p>
              Event Date: 20 & 21 September
            </p>
            <p>
              Event Time: Round 1 - 11 AM, Round 2 - 2 to 4 PM
            </p>
            <p>
              Venue: J 201
            </p>
            <p>
              Registration Fee: ₹40
            </p>
            <p>
              Prize: None
            </p>
            <p>
              Number of player: 2
            </p>
           

            <h3 className='logo3'>General Rules</h3>
            <ul>
              <li>Participation is only for duet teams.</li>
              <li>The Collector must find and collect as many boxes as possible within the time limit.</li>
              <li>Before starting the game, players must "Reversal Role".</li>
              <li>Collector: The blind player who will search for and collect boxes, guided solely by the Guide's instructions.</li>
              <li>Guide: The sighted player who will give verbal directions to the Collector from outside the play area.</li>
              <li>Upon collecting a box, the Collector should be informed by the Guide, who will then direct them to the next box.</li>
              <li>Time Limit: The game is played within a set time limit, such as 90 seconds.</li>
              <li>Total score is the sum of all boxes collected.</li>
              <li>If the Collector touches or crosses the "RED LINE", their score will be reduced by [specific number of points, e.g., 10 points].</li>
              <li>In case of a tie, a tiebreaker round or a sudden-death scenario may be used.</li>
            </ul>

            <h3 className='logo3'>Event Coordinators</h3>
            <ul>
              <li>Sujal Parmar - 9316064787</li>
              <li>Nupur Athaviya - 88493 37789</li>
            </ul> 
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default BlindNavigatorPage;