import React from 'react';
import { Link } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import great from "./great.png";
import Footer from '../../components/Footer';
import DhruviKhunt from '../../team/Aiquiz/AI-Quiz_Dhruvi-2.png';
import JayPrajapati from '../../team/Aiquiz/AI_Quiz_Jay.png';
import MoxaSuhagiya from '../../team/Aiquiz/AI_Quiz_MoxaSuhagiya.png';
import HetRajpara from '../../team/Aiquiz/Ai_Quiz_Het.png';
import JenishBarvaliya from '../../team/Aiquiz/Ai_quiz_Jenish.png';
import KhushiDholariya from '../../team/Aiquiz/Ai_qyuz_Khushi.png';
import HiyaVasani from '../../team/Aiquiz/ai_quiz_hiya.png';
import Mukesh from '../../team/faculty/mukesh.png';
import Palak from '../../team/faculty/Palak.png';






function Aiquiz() {
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
              <Link to="/aiquiz-team" >AI Quiz</Link>
            </h1>
        </div>
        </div>
        <div className="converse">
            <h1 className="heading">Faculty Event Heads</h1>
            <div className="image-grid">
                <div className="image-card">
                    <img src={Mukesh} alt="Coordinator 1" className="imagef" />
                    <p>Prof. Mukesh Patel</p>
                </div>
                <div className="image-card">
                    <img src={Palak} alt="Coordinator 2" className="imagef" />
                    <p>Prof. Palak Desai</p>
                </div>
                
              
            </div>
            
        </div>
        <div className="converse">
            <h1 className="heading">Student Event Heads</h1>
            <div className="image-grid">
                <div className="image-card">
                    <img src={HetRajpara} alt="Coordinator 1" className="imageh" />
                    <p>Het Rajpara</p>
                </div>
                <div className="image-card">
                    <img src={JenishBarvaliya} alt="Coordinator 2" className="imageh" />
                    <p>Jenish Barvaliya </p>
                </div>
               
              
            </div>
            
        </div>
        <div className="converse">
            <h1 className="heading">Event Volunteers</h1>
            <div className="image-grid">
                <div className="image-card">
                    <img src={MoxaSuhagiya} alt="Coordinator 1" className="imagev" />
                    <p>Moxa Suhagiya</p>
                </div>
                <div className="image-card">
                    <img src={DhruviKhunt} alt="Coordinator 2" className="imagev" />
                    <p>Dhruvi Khunt</p>
                </div>
                <div className="image-card">
                    <img src={HiyaVasani} alt="Coordinator 3" className="imagev" />
                    <p>Hiya Vasani</p>
                </div>
                <div className="image-card">
                    <img src={KhushiDholariya} alt="Coordinator 4" className="imagev" />
                    <p>Hiya Vasani</p>
                </div>
                <div className="image-card">
                    <img src={JayPrajapati} alt="Coordinator 5" className="imagev" />
                    <p>Jay Prajapati </p>
                </div>
                
              
            </div>
            
        </div>
        <Footer/>
        </>
    );
}

export default Aiquiz;
