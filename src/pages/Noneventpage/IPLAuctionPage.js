

import React from 'react';
import './LogoHuntPage.css'; // Import the CSS file for styling
import Footer from '../../components/Footer';
import great from "./great.png";
import { Link } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import ipl from '../../team/Non-tech-poster/iplauction.jpg';


const handleClick = () => {
  window.open('https://rb.gy/ig8n0m', '_blank', 'noopener,noreferrer');
};
const IPLAuctionPage = () => {
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
        <h1>IPL Auction</h1>
        <div className="logo-hunt-content">
          <div className="logo-hunt-image">
            <img
              src={ipl}
              alt="IPL Auction"
            />
            <button className="register-button" onClick={handleClick}>
              Register for Event
            </button>
          </div>
          <div className="logo-hunt-details">
            <h3 className='logo3'>Description</h3>
            <p>
              Event Name: IPL Auction
            </p>
            <p>
              Event Date: 20 & 21 September
            </p>
            <p>
              Event Time: 2:00 PM - 4:00 PM
            </p>
            <p>
              Venue: J 202
            </p>
            <p>
              Registration Fee: ₹40
            </p>
            <p>
              Prize: Cash Prize
            </p>
            <p>
              Number of Rounds: 2
            </p>
            <p>
              Participation: Team of 4
            </p>
           

            <h3 className='logo3'>Rules</h3>
            <ul>
              <li>Each team must include one Wicketkeeper, Batsman, Bowler, and All-Rounder.</li>
              <li>Each team is given 1,00,000 credits.</li>
              <li>The winning team will be decided based on the past IPL performance of their players.</li>
              <li>One registered team will consist of 4 members.</li>
            </ul>

            <h3 className='logo3'>Event Coordinators</h3>
            <ul>
              <li>Aanand Palan - 8460395732</li>
              <li>Bhautik Gauswami - 81414 15113</li>
              <li>Swarg Patel - 97266 51206</li>
            </ul> 
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default IPLAuctionPage;