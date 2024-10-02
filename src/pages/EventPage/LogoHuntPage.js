import React from 'react';
import './LogoHuntPage.css'; // Import the CSS file for styling
import Footer from '../../components/Footer';
import great from "./great.png";
import { Link,useNavigate  } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import Logohunt from '../../team/Tech-poster/a4logohunt.jpg';



const LogoHuntPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = (event) => {
    navigate('/registerteam', { state: { event } });
  };

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
                        <Link to="/tech-event" >Tech </Link>
                    </h1>
                </div>
    </div>            
    <div className="logo-hunt-page">
      <h1>Logo Hunt</h1>
      <div className="logo-hunt-content">
        <div className="logo-hunt-image">
          <img
            src={Logohunt}
            alt="Logo Hunt"
          />
            <button className="register-button" onClick={() => handleButtonClick('LOGO HUNT')}>
              Register for Event
            </button>
        </div>
        
        <div className="logo-hunt-details">
          <h3 className='logo3'>Description</h3>
          <p>
            Event Name: Logo Hunt
          </p>
          <p>
            Date: 21 September
          </p>
          <p>
            Time 9:00 AM - 10:00 AM
          </p>
          <p>
            Event Time Duration: 1 Hour
          </p>
          <p>
            Number of Rounds: 1
          </p>
          {/* <p>
            <strong>Time Duration of each round:</strong> 30 minutes
          </p> */}
          <h3 className='logo3'>Rules:</h3>
          <ul>
            <li>Individual Participation / Pair of 2 Student,</li>
            <li>Any brand/company/product logos will be given,</li>
            <li>Bring your own pen with you and paper will be given,</li>
            <li>Mobile Phones are strictly prohibited.</li>
          </ul>
          <h3 className='logo3'>Faculty Coordinators</h3>
          <ul>
            <li>Prof. Bhumika Patel</li>
            <li>Prof. Palak Desai</li>
          </ul>
          <h3 className='logo3'>Event Heads</h3>
          <ul>
            <li>Tilak Viradiya - +91 82381 69574</li>
            <li>Dhara Bhakhar - +91 88490 81919</li>
           
          </ul>
          <h3 className='logo3'>Event Volunteers</h3>
          <ul>
            <li>Parth Kachariya</li>
            <li>Shrey Dhola</li>
            <li>Manan Chovatiya</li>
            <li>Shasang Thummar</li>
            <li>Parth Rana</li>
          </ul>
        </div>
      </div>
    </div>
    <Footer/>
    </>

  );
};

export default LogoHuntPage;
