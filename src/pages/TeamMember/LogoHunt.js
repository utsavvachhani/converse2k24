import React from 'react';
import { Link } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import great from "./great.png";
import Footer from '../../components/Footer';
import tilak from '../../team/10core/tilak.png';
import DharaBhakhar from '../../team/logohunti/DharaBhakhar.png';
import ShreyDhola from '../../team/logohunti/ShreyDhola.png';
import MananChovatiya from '../../team/logohunti/MananChovatiya.png';
import ParthKachariya from '../../team/logohunti/ParthKachariya.png';
import ParthRana from '../../team/logohunti/ParthRana.png';
import ShasangThummar from '../../team/logohunti/ShasangThummar.png';
import BhumikaPatel from '../../team/faculty/Bhumika.png';
import PalakPatel from '../../team/avtar/femaleA.png';



function LogoHunt() {
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
              <Link to="/logohunt-team" >Logo Hunt</Link>
            </h1>
        </div>
        </div>
        <div className="converse">
            <h1 className="heading">Faculty Event Heads</h1>
            <div className="image-grid">
                <div className="image-card">
                    <img src={BhumikaPatel} alt="Coordinator 1" className="imagef" />
                    <p>Prof. Bhumika Patel</p>
                </div>
                <div className="image-card">
                    <img src={PalakPatel} alt="Coordinator 2" className="imagef" />
                    <p>Prof. Palak Desai</p>
                </div>
               
              
            </div>
            
        </div>
        <div className="converse">
            <h1 className="heading">Student Event Heads</h1>
            <div className="image-grid">
                <div className="image-card">
                    <img src={tilak} alt="Coordinator 1" className="imageh" />
                    <p>Tilak Viradiya</p>
                </div>
                <div className="image-card">
                    <img src={DharaBhakhar} alt="Coordinator 2" className="imageh" />
                    <p>Dhara Bhakhar</p>
                </div>
               
              
            </div>
            
        </div>
        <div className="converse">
            <h1 className="heading">Event Volunteers</h1>
            <div className="image-grid">
                <div className="image-card">
                    <img src={ShreyDhola} alt="Coordinator 1" className="imagev" />
                    <p>Shrey Dhola </p>
                    
                </div>
                <div className="image-card">
                    <img src={MananChovatiya} alt="Coordinator 2" className="imagev" />
                    <p>Manan Chovatiya </p>
                </div>
                <div className="image-card">
                    <img src={ParthKachariya} alt="Coordinator 3" className="imagev" />
                    <p>Parth Rana</p>
                </div>
                <div className="image-card">
                    <img src={ParthRana} alt="Coordinator 4" className="imagev" />
                    <p>Parth Kachariya </p>
                </div>
                <div className="image-card">    
                    <img src={ShasangThummar} alt="Coordinator 5" className="imagev" />
                    <p>Shasang Thummar </p>
                </div>
                
              
            </div>
            
        </div>
        <Footer/>
        </>
    );
}

export default LogoHunt;
