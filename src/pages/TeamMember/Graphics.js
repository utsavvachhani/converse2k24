import React from 'react';
import { Link } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import great from "./great.png";
import Footer from '../../components/Footer';
import uttam from '../../team/10core/uttam8.png';
import ayushv from '../../team/10core/ayushv.png';
import vanshika from '../../team/10core/vanshika.png';
import kangana from '../../team/10core/kangana.png';
import namitha from '../../team/10core/namitha.png';
import nupur from '../../team/10core/nupur.png';
import palak from '../../team/10core/palak.png';
import sanchi from '../../team/10core/sanchi.png';
import twisha from '../../team/10core/twisha.png';
import KrishnaDabhi from '../../team/10core/KrishnaDabhi.png';
import KrushaliGohil from '../../team/10core/KrushaliGohil.png';


function Graphics() {
    return (<>
    <ScrollToTop/>
     <div className="teams-section">
        <div className='lin'>
            <h1>
              <Link to="/" >Home</Link>
            </h1>
            <img src={great} className='symb'/>
             <h1>
              <Link to="/team" >Team</Link>
            </h1>
            <img src={great} className='symb'/>
             <h1>
              <Link to="/graphics-team" >Graphics</Link>
            </h1>
        </div>
        </div>
      
        <div className="converse">
            <h1 className="heading">Team Coordinator</h1>
            <div className="image-grid">
                <div className="image-card">
                    <img src={uttam} alt="Coordinator 1" className="imageh" />
                    <p>Uttam Moradiya</p>
                </div>
              
              
            </div>
            
        </div>
        <div className="converse">
            <h1 className="heading"> Team Members  </h1>
            <div className="image-grid">
                <div className="image-card">
                    <img src={ayushv} alt="Coordinator 1" className="imagev" />
                    <p>Ayush Vanani</p>
                </div>
                <div className="image-card">
                    <img src={KrushaliGohil} alt="Coordinator 2" className="imagev" />
                    <p>Krushali Gohil </p>
                </div>
                <div className="image-card">
                    <img src={vanshika} alt="Coordinator 3" className="imagev" />
                    <p>Vanshika Kapadiya</p>
                </div>
               
              
                <div className="image-card">
                    <img src={palak} alt="Coordinator 2" className="imagev" />
                    <p>Palak Tank</p>
                </div>
                <div className="image-card">
                    <img src={sanchi} alt="Coordinator 2" className="imagev" />
                    <p>Sanchi Savani</p>
                </div>
                <div className="image-card">
                    <img src={namitha} alt="Coordinator 4" className="imagev" />
                    <p>Namitha  Yelugam</p>
                </div>
                <div className="image-card">
                    <img src={nupur} alt="Coordinator 2" className="imagev" />
                    <p>Nupur Sonware</p>
                </div>
                <div className="image-card">
                    <img src={twisha} alt="Coordinator 2" className="imagev" />
                    <p>Twisha Savani</p>
                </div>
                <div className="image-card">
                    <img src={kangana} alt="Coordinator 4" className="imagev" />
                    <p>Kangana Gupta</p>
                </div>
                <div className="image-card">
                    <img src={KrishnaDabhi} alt="Coordinator 2" className="imagev" />
                    <p> Krishna Dabhi</p>
                </div>
               
               
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Graphics;
