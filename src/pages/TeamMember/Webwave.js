import React from 'react';
import { Link } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import great from "./great.png";
import Footer from '../../components/Footer';
import TanviVaghasiya from '../../team/webwave/Webwave_tanvi.png';
import PrinceViradiya from '../../team/webwave/webPrince.png';
import KrishnaShethna from '../../team/webwave/WebWave_Krishnashethna.png';
import MilapGohil from '../../team/webwave/Webwave_Milap.png';
import PreetMehta from '../../team/webwave/Webwave_Preet.png';
import RenishDhaduk from '../../team/webwave/Webwave_Renish.png';
import DhruvItaliya from '../../team/webwave/DhruvItaliya.png';
import Vivek from '../../team/faculty/mukesh.png';
import Mitul from '../../team/faculty/mukesh.png';
import avtar from '../../team/avtar/maleA.png';


function Webwave() {
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
              <Link to="/webwave-team" >Web Wave</Link>
            </h1>
        </div>
        </div>
        <div className="converse">
            <h1 className="heading">Faculty Event Heads</h1>
            <div className="image-grid">
                <div className="image-card">
                    <img src={avtar} alt="Coordinator 1" className="imagef" />
                    <p>Prof. Vivek Chapaneria</p>
                </div>
                <div className="image-card">
                    <img src={avtar} alt="Coordinator 2" className="imagef" />
                    <p>Prof. Mitul Patel</p>
                </div>
                
              
            </div>
            
        </div>
        <div className="converse">
            <h1 className="heading">Student Event Heads</h1>
            <div className="image-grid">
                <div className="image-card">
                    <img src={TanviVaghasiya} alt="Coordinator 1" className="imageh" />
                    <p> Tanvi Vaghasiya</p>
                </div>
                <div className="image-card">
                    <img src={PreetMehta} alt="Coordinator 2" className="imageh" />
                    <p> Preet Mehta</p>
                </div>
               
              
            </div>
            
        </div>
        <div className="converse">
            <h1 className="heading">Event Volunteers</h1>
            <div className="image-grid">
            <div className="image-card">
                    <img src={PrinceViradiya} alt="Coordinator 4" className="imagev" />
                    <p>Prince Viradiya</p>
                </div>
                <div className="image-card">
                    <img src={DhruvItaliya} alt="Coordinator 3" className="imagev" />
                    <p>Dhruv Italia</p>
                </div>
                <div className="image-card">
                    <img src={MilapGohil} alt="Coordinator 1" className="imagev" />
                    <p>Milap Gohil</p>
                </div>
                <div className="image-card">
                    <img src={RenishDhaduk} alt="Coordinator 2" className="imagev" />
                    <p>Renish Dhaduk</p>
                </div>
                <div className="image-card">
                    <img src={KrishnaShethna} alt="Coordinator 5" className="imagev" />
                    <p>Krishna Shethna</p>
                </div>
               
              
            </div>
            
        </div>
        <Footer/>
        </>
    );
}

export default Webwave;
