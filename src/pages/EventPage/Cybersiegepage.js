import React from 'react';
import './LogoHuntPage.css'; // Import the CSS file for styling
import Footer from '../../components/Footer';
import great from './great.png';
import { Link, useNavigate } from 'react-router-dom';
import ScrollToTop from '../../components/ScrollToTop';
import Cybersiege from '../../team/Tech-poster/a4cybersiege.jpg';

const Cybersiegepage = () => {
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
          <img src={great} className='symb'  alt='Converse2k24'/>
          <h1>
            <Link to='/events'>Events</Link>
          </h1>
          <img src={great} className='symb'  alt='Converse2k24'/>
          <h1>
            <Link to='/tech-event'>Tech</Link>
          </h1>
        </div>
      </div>
      <div className='logo-hunt-page'>
        {' '}
        {/* Keeping the same class name */}
        <h1>Cyber Siege</h1>
        <div className='logo-hunt-content'>
          <div className='logo-hunt-image'>
            <img src={Cybersiege} alt='Cyber Siege' />
            <button
              className='register-button'
              onClick={() => handleButtonClick('CYBER SIEGE')}
            >
              Register for Event
            </button>
          </div>
          <div className='logo-hunt-details'>
            {' '}
            {/* Keeping the same class name */}
            <h3 className='logo3'>Description</h3>
            <p>Event: Cyber Siege - Unleash Your Cybersecurity Skills!</p>
            <p>
              Welcome to Cyber Siege, the ultimate test of your cybersecurity
              prowess! This exciting event is designed to challenge and showcase
              your skills in the dynamic world of cybersecurity. Here’s a
              breakdown of the action-packed rounds awaiting you:
            </p>
            <h3 className='logo3'>Round 1: The Cyber Quiz</h3>
            <p>Format: 20 questions</p>
            <p>Duration: 20 minutes</p>
            <p>
              Details: Test your foundational knowledge with a rapid-fire quiz.
              Answer all 20 questions within the allotted time to earn your
              place in the next round.
            </p>
            <h3 className='logo3'>Round 2: The Cyber Challenge</h3>
            <p>Format: Problem-solving task</p>
            <p>
              Duration: 1 hour Details: Dive into a series of beginner friendly
              cybersecurity challenges that require keen problem-solving skills
              and creativity. Utilize any online resources at your disposal to
              crack the tasks. Performance will be evaluated based on the number
              of tasks completed and the time taken.
            </p>
            <h3 className='logo3'>Top Participants:</h3>
            <p>
              Round 1: The top 25 scorers will advance to Round 2. Round 2: From
              these 25, the top 3 will be selected based on their
              problem-solving efficiency and task completion.
            </p>
            <h3 class="logo3">Faculty Coordinator</h3>
              <ul>
<li>Dr.Ankit Khawar</li>
<li>Dr.Tushar Gohil</li>
</ul>
            <h3 className='logo3'>Event Heads</h3>
            <ul>
              <li>Malav Radia - +91 9023538442</li>
              <li>Abhishek Dhanani - +91 6354593544</li>
              <li>Diya Patel - +91 9904315296</li>
            </ul>
            <h3 className='logo3'>Volunteers</h3>
            <ul>
              <li>Rahul Soni</li>
              <li>Deep Patel</li>
              <li>Manan Chodvadiya</li>
              <li>Vishva Gohil</li>
              <li>Rishi Ginoya</li>
            </ul>
            <p>
              Gear up for a thrilling experience that tests your cybersecurity
              knowledge and skills to their fullest. Show us your expertise and
              rise to the top in Cyber Siege!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cybersiegepage;
