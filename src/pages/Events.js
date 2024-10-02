import React from 'react';
import TeamCard from '../components/TeamCard';
import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import great from "./great.png";
import nontechii from '../pages/event-type/nontechiii.webp';
import techii from '../pages/event-type/techiiii.webp';

const Events = () => {
    const teams = [
        { title: 'Tech Event', imageSrc: techii, link: '/tech-event' },
       { title: 'Non-tech Event', imageSrc:nontechii, link: '/nontech-event' },
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
                </div>
                <div className='ex'>
                    <h2 >Register here for all the Fabulous Events </h2>
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

export default Events;
