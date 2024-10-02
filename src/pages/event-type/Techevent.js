import React from 'react';
import { Link } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import TeamCard from '../../components/TeamCard';
import Footer from '../../components/Footer';
import great from "./great.png";
import aimemes from './initaimemes.jpg';
import bugbuzz from './initbugbuzz.jpg';
import codathon from './initcodathon.jpg';
import cyber from './initcyber.jpg';
import iqquiz from './initiqquiz.jpg';
import tech from './inittech.jpg';
import logohunt from './initlogohunt.jpg';
import pyit from './initpyit.jpg';
import wb from './initwb.jpg';
import aiquiz from './initaiquiz.jpg';



const Techevent = () => {
    const teams = [
   
        { title: 'Logo Hunt', imageSrc:logohunt, link: '/logohunt-event' },
        { title: 'Cyber Siege', imageSrc:cyber,  link: '/cybersiege-event' },
        { title: 'IT Quiz', imageSrc:iqquiz , link: '/itquiz-event' },
        { title: 'Bug Buzz', imageSrc:bugbuzz , link: '/bugbuzz-event' },
        { title: 'Codathon', imageSrc:codathon , link: '/codathon-event' },
        { title: 'Tech Debate', imageSrc:tech,  link: '/techdebate-event' },
        { title: 'Web Wave', imageSrc:wb,  link: '/webwave-event' },
        { title: 'AI Memes', imageSrc: aimemes, link: '/aimemes-event' },
        { title: 'PY-IT', imageSrc:pyit,  link: '/pyit-event' },
        { title: 'AI Quiz', imageSrc:aiquiz,  link: '/aiquiz-event' },
      
    
    ];

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
                <div className='ex'>
                    <h2 >Explore the Tech Events</h2>
                </div>
                <div className="team-cards-container">
                    {teams.map((team, index) => (
                        <Link key={index} to={team.link}>
                            <TeamCard title={team.title} imageSrc={team.imageSrc} />
                        </Link>
                        
                    ))}
                </div>
              
            </div>
            <Footer/>
        </>
    );
};

export default Techevent;
