import React from 'react';
import './LogoHuntPage.css'; // Import the CSS file for styling
import Footer from '../../components/Footer';
import great from './great.png';
import { Link, useNavigate } from 'react-router-dom';
import ScrollToTop from '../../components/ScrollToTop';
import Itquiz from '../../team/Tech-poster/a4itquiz.jpg';

const Itquizpage = () => {
  // Changed function name to ITQuizPage
  const navigate = useNavigate();

  const handleButtonClick = (event) => {
    navigate('/register', { state: { event } });
  };

  return (
    <>
      <ScrollToTop />
      <div className='teams-section'>
        <div className='lin'>
          <h1>
            <Link to='/'>Home</Link>
          </h1>
          <img src={great} className='symb' alt='Converse2k24' />
          <h1>
            <Link to='/events'>Events</Link>
          </h1>
          <img src={great} className='symb' alt='Converse2k24' />
          <h1>
            <Link to='/tech-event'>Tech</Link>
          </h1>
        </div>
      </div>
      <div className='logo-hunt-page'>
        <h1>IT Quiz</h1>
        <div className='logo-hunt-content'>
          <div className='logo-hunt-image'>
            <img src={Itquiz} alt='IT Quiz' />
            <button
              className='register-button'
              onClick={() => handleButtonClick('IT QUIZ')}
            >
              Register for Event
            </button>
          </div>
          <div className='logo-hunt-details'>
            <h3 className='logo3'>Description</h3>
            <p>Event Name: IT Quiz</p>
            <p>Date: 21 September</p>
            <p>Time: 11:00 AM - 12:00 PM</p>
            <p>Event Duration: 1 Hour</p>
            <p>Number of Questions: 40</p>
            <p>Time Limit: 30 Minutes</p>
            <p>
              <strong>Venue: Room A-101</strong>
            </p>
            <h3 className='logo3'>Rules:</h3>
            <ul>
              <li>Individual Participation</li>
              <li>Mobile phones are strictly prohibited</li>
              <li>Single round</li>
            </ul>
            <h3 class="logo3">Faculty Coordinator</h3>
<p>Dr. Mita Parikh</p>
<p>Prof. Tushar Gohil</p>
<p>Prof. Ashish Kharvar</p>
            <h3 className='logo3'>Event Heads</h3>
            <ul>
              <li>Tisha Chokshi - +91 96645 71921</li>
              <li>Preshtha Bodar - +91 91734 33190</li>
              <li>Hitakshi Dholakiya - +91 98247 46058</li>
            </ul>
            <h3 className='logo3'>Event Volunteers</h3>
            <ul>
              <li>Rusheel Dhandhalya</li>
              <li>Shlok Sutariya</li>
              <li>Krishna Dabhi</li>

              <li>Tanisha Agarwal</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Itquizpage;
