import React from 'react';
import { Link } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import great from "./great.png";
import Footer from '../../components/Footer';
import krupansh from '../../team/10core/krupansh9.png';
import shubham from '../../team/10core/shubham.png';
import MeetGhelani from '../../team/nontech/meet.png';
import AanandPalan from '../../team/nontech/Auctionjunction_AanandPalan.png';
import BhautikGoswami from '../../team/nontech/Auctionjunction_BhautikGauswami.png';
import SwargPatel from '../../team/nontech/Auctionjunction_swargpatel.png';
import Nupur from '../../team/nontech/BLINDNAVIGATOR_NUPUR.png';
import Sujal from '../../team/nontech/BLINDNAVIGATOR_SUJAL.png';
import Neel from '../../team/nontech/CAMPUSCOMBAT_NEEL.png';
import Ravish from '../../team/nontech/CAMPUSCOMBAT_RAVISH.png';
import MeetVora from '../../team/nontech/IMG-20230430-WA0027_resized.png';
import Milap from '../../team/nontech/MindOverMatter_Milap.png';
import KeyurPatel from '../../team/nontech/keyurpatel.png';
import NiharGhoghari from '../../team/nontech/nihar.png';
import Renish from '../../team/nontech/renish.png';
import KeyurMoradiya from '../../team/10core/keyur.png';
import JalParekh from '../../team/nontech/JalParekh.png';


function NonTech() {
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
              <Link to="/nontech-team" >Non Tech</Link>
            </h1>
        </div>
        </div>
        
            
       
        <div className="converse">
            <h1 className="heading">Non-Tech  Coordinators</h1>
            <div className="image-grid">
                <div className="image-card">
                    <img src={krupansh} alt="Coordinator 1" className="imageh" />
                    <p>Krupansh Nakrani</p>
                </div>
                <div className="image-card">
                    <img src={shubham} alt="Coordinator 2" className="imageh" />
                    <p>Shubham Kathiriya</p>
                </div>
               
              
            </div>
            
        </div>
        <div className="converse">
            <h1 className="heading">Student Event Heads</h1>
            <div className="image-grid">
            <div className="image-card">
                    <img src={MeetGhelani} alt="Coordinator 2" className="imagev" />
                    <p>Meet Ghelani</p>
                </div>
                
                <div className="image-card">
                    <img src={NiharGhoghari} alt="Coordinator 2" className="imagev" />
                    <p>Nihar Ghoghari</p>
                </div>
                <div className="image-card">
                    <img src={KeyurPatel} alt="Coordinator 2" className="imagev" />
                    <p>Keyur Patel</p>
                </div>
                <div className="image-card">
                    <img src={KeyurMoradiya} alt="Coordinator 3" className="imagev" />
                    <p>Keyur Moradiya</p>
                </div>
                <div className="image-card">
                    <img src={Renish} alt="Coordinator 4" className="imagev" />
                    <p>Renish</p>
                </div>
                <div className="image-card">
                    <img src={Milap} alt="Coordinator 5" className="imagev" />
                    <p>Milap</p>
                </div>
                <div className="image-card">
                    <img src={MeetVora} alt="Coordinator 6" className="imagev" />
                    <p>Meet Vora</p>
                </div>
                <div className="image-card">
                    <img src={Ravish} alt="Coordinator 3" className="imagev" />
                    <p>Ravish</p>
                </div>
                <div className="image-card">
                    <img src={Neel} alt="Coordinator 4" className="imagev" />
                    <p>Neel</p>
                </div>
                <div className="image-card">
                    <img src={Sujal} alt="Coordinator 5" className="imagev" />
                    <p>Sujal</p>
                </div>
                <div className="image-card">
                    <img src={Nupur} alt="Coordinator 6" className="imagev" />
                    <p>Nupur</p>
                </div>
                <div className="image-card">
                    <img src={SwargPatel} alt="Coordinator 3" className="imagev" />
                    <p>Swarg Patel</p>
                </div>
                <div className="image-card">
                    <img src={BhautikGoswami} alt="Coordinator 4" className="imagev" />
                    <p>Bhautik Goswami</p>
                </div>
                <div className="image-card">
                    <img src={AanandPalan} alt="Coordinator 5" className="imagev" />
                    <p>Aanand Palan</p>
                </div>
                <div className="image-card">
                    <img src={JalParekh} alt="Coordinator 5" className="imagev" />
                    <p>Jal Parekh </p>
                </div>
               
              
            </div>
            
        </div>
        <Footer/>
        </>
    );
}

export default NonTech;
