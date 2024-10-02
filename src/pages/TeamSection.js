import React from 'react';
import TeamCard from '../components/TeamCard';
import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import great from "./great.png";


import corei from '../pages/event-type/core2.webp';
import graphicsi from '../pages/event-type/graphics.webp';
import nontechi from '../pages/event-type/nontech.webp';
import decorationi from '../pages/event-type/decoration.webp';
import marketingi from '../pages/event-type/marketing.webp';
import logohunti from '../pages/event-type/initlogohunt.jpg';
import itquizi from '../pages/event-type//initiqquiz.jpg';
import bugbuzzi from '../pages/event-type/initbugbuzz.jpg';
import codathoni from '../pages/event-type/initcodathon.jpg';
import pyiti from '../pages/event-type/initpyit.jpg';
import aimemesi from '../pages/event-type/initaimemes.jpg';
import techdebatei from '../pages/event-type/inittech.jpg';
import cybersiegei from '../pages/event-type/initcyber.jpg';
import webwavei from '../pages/event-type/initwb.jpg';
import aiquizi from '../pages/event-type/initaiquiz.jpg';
import webteam from "../pages/event-type/webteamicon.jpg"

const TeamsSection = () => {
    const teams = [
        { title: 'Converse', imageSrc: corei, link: '/converse-team' },
         { title: 'Graphics  ', imageSrc: graphicsi, link: '/graphics-team' },
         { title: 'Non-Tech', imageSrc:nontechi , link: '/nontech-team' },
         { title: 'Decoration ', imageSrc:decorationi, link: '/decoration-team' },
        { title: 'Marketing ', imageSrc:marketingi, link: '/marketing-team' },
        { title: 'Web Team', imageSrc:webteam , link: '/tech-team' },

        { title: 'Logo Hunt', imageSrc:logohunti , link: '/logohunt-team' },
        { title: 'IT Quiz', imageSrc: itquizi, link: '/itquiz-team' },
        { title: 'Bug Buzz', imageSrc:bugbuzzi , link: '/bugbuzz-team' },
        { title: 'Codathon', imageSrc:codathoni , link: '/codathon-team' },
        { title: 'PY-IT', imageSrc: pyiti, link: '/pyit-team' },
        { title: 'AI Memes', imageSrc:aimemesi , link: '/aimemes-team' },
        { title: 'Tech Debate', imageSrc:techdebatei , link: '/techdebate-team' },
        { title: 'Cyber Siege', imageSrc: cybersiegei, link: '/cybersiege-team' },
        { title: 'Web Wave', imageSrc:webwavei, link: '/webwave-team' },
        { title: 'AI Quiz', imageSrc:aiquizi , link: '/aiquiz-team' },

    ];

    return (
        <>        
        <ScrollToTop/>
            <div className="teams-section">
                <div className='lin'>
                    <h1>
                        <Link to="/" >Home</Link>
                    </h1> 
                    <img src={great} className='symb' alt='next'/>
                    <h1>
                        <Link to="/team" >Team</Link>
                    </h1>
                </div>
                <div className='ex'>
                    <h2 >Meet the faces behind CONVERSE</h2>
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

export default TeamsSection;
