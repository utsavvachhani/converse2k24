
import React from 'react';
import { Link } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import great from "./great.png";
import Footer from '../../components/Footer';

import mitul from "../../team/webteam/AIMeme_head_Mitul.png"
import utsav from "../../team/webteam/VachhaniUtsav.png"
import avtar from '../../team/avtar/maleA.png';
import meet from "../../team/webteam/meetpatel.png";
import tilak from "../../team/webteam/tilak.png";

function Webteam() {
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
              <Link to="/tech-team" >Technical Team</Link>
            </h1>
        </div>
        </div>
        <div className="converse">
            <h1 className="heading">Team Members</h1>
            <div className="image-grid">
            <div className="image-card">
                    <img src={tilak} alt="Coordinator 2" className="imagef" />
                    <p>Tilak Viradiya</p>
                </div>
                <div className="image-card">
                    <img src={mitul} alt="Coordinator 1" className="imagef" />
                    <p>Mitul Tariwala</p>
                </div>
                <div className="image-card">
                    <img src={utsav} alt="Coordinator 2" className="imagef" />
                    <p>Utsav Vachhani</p>
                </div>
                
                <div className="image-card">
                    <img src={meet} alt="Coordinator 2" className="imagef" />
                    <p>Meet patel</p>
                </div>
                <div className="image-card">
                    <img src={avtar} alt="Coordinator 2" className="imagef" />
                    <p>Keyur Moradiya</p>
                </div>
            </div>
            
        </div>
        
            
        
        <Footer/>
        </>
    );
}

export default Webteam;
