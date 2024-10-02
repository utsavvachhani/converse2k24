

import React from 'react';
import './LogoHuntPage.css'; // Import the CSS file for styling
import Footer from '../../components/Footer';
import great from "./great.png";
import { Link } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import music from '../../team/Non-tech-poster/music.jpg';


const handleClick = () => {
  window.open('https://forms.gle/RySAaykYp1aN1pZH7', '_blank', 'noopener,noreferrer');
};
const MusicalMysteryPage = () => {
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
        <h1>Musical Mystery</h1>
        <div className="logo-hunt-content">
          <div className="logo-hunt-image">
            <img
              src={music}
              alt="Musical Mystery"
            />
            <button className="register-button" onClick={handleClick} >
              Register for Event
            </button>
          </div>
          <div className="logo-hunt-details">
            <h3 className='logo3'>Description</h3>
            <p>
              Event Name: Musical Mystery
            </p>
            <p>
              Event Date: 20 September
            </p>
            <p>
              Event Time: 11:00 AM - 2:00 PM
            </p>
            <p>
              Venue: G 201
            </p>
            <p>
              Registration Fee: ₹20
            </p>
            <p>
              Prize: ₹100
            </p>
            <p>
              Number of Rounds: 2
            </p>
            <p>
              Participation: Team of 2
            </p>

            <h3 className='logo3'>Rules</h3>
            <ul>
              <li>Rounds: The event will consist of 2 rounds.</li>
              <li>Song Clips: Clips will be played for a specific duration. Participants must guess the song title and artist.</li>
              <li>Scoring:
                <ul>
                  <li>2 points for correctly guessing both the song title and artist.</li>
                  <li>1 point for correctly guessing either the song title or artist.</li>
                  <li>No points for incorrect guesses.</li>
                </ul>
              </li>
              <li>Time Limit: Limited time to guess each song.</li>
              <li>Tiebreakers: A sudden death round will be played in case of a tie.</li>
              <li>Cheating is strictly prohibited. Participants caught cheating will be disqualified.</li>
              <li>Organizers' decisions regarding the rules and scoring will be final.</li>
            </ul>

            <h3 className='logo3'>Event Coordinators</h3>
            <ul>
              <li>Meet Ghelani - +91 84014 77345</li>
              <li>Keyur Patel - +91 99247 66803</li>
            </ul> 
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default MusicalMysteryPage;