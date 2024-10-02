import React from 'react';
import { Link } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import TeamCard from '../../components/TeamCard';
import Footer from '../../components/Footer';
import great from "./great.png";
import ipl from './ipl.jpg';
import bgmi from './bgmi.jpg';
import valorant from './valorant.jpg'
import musical from './musical.jpeg'
import treasure from './treasure.jpeg'
import mindover from './mindovermatter.jpg'
import levelzero from './levelzero.jpg'
import blind from './blindnavigator.jpg'


const Nontech = () => {
    const teams = [
        { title: 'BGMI', imageSrc:bgmi, link: '/bgmi-event' },
        { title: 'Valorant Blitz', imageSrc:valorant, link: '/valorant-event' },
        { title: 'IPL Auction', imageSrc:ipl, link: '/ipl-event' },
        { title: 'Level Zero', imageSrc:levelzero , link: '/levelzero-event' },
        { title: 'Musical Mystery', imageSrc:musical, link: '/musical-event' },
       
       
        { title: "Mind Over Matter", imageSrc:mindover , link: '/mindover-event' },
       
        { title: 'Blind Navigator', imageSrc:blind , link: '/blindnavigation-event' },
        { title: 'Treasure Hunt', imageSrc:treasure , link: '/Treasure-event' },
];

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
                        <Link to="/nontech-event" >Non-tech</Link>
                    </h1>
                </div>
                <div className='ex'>
                    <h2 >Explore the Non-tech Events</h2>
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

export default Nontech;
