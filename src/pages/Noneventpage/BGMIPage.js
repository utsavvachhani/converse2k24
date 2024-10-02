

import React from 'react';
import './LogoHuntPage.css'; // Import the CSS file for styling
import Footer from '../../components/Footer';
import great from "./great.png";
import { Link } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import MilapGohil from '../../team/webwave/Webwave_Milap.png';
import bgmi from '../../team/Non-tech-poster/bgmi.jpg';


const handleClick = () => {
  window.open(' https://rb.gy/14xpo3', '_blank', 'noopener,noreferrer');
};
const BGMIPage = () => {
  return (
    <>    
      <ScrollToTop/>
      <div className="teams-section">
        <div className='lin'>
          <h1>
            <Link to="/" >Home</Link>
          </h1>
          <img src={great} className='symb'/>
          <h1>
            <Link to="/events" >Events</Link>
          </h1>
          <img src={great} className='symb'/>
          <h1>
            <Link to="/Nontech-event" >Non Tech</Link>
          </h1>
        </div>
      </div>            
      <div className="logo-hunt-page">
        <h1>BGMI Online</h1>
        <div className="logo-hunt-content">
          <div className="logo-hunt-image">
            <img
              src={bgmi}
              alt="BGMI Online"
            />
            <button className="register-button" onClick={handleClick}>
              Register for Event
            </button>
          </div>
          <div className="logo-hunt-details">
            <h3 className='logo3'>Description</h3>
            <p>
              Event Name: BGMI Online
            </p>
            <p>
              Event Date: 18 to 20 September
            </p>
            <p>
              Event Time: Announced in Group
            </p>
            <p>
              Venue: Online
            </p>
            <p>
              Registration Fee: ₹150
            </p>
            <p>
              Prize: Cash Prize
            </p>
            <p>
              Number of Rounds: 4
            </p>
           
            <h3 className='logo3'>Rules</h3>
            <ul>
              <li>Screenshots of results are compulsory.</li>
              <li>No refund if you fail to enter the room.</li>
              <li>If killed by a hacker, provide suitable recording and death cam. The video should be convincing enough to our management. Without your recording, we will not take any action.</li>
              <li>Team up and hacking will lead to disqualification.</li>
              <li>All 4 players must join the room 5 minutes in advance. Otherwise, we will not be responsible if any player is sitting in your slot.</li>
              <li>Every player's ID level must be a minimum of 30.</li>
              <li>Participants have to arrange their internet connection and power extensions or power bank.</li>
              <li>In case of any critical situation, management's decision will be final.</li>
            </ul>

            <h3 className='logo3'>Event Coordinators</h3>
            <ul>
              <li>Ravish Gandhi - 8469997278</li>
              <li>Neel Patel - 9998200666</li>
            </ul> 
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default BGMIPage;