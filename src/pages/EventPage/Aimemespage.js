import React from 'react';
import './LogoHuntPage.css'; // Import the CSS file for styling
import Footer from '../../components/Footer';
import great from "./great.png";
import { Link,useNavigate  } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import Aimemes from '../../team/Tech-poster/a4aimemes.jpg';

const Aimemespage = () => {
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
            <img src={great} className='symb'/>
            <h1><Link to="/events" >Events</Link></h1>
            <img src={great} className='symb'/>
            <h1><Link to="/tech-event" >Tech </Link></h1>
          </div>
        </div>
        <div className="logo-hunt-page">
          <h1>AI Memes</h1>
          <div className="logo-hunt-content">
            <div className="logo-hunt-image">
              <img
                src={Aimemes}
                alt="AI Memes"
              />
              <button className="register-button" onClick={() => handleButtonClick('AI MEMES')}>
              Register for Event
            </button>
            </div>
            <div className="logo-hunt-details"> <h3 class='logo3'>Event Overview</h3>
    <p><strong>Event Name</strong>: Meme Creation</p>
    <p><strong>Objective</strong>: Participants will create memes based on IT, AI, and ML concepts.</p>
    <p><strong>Total Duration</strong>: 1.15 hours</p>
    <p><strong>Rounds</strong>: 2 rounds</p>
    <p><strong>Time Duration of Individual Round : </strong>
        <ul>
            <li><strong>Round 1</strong>: 45 minutes</li>
            <li><strong>Round 2</strong>: 30 minutes</li>
        </ul>
    </p>

    <h3 class='logo3'>Round 1: Meme Creation</h3>
    <ul>
        <li><strong>Objective</strong>: Participants will create an original meme related to the IT Domain, AI, and ML using provided templates.</li>
        <li><strong>Instructions</strong>:
            <ul>
                <li>Participants will be provided with a set of blank meme templates.</li>
                <li>The theme could be “AI in everyday life,” “AI vs. Humans,” or “First Day as a Web Developer.”</li>
                <li>Memes should incorporate AI-related concepts, tools, or trends.</li>
                <li>Participants may use any image editing tools they prefer.</li>
            </ul>
        </li>
        <li><strong>Judging Criteria</strong>:
            <ul>
                <li>Creativity and originality.</li>
                <li>Relevance to IT domain and AI/ML.</li>
                <li>Humour and engagement factor.</li>
            </ul>
        </li>
    </ul>

    <h3 class='logo3'>Round 2: AI-Generated Memes</h3>
    <ul>
        <li><strong>Objective</strong>: Participants will use an AI tool (e.g., DALL-E, Stable Diffusion) to generate a meme.</li>
        <li><strong>Instructions</strong>:
            <ul>
                <li>Participants will have access to an AI image generation tool.</li>
                <li>The theme for this round could be more specific, such as "The Future of AI" or "AI in Pop Culture."</li>
                <li>Participants will be presented with a series of AI/ML-related prompts, such as “AI Chatbot Trying to Understand Internet Slang.”</li>
                <li>Participants must create a meme using AI-generated images, text, or both.</li>
            </ul>
        </li>
        <li><strong>Judging Criteria</strong>:
            <ul>
                <li>Effective use of AI tools.</li>
                <li>Creativity and humour.</li>
                <li>Coherence of the AI-generated content with the meme’s message.</li>
            </ul>
        </li>
    </ul>
              <h3 className='logo3'>Rules:</h3>
              <ul>
                <li>Individual Participation</li>
                <li>Memes should be related to AI and Tech</li>
                <li>Mobile phones are strictly prohibited</li>
              </ul>
  
              <h3 class="logo3">Faculty Coordinator</h3>
              <ul>
<li>Dr.Dhruti Sharma</li>
<li>Dr. Krishna Delvadiya</li>
</ul>
              <h3 className='logo3'>Event Heads</h3>
              <ul>
              <li>Mitul Tariwala - +91 92659 68056</li>

                <li>Raj Kachhadiya - +91 90816 39576</li>
              </ul>
  
              <h3 className='logo3'>Event Volunteers</h3>
              <ul>
                <li>Virali Joshi</li>
                <li>Veer Patel</li>
                <li>Vatsal Makwana</li>
                <li>Zeel Boghra</li>
                <li>Ayushi Kyada</li>
              </ul>
            </div>
          </div>
        </div>
        <Footer/>
      </>
    );
  };
export default Aimemespage;
