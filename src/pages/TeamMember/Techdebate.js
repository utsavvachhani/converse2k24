import React from 'react';
import { Link } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import great from "./great.png";
import Footer from '../../components/Footer';
import JilRupani from '../../team/techdebate/1TECHDEBATE_RupaniJil.png';
import ShrutiDesai from '../../team/techdebate/2Techdebate_shruti.png';
import VyomKapadia from '../../team/techdebate/3vyomakapadia.png';
import DarakshaNasirwala from '../../team/techdebate/4Daraksha.png';
import HetSalmawala from '../../team/techdebate/5Het_Salmawala.png';
import HitakshiMavani from '../../team/techdebate/6MavaniHitakshi.png';
import Rudraakhadela from '../../team/techdebate/7TECHDEBATE_Rudraakhadela.png';
import Dhruti from '../../team/faculty/Dhruti.png';
// import MitaliDesai from '../../team/faculty/Dhruti.png';

import avtar from '../../team/avtar/femaleA.png';

function Techdebate() {
    return (<>
    <ScrollToTop/>
     <div className="teams-section">
        <div className='lin'>
            <h1>
              <Link to="/" >Home</Link>
            </h1>
            <img src={great} className='symb' alt='Converse2k24'/>
             <h1>
              <Link to="/team" >Team</Link>
            </h1>
            <img src={great} className='symb' alt='Converse2k24'/>
             <h1>
              <Link to="/techdebate-team" >Tech Debate</Link>
            </h1>
        </div>
        </div>
        <div className="converse">
            <h1 className="heading">Faculty Event Heads</h1>
            <div className="image-grid">
                <div className="image-card">
                    <img src={Dhruti} alt="Coordinator 1" className="imagef" />
                    <p>Dr. Dhruti Sharma</p>
                </div>
                <div className="image-card">
                    <img src={avtar} alt="Coordinator 2" className="imagef" />
                    <p>Dr. Mitali Desai</p>
                </div>
               
              
            </div>
            
        </div>
        <div className="converse">
            <h1 className="heading">Student Event Heads</h1>
            <div className="image-grid">
                <div className="image-card">
                    <img src={ShrutiDesai} alt="Coordinator 1" className="imageh" />
                    <p>Shruti Desai</p>
                </div>
                <div className="image-card">
                    <img src={DarakshaNasirwala} alt="Coordinator 2" className="imageh" />
                    <p>Daraksha Nasirwala</p>
                </div>
              
              
            </div>
            
        </div>
        <div className="converse">
            <h1 className="heading">Event Volunteers</h1>
            <div className="image-grid">
                <div className="image-card">
                    <img src={JilRupani} alt="Coordinator 1" className="imagev" />
                    <p>Jil Rupani</p>
                </div>
                <div className="image-card">
                    <img src={HetSalmawala} alt="Coordinator 2" className="imagev" />
                    <p>Het Salmawala</p>
                </div>
                <div className="image-card">
                    <img src={Rudraakhadela} alt="Coordinator 3" className="imagev" />
                    <p>Rudraa Khadela</p>
                </div>
                <div className="image-card">
                    <img src={HitakshiMavani} alt="Coordinator 4" className="imagev" />
                    <p>Hitakshi Mavani</p>
                </div>
                <div className="image-card">
                    <img src={VyomKapadia} alt="Coordinator 5" className="imagev" />
                    <p>Vyoma Kapadia</p>
                </div>
               
              
            </div>
            
        </div>
        <Footer/>
        </>
    );
}

export default Techdebate;
