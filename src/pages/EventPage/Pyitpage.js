import React from 'react';
import './LogoHuntPage.css'; // Import the CSS file for styling
import Footer from '../../components/Footer';
import great from "./great.png";
import { Link,useNavigate  } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import Pyit from '../../team/Tech-poster/a4pyit.jpg';

const Pyitpage = () => {
  const navigate = useNavigate();

  const handleButtonClick = (event) => {
    navigate('/register', { state: { event } });
  };

    return (
      <>    
      <ScrollToTop/>
       <div className="teams-section">
          <div className='lin'>
            <h1><Link to="/" >Home</Link></h1>
            <img src={great} className='symb' alt='Converse2k24'/>
            <h1><Link to="/events" >Events</Link></h1>
            <img src={great} className='symb' alt='Converse2k24'/>
            <h1><Link to="/tech-event" >Tech</Link></h1>
          </div>
      </div>            
      <div className="logo-hunt-page">
        <h1>PY-IT</h1>
        <div className="logo-hunt-content">
        <div className="logo-hunt-image">
              <img
                src={Pyit}
                alt="PY-IT "
              />
              <button className="register-button" onClick={() => handleButtonClick('PY-IT')}>
              Register for Event
            </button>
            </div>
          <div className="logo-hunt-details">
            <h3 className='logo3'>Description</h3>
            <p>Event Name: PY-IT</p>
            <p>Date: 20 September 2024</p>
            <p>Time: 10:00 AM - 10:45 AM</p>
            <p>Event Time Duration: 45 Minutes</p>
            <p>Number of Rounds: 3</p>
  
            <h3 className='logo3'>Rules:</h3>
            <ul>
              <li>Any students (from any branch/any semester) can take part individually.</li>
              <li>Final winners will be declared based on performance in round 3.</li>
              <li>Round 1: Aptitude Test (45 minutes)</li>
              <li>Round 2: Group Discussion (30 minutes)</li>
              <li>Round 3: Personal Interview (60 minutes)</li>
              <li>Participants must bring their resumes for round 3.</li>
            </ul>

            <h3 className='logo3'>Faculty Coordinator</h3>
            <ul>
              <li>
              <p>Prof. Mukesh Patel</p>

              </li>
 
<p>Prof. Vivaksha Jariwala</p>
<li></li>           </ul>
  
            <h3 className='logo3'>Event Heads</h3>
            <ul>
              <li>KRUTI KIKANI - +91 87807 53117</li>
              <li>SHRUTI KAKADIYA - +91 85300 58300</li>
            </ul>
  
            <h3 className='logo3'>Volunteers</h3>
            <ul>
              <li>TISHA CHAUHAN </li>
              <li>DHRUVIT KUVADIYA  </li>
              <li>PRIYA LATHIYA  </li>
              <li>GRANTH SAVALIYA </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
      </>
    );
  };

export default Pyitpage;
