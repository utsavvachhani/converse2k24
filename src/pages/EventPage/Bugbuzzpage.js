import React from 'react';
import './LogoHuntPage.css'; // Import the CSS file for styling
import Footer from '../../components/Footer';
import great from "./great.png";
import { Link,useNavigate  } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import Bugbuzz from '../../team/Tech-poster/a4bugbuzz.jpg';

const Bugbuzzpage = () => {
  const navigate = useNavigate();
  
  const handleButtonClick = (event) => {
    navigate('/register', { state: { event } });
  };
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
                          <Link to="/tech-event" >Tech </Link>
                      </h1>
                  </div>
      </div>            
      <div className="logo-hunt-page">
        <h1>Bug Buzz</h1>
        <div className="logo-hunt-content">
          <div className="logo-hunt-image">
            <img
              src={Bugbuzz} 
              alt="Bug Buzz"
            />
            <button className="register-button" onClick={() => handleButtonClick('BUG BUZZ')}>
              Register for Event
            </button>
          </div>
          <div className="logo-hunt-details">
            <h3 className='logo3'>Description</h3>
            <p>
              Event Name: Bug Buzz
            </p>
          
            <p>
              Event Time Duration: 1 HOUR
            </p>
            <p>
              Number of Rounds: 2
            </p>
            <h3 class='logo3'>Event Overview</h3>
    <p><strong>Event Name</strong>: Bug Buzz</p>
    <p><strong>Objective</strong>: Participants must find and fix errors in the given code.</p>
    <p><strong>Total Duration</strong>: 1 hour</p>
    <p><strong>Rounds</strong>: 2 rounds (Round 1: Moderate | Round 2: Difficult)</p>
    <p><strong>Judging Criteria</strong>: Participants are evaluated based on how quickly they identify and correct errors. The minimum time taken will determine who progresses to the next round and the overall winners.</p>

    <h3 class='logo3'>Round 1: Moderate</h3>
    <ul>
        <li><strong>Task</strong>: Participants will be given a piece of code with several errors to identify and fix.</li>
        <li><strong>Time Limit</strong>: Maximum of 30 minutes.</li>
        <li><strong>Evaluation</strong>:
            <ul>
                <li>Participants must identify all the bugs in the code and submit their corrected code.</li>
                <li>Those who complete the task in the least amount of time will move to the second round.</li>
            </ul>
        </li>
        <li><strong>Advancement</strong>: The top participants (based on time and correctness) will qualify for Round 2. The number of participants advancing to Round 2 will depend on the total number of participants.</li>
    </ul>

    <h3 class='logo3'>Round 2: Difficult</h3>
    <ul>
        <li><strong>Task</strong>: Participants will be given a more complex code with errors to identify and fix.</li>
        <li><strong>Time Limit</strong>: Maximum of 30 minutes.</li>
        <li><strong>Evaluation</strong>:
            <ul>
                <li>Participants must again find and fix all the bugs.</li>
                <li>The time taken to complete the task will be recorded.</li>
            </ul>
        </li>
    </ul>

    <h3 class='logo3'>Winners & Judging</h3>
    <ul>
        <li><strong>Overall Timing</strong>:
            <ul>
                <li>Participants’ times from both rounds will be added up to calculate the total time taken to complete both tasks.</li>
                <li>The three participants with the lowest total time will be declared the winners.</li>
            </ul>
        </li>
        <li><strong>Ties</strong>:
            <ul>
                <li>In case of a tie (same total time), the participants who completed the difficult round faster will be ranked higher.</li>
            </ul>
        </li>
        <li><strong>Winners</strong>:
            <ul>
                <li><strong>1st Place</strong>: Fastest overall time across both rounds.</li>
                <li><strong>2nd Place</strong>: Second fastest overall time.</li>
                <li><strong>3rd Place</strong>: Third fastest overall time.</li>
            </ul>
        </li>
    </ul>

    <h3 class='logo3'>Additional Rules</h3>
    <ul>
        <li><strong>Submission</strong>: Each participant must submit their corrected code within the provided platform (or as instructed).</li>
        <li><strong>Disqualification</strong>:
            <ul>
                <li>Participants will be disqualified if they exceed the time limit in any round.</li>
                <li>Plagiarism will not be tolerated; any participant found copying code will be disqualified.</li>
            </ul>
        </li>
        <li><strong>Judges’ Decisions</strong>: All decisions made by the event judges are final.</li>
    </ul>
            <h3 className='logo3'>Rules:</h3>
            <ul>
              <li>Individual participation.</li>
              <li>In the first round, the top 20 candidates will be selected based on time (varies according to number of participants) for the second round.</li>
            </ul>

            <h3 className='logo3'>Faculty Coordinator</h3>
            <ul>
            <li>PROF. KARUNA PATEL</li>
              <li>PROF. DHYANI JOSHI</li>
              <li>PROF. FORAM PATEL</li>
            </ul>


            <h3 className='logo3'>Event Heads</h3>
            <ul>
              <li>KRISH VANANI - 6359754076</li>
              <li>SAHIL SOJITRA - 8866011851</li>
              <li>KRISHNA DESAI - 9624081220</li>
            </ul>
            <h3 className='logo3'>Event Volunteers</h3>
            <ul>
              <li>UTSAV VACHHANI  </li>
              <li>ZENITH DAYANI  </li>
              <li>NEEL MANDANKA  </li>
              <li>MANAV AVAIYA  </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
      </>
  
    );
  };

export default Bugbuzzpage;
