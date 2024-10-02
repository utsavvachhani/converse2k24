import React from 'react';
import './LogoHuntPage.css'; // Import the CSS file for styling
import Footer from '../../components/Footer';
import great from "./great.png";
import { Link,useNavigate  } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import Aiquiz from '../../team/Tech-poster/a4aiquiz.jpg';

const Aiquizpage = () => {
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
            <img src={great} className='symb' alt='Converse2k24' />
            <h1><Link to="/events">Events</Link></h1>
            <img src={great} className='symb' alt='Converse2k24' />
            <h1><Link to="/tech-event">Tech</Link></h1>
          </div>
        </div>
        <div className="logo-hunt-page"> {/* Keeping the same class name */}
          <h1>AI Quiz</h1>
          <div className="logo-hunt-content">
            <div className="logo-hunt-image">
              <img
                src={Aiquiz}
                alt="AI Quiz"
              />
              <button className="register-button" onClick={() => handleButtonClick('AI QUIZ')}>
              Register for Event
            </button>
            </div>
            <div className="logo-hunt-details"> {/* Keeping the same class name */}
              <h3 className='logo3'>Description</h3>
              <p>Event Name: AI Quiz</p>
              <p>Event details to be announced</p>
  
              <h3 className='logo3'>Date & Time</h3>
              <p>Friday, 20th September 2024</p>
              <p>01:30 PM to 02:15 PM (Lab-1, 2, 3)</p>

              <h3 class="logo3">Faculty Coordinator</h3>
              <ul>
<li>Prof. Mukesh Patel</li>
<li>Prof. Palak Desai</li>
</ul>
  
              <h3 className='logo3'>Event Heads</h3>
              <ul>
                <li>Jenish Barvaliya - +91 9510007247</li>
                <li>Het Rajpara - +91 9484636007</li>
              </ul>
  
              <h3 className='logo3'>Volunteers</h3>
              <ul>
                <li>Moxa Suhagiya</li>
                <li>Dhruvi Khunt</li>
                <li>Hiya Vasani</li>
                <li>Khushi Dholariya</li>
                <li>Jay Prajapati</li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  };
export default Aiquizpage;
