import React from 'react';
import './LogoHuntPage.css'; // Import the CSS file for styling
import Footer from '../../components/Footer';
import great from './great.png';
import { Link, useNavigate } from 'react-router-dom';
import ScrollToTop from '../../components/ScrollToTop';
import Techdebate from '../../team/Tech-poster/a4techdebate.jpg';

const Techdebatepage = () => {
  const navigate = useNavigate();

  const handleButtonClick = (event) => {
    navigate('/registerteam', { state: { event } });
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
            <Link to='/tech-event'>Tech </Link>
          </h1>
        </div>
      </div>
      <div className='logo-hunt-page'>
        <h1>Tech Debate</h1>
        <div className='logo-hunt-content'>
          <div className='logo-hunt-image'>
            <img src={Techdebate} alt='Tech Debate' />
            <button
              className='register-button'
              onClick={() => handleButtonClick('TECH DEBATE')}
            >
              Register for Event
            </button>
          </div>
          <div className='logo-hunt-details'>
            <h3 className='logo3'>Description</h3>
            <p>Event : TECH TUSSLE</p>

            <h3 className='logo3'>Event Overview</h3>
            <p>
              The TECH DEBATE event, part of the CONVERSE 2K24 techfest, is
              designed to challenge participants' knowledge and debating skills
              on current technological trends. The event will consist of two
              rounds—a quiz round followed by a debate round for the shortlisted
              teams. The event aims to foster critical thinking, quick
              decision-making, and effective communication among students,
              creating an engaging and competitive atmosphere.
            </p>

            <p>Event Details</p>
            <p>Event Name: TECH DEBATE</p>
            <p>Total Time Duration: 1.5 hours</p>
            <p>Number of Rounds: 2</p>
            <p>Participation: Teams of 2 members</p>

            <h3 className='logo3'>Round Details:</h3>

            <p>
              Round 1: Quiz Round (Fastest Finger First) Time Duration: Maximum
              of 30 minutes Format: The quiz will consist of 15 questions
              focused on general technology trends. The quiz will follow a
              "Fastest Finger First" format, where teams will answer questions
              as quickly as possible using a single phone. A projector will
              display live results, keeping participants engaged and hyped by
              showing real-time scores. Objective: This round aims to assess the
              participants' knowledge and quick thinking on various technology
              trends. The top-scoring teams will qualify for the next round.
            </p>
            <p>
              Round 2: Debate Round Time Duration: Approximately 1 hour Format:
              The selected teams from Round 1 will advance to the debate round.
              Teams will be given a common issue to debate, which will be
              provided on the spot. A preparation time of 5-10 minutes will be
              given before the debate begins. The final round will determine the
              top 3 teams based on their debate performance. Objective: This
              round will test the participants' ability to articulate their
              thoughts, present arguments, and counter the opposing team
              effectively.
            </p>

            <h3 className='logo3'>Judging Criteria:</h3>
            <p>
              The winning teams will be judged in round 2 based on the following
              criteria: Points Raised: How well the teams support their stance
              with relevant points. Relevancy to the Topic: The alignment of
              arguments with the debate topic. Use of Facts: Incorporation of
              accurate and relevant facts in their arguments. Counterarguments:
              The ability to effectively counter the opposing team's points.
              Rules and Guidelines Round 1: Quiz The quiz will cover general
              technology trends. There will be approximately 10-15 questions.
              Teams of 2 members will participate, answering the quiz using a
              single phone in a "Fastest Finger First" format. Live scores will
              be displayed on a projector to maintain high energy and
              competitiveness. The selected top-scoring teams will advance to
              the debate round. Round 2: Debate The debate topic will be
              revealed on the spot. Each team will be given 5-10 minutes to
              prepare. The debate will follow a structured format, where each
              team will present their views, followed by rebuttals. The top 3
              teams will be declared winners based on the judging criteria.
              Resource Requirements
            </p>

            <h3 className='logo3'>Rules:</h3>
            <ul>
              <li>Individual Participation or Teams of 2</li>
              <li>Topic will be given on the spot</li>
              <li>Mobile phones are strictly prohibited during debates</li>
            </ul>

            <h3 class="logo3">Faculty Coordinator</h3>
              <ul>
<li>Dr.Dhruti Sharma</li>
<li>Dr. Mitali Desai</li>
</ul>

            <h3 className='logo3'>Event Heads</h3>
            <ul>
              <li>Shruti Desai</li>
              <li>Darakhsha Nasirwala</li>
            </ul>

            <h3 className='logo3'>Event Volunteers</h3>
            <ul>
              <li>Vyoma Kapadiya</li>
              <li>Hitakshi Mavani</li>
              <li>Rudraa Khadela</li>
              <li>Jil Rupani</li>
              <li>Het Salmawala</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Techdebatepage;
