import React from 'react';
import { Link } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import great from "./great.png";
import Footer from '../../components/Footer';
import AbhishekDhanani from '../../team/cybersiege/Cyber_ABHISHEK.png';
import DeepPatel from '../../team/cybersiege/Cyber_Deep.png';
import MalavRadia from '../../team/cybersiege/Cyber_MALAV.png';
import DiyaPatel from '../../team/cybersiege/Cyber_Diya.png';
import MananChodvadiya from '../../team/cybersiege/Cyber_Manan.png';
import RahulSoni from '../../team/cybersiege/Cyber_Rahul.png';
import RishiGinoya from '../../team/cybersiege/Cyber_Rishi.png';
import VishvaGohil from '../../team/cybersiege/Cyber_vishva.png';
import Tushar from '../../team/faculty/Tushar.png';
import AnkitK from '../../team/faculty/Ankitk.png';

function Cybersiege() {
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
              <Link to="/cybersiege-team" >Cyber Siege</Link>
            </h1>
        </div>
        </div>
        <div className="converse">
            <h1 className="heading">Faculty Event Heads</h1>
            <div className="image-grid">
            <div className="image-card">
                    <img src={Tushar} alt="Coordinator 2" className="imagef" />
                    <p>Prof. Tushar Gohil</p>
                </div>
                <div className="image-card">
                    <img src={AnkitK} alt="Coordinator 3" className="imagef" />
                    <p>Dr. Ankit Kharwar</p>
                </div>
                
              
            </div>
            
        </div>
        <div className="converse">
            <h1 className="heading">Student Event Heads</h1>
            <div className="image-grid">
               
                <div className="image-card">
                    <img src={AbhishekDhanani} alt="Coordinator 2" className="imageh" />
                    <p>Abhishek Dhanani</p>
                </div>
                <div className="image-card">
                    <img src={MalavRadia} alt="Coordinator 3" className="imageh" />
                    <p>Malav Radia</p>
                </div>
                <div className="image-card">
                    <img src={DiyaPatel} alt="Coordinator 1" className="imageh" />
                    <p>Diya Patel</p>
                </div>
               
              
            </div>
            
        </div>
        <div className="converse">
            <h1 className="heading">Event Volunteers</h1>
            <div className="image-grid">
                <div className="image-card">
                    <img src={RahulSoni} alt="Coordinator 1" className="imagev" />
                    <p>Rahul Soni</p>
                </div>
                <div className="image-card">
                    <img src={DeepPatel} alt="Coordinator 2" className="imagev" />
                    <p>Deep Patel</p>
                </div>
                <div className="image-card">
                    <img src={MananChodvadiya} alt="Coordinator 3" className="imagev" />
                    <p>Manan Chodvadiya</p>
                </div>
                <div className="image-card">
                    <img src={VishvaGohil} alt="Coordinator 4" className="imagev" />
                    <p>Vishva Gohil</p>
                </div>
                <div className="image-card">
                    <img src={RishiGinoya} alt="Coordinator 5" className="imagev" />
                    <p>Rishi Ginoya</p>
                </div>
              
              
            </div>
            
        </div>
        <Footer/>
        </>
    );
}

export default Cybersiege;
