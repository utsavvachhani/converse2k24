import React from 'react';
import { Link } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import great from "./great.png";
import Footer from '../../components/Footer';
import RajKachhadiya from '../../team/aimemes/AIMeme_Head_Raj.png';
import ZeelBoghra from '../../team/aimemes/AIMeme_Zeel.png';
import MitulTariwala from '../../team/aimemes/AIMeme_head_Mitul.png';
import ViraliJoshi from '../../team/aimemes/AImemes_virali.png';
import VatsalMakwana from '../../team/aimemes/Aimemes_Vatsal.png';
import AyushiKyada from '../../team/aimemes/aimemes_ayushi.png';
import Dhruti from '../../team/faculty/Dhruti.png';
// import KrishnaD from '../../team/faculty/Dhruti.png';
import avtar from '../../team/avtar/femaleA.png';
import avtar1 from '../../team/avtar/maleA.png';



function Aimemes() {
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
              <Link to="/aimemes-team" >AI Memes</Link>
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
                    <p>Dr. Krishna Delvadiya</p>
                </div>
                
              
            </div>
            
        </div>
        <div className="converse">
            <h1 className="heading">Student Event Heads</h1>
            <div className="image-grid">
                
                <div className="image-card">
                    <img src={MitulTariwala} alt="Coordinator 2" className="imageh" />
                    <p>Mitul Tariwala</p>
                </div>
                <div className="image-card">
                    <img src={RajKachhadiya} alt="Coordinator 1" className="imageh" />
                    <p>Raj Kachhadiya</p>
                </div>
               
              
            </div>
            
        </div>
        <div className="converse">
            <h1 className="heading">Event Volunteers</h1>
            <div className="image-grid">
                <div className="image-card">
                    <img src={ZeelBoghra} alt="Coordinator 1" className="imagev" />
                    <p>Zeel Boghra</p>
                </div>
                <div className="image-card">
                    <img src={ViraliJoshi} alt="Coordinator 2" className="imagev" />
                    <p>Virali Joshi</p>
                </div>
                <div className="image-card">
                    <img src={VatsalMakwana} alt="Coordinator 3" className="imagev" />
                    <p>Vatsal Makwana</p>
                </div>
                <div className="image-card">
                    <img src={AyushiKyada} alt="Coordinator 4" className="imagev" />
                    <p>Ayushi Kyada</p>
                </div>
                <div className="image-card">
                    <img src={avtar1} alt="Coordinator 5" className="imagev" />
                    <p>Veer Patel</p>
                </div>
                
              
            </div>
            
        </div>
        <Footer/>
        </>
    );
}

export default Aimemes;
