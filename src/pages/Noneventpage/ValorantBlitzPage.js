

import React from 'react';
import './LogoHuntPage.css'; // Import the CSS file for styling
import Footer from '../../components/Footer';
import great from "./great.png";
import { Link } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import valorant from '../../team/Non-tech-poster/valorant.jpg';



  const handleClick = () => {
    window.open('https://forms.gle/rST6WQWQWNtSx4aZ9', '_blank', 'noopener,noreferrer');
  };

const ValorantBlitzPage = () => {
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
        <h1>Valorant Blitz</h1>
        <div className="logo-hunt-content">
          <div className="logo-hunt-image">
            <img
              src={valorant}
              alt="Valorant Blitz"
            />
            <button className="register-button" onClick={handleClick} >
              Register for Event
            </button>
          </div>
          <div className="logo-hunt-details">
            <h3 className='logo3'>Description</h3>
            <p>
              Event Name: Valorant Blitz
            </p>
            <p>
              Event Date: 16 to 21 September
            </p>
            <p>
              Event Time: Announced in Group
            </p>
            <p>
              Venue: Online
            </p>
            <p>
              Registration Fee: ₹100
            </p>
            <p>
              Prize: Cash Prize
            </p>
            <p>
              Number of players: 5
            </p>
           
            <h3 className='logo3'>General Rules</h3>
            <ul>
              <li>Teams must consist of 5 players.</li>
              <li>Participants must provide their own gaming equipment (PC, keyboard, mouse, headset).</li>
              <li>All participants must adhere to the spirit of fair play and sportsmanship.</li>
            </ul>

            <h3 className='logo3'>Match Format</h3>
            <ul>
              <li>Mode: Competitive mode will be used.</li>
              <li>Maps: The maps will be selected randomly.</li>
              <li>Rounds: The first team to reach 13 rounds wins the match.</li>
              <li>Overtime: If the score is tied at 12-12, overtime rounds will be played until one team reaches 14 points.</li>
            </ul>

            <h3 className='logo3'>Rules for Gameplay</h3>
            <ul>
              <li>Intentional Feeding: Players who intentionally feed the enemy team will be disqualified.</li>
              <li>Cheating: Any form of cheating, including using hacks or exploits, will result in disqualification.</li>
            </ul>

            <h3 className='logo3'>Tournament Structure</h3>
            <ul>
              <li>Knockout Format: All matches will be in a single-elimination knockout format.</li>
            </ul>

            <h3 className='logo3'>Event Coordinators</h3>
            <ul>
              <li>Nihar Ghoghari - 8128438501</li>
              <li>Keyur Moradiya - 9825340963</li>
            </ul> 
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ValorantBlitzPage;