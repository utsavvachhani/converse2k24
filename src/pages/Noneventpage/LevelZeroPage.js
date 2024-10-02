

import React from 'react';
import './LogoHuntPage.css'; // Import the CSS file for styling
import Footer from '../../components/Footer';
import great from "./great.png";
import { Link } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import levelzero from '../../team/Non-tech-poster/levelzero.png';


const handleClick = () => {
  window.open(' https://rb.gy/p9q5fc', '_blank', 'noopener,noreferrer');
};
const LevelZeroPage = () => {
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
        <h1>Level Zero</h1>
        <div className="logo-hunt-content">
          <div className="logo-hunt-image">
            <img
              src={levelzero}
              alt="Level Zero"
            />
            <button className="register-button" onClick={handleClick}>
              Register for Event
            </button>
          </div>
          <div className="logo-hunt-details">
            <h3 className='logo3'>Description</h3>
            <p>
              Event Name: Level Zero
            </p>
            <p>
              Event Date: 20 & 21 September
            </p>
            <p>
              Event Time: 11:00 AM - 2:00 PM
            </p>
            <p>
              Venue: G 203
            </p>
    
            <p>
              Registration Fee: ₹20
            </p>
            <p>
              Prize: No prize money
            </p>
            <p>
              Number of Rounds: 2
            </p>
           
            <p>
              Participation: Individual or Team
            </p>
           
            <h3 className='logo3'>First Game – Trust me not</h3>
            <p>Objective: Identify the Joker among the players and avoid being deceived.</p>
            <ul>
              <li>The game starts with a total of 10 players.</li>
              <li>Each player has a sticker on their back that displays a symbol (hearts, diamonds, clubs, or spades), but they cannot see their own symbol.</li>
              <li>The game is played over multiple rounds.</li>
              <li>At the end of each round, players must guess their own symbol. If they guess correctly, they survive; if not, they are eliminated.</li>
              <li>One player is secretly assigned the role of the Joker, whose goal is to deceive others into making wrong guesses.</li>
              <li>The last three players or those who eliminate the Joker advance to the next game.</li>
            </ul>

            <h3 className='logo3'>Second Game – Luck or no luck</h3>
            <p>Objective: Outthink the other players in a complex game of averages.</p>
            <ul>
              <li>Each player chooses a number from 0 to 100 in each round.</li>
              <li>The target number is calculated as 0.8 multiplied by the average of all chosen numbers.</li>
              <li>Player whose number is closest to the target number wins, while others lose points.</li>
              <li>The game continues over several rounds with new rules added after each elimination.</li>
            </ul>

            <h3 className='logo3'>Event Coordinators</h3>
            <ul>
              <li>Meet Vora - 9510801699 </li>
              <li>Sufiyan Ansari - 9316334174</li>
              <li>Palak Tank - 6352345997</li>
              <li>Namitha Yelugam - 9924647707</li>
            </ul> 
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default LevelZeroPage;