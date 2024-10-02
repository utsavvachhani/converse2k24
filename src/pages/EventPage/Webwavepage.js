import React from 'react';
import './LogoHuntPage.css'; // Import the CSS file for styling
import Footer from '../../components/Footer';
import great from "./great.png";
import { Link,useNavigate  } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import Webwave from '../../team/Tech-poster/a4webwave.jpg';

const Webwavepage = () => {
  const navigate = useNavigate();

  const handleButtonClick = (event) => {
    navigate('/register', { state: { event } });
  };

    return (
      <>
        <ScrollToTop />
        <div className="teams-section">
          <div className='lin'>
            <h1><Link to="/">Home</Link></h1>
            <img src={great} className='symb' />
            <h1><Link to="/events">Events</Link></h1>
            <img src={great} className='symb' />
            <h1><Link to="/tech-event">Tech</Link></h1>
          </div>
        </div>
        <div className="logo-hunt-page"> {/* Keeping the same class name */}
          <h1>Web Wave</h1>
          <div className="logo-hunt-content">
            <div className="logo-hunt-image">
              <img
                src={Webwave}
                alt="Web Wave"
              />
              <button className="register-button" onClick={() => handleButtonClick('WEB WAVE')}>
              Register for Event
            </button>
            </div>
            <div className="logo-hunt-details"> {/* Keeping the same class name */}
              <h3 className='logo3'>Description</h3>
              <p>Event Name: Web Wave</p>
              <p>Number of Rounds: 1</p>
  
              <h3 className='logo3'>Date & Time</h3>
              <p>Friday, 20th September 2024</p>
              <p>03:00 PM to 04:15 PM (Lab-4, 5)</p>
  

<p>The event is open to students, professionals, or anyone with an interest in web development and design, depending on the target audience.

<p>~Participants can register individually.</p>
<p>~Registration may be done online before the event or on the spot, depending on the event's structure.</p>
<p>~Participants will develop a functional web application or website within a specified time frame.</p>
<p>
~Focus on the user interface and user experience aspects of web design.
  
  </p>~All work submitted must be original. Plagiarism or use of pre-built templates without customization will result in disqualification.</p>

              <h3 className='logo3'>Rules:</h3>
              <ul>
                <li>Individual participation</li>
                <li>Webpage must adhere to the given theme</li>
                <li>Content must be original</li>
                <li>No plagiarized content is allowed</li>
                <li>Focus on UI/UX</li>
                <li>Visually appealing design with good colors, fonts, and layout</li>
              </ul>

              <h3 class="logo3">Faculty Coordinator</h3>
              <ul>
<li>Prof.Mitul Patel</li>
<li>Prof.Vivek Chapaneria</li>
</ul>
  
              <h3 className='logo3'>Event Heads</h3>
              <ul>
                <li>Preet Mehta - +91 8155832265</li>
                <li>Tanvi Vaghasiya - +91 9979971870</li>
              </ul>
  
              <h3 className='logo3'>Volunteers</h3>
              <ul>
                <li>Milap Gohil</li>
                <li>Renish Dhaduk</li>
                <li>Dhruv Italia</li>
                <li>Prince Viradiya</li>
                <li>Krishna Shethna</li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  };

export default Webwavepage;
