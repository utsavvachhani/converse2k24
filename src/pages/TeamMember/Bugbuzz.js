import React from 'react';
import { Link } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import great from "./great.png";
import Footer from '../../components/Footer';
import SahilSojitra from '../../team/bugbuzz/SahilSojitra.png';
import ManavAvaiya from '../../team/bugbuzz/ManavAvaiya.png';
import JashChheta from '../../team/bugbuzz/JashChheta.png';
import NeelMandanka from '../../team/bugbuzz/NeelMandanka.png';
import VachhaniUtsav from '../../team/bugbuzz/VachhaniUtsav.png';
import KarunaPatel from '../../team/faculty/Karuna.png';
import ForamPatel from '../../team/faculty/Foram.png';
import DhyaniJoshi from '../../team/faculty/Dhyani.png';
import avtar from '../../team/avtar/maleA.png';
import krish from "../../team/bugbuzz/Bug Buzz_Vanani Krish.png"
import krishna from "../../team/bugbuzz/Bugbuzz_KrishnaDesai.png"
import akshat from "../../team/bugbuzz/BugBuzz_Akshatmoradiya.jpg"

function Bugbuzz() {
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
              <Link to="/bugbuzz-team" >Bug Buzz</Link>
            </h1>
        </div>
        </div>
        <div className="converse">
            <h1 className="heading">Faculty Event Heads</h1>
            <div className="image-grid">
                <div className="image-card">
                    <img src={KarunaPatel} alt="Coordinator 1" className="imagef" />
                    <p>Prof. Karuna Patel</p>
                </div>
                <div className="image-card">
                    <img src={ForamPatel} alt="Coordinator 2" className="imagef" />
                    <p>Prof. Foram Patel</p>
                </div>
                <div className="image-card">
                    <img src={DhyaniJoshi} alt="Coordinator 2" className="imagef" />
                    <p>Prof. Dhyani Joshi </p>
                </div>
               
                
              
            </div>
            
        </div>
        <div className="converse">
            <h1 className="heading">Student Event Heads</h1>
            <div className="image-grid">
                <div className="image-card">
                    <img src={SahilSojitra} alt="Coordinator 1" className="imageh" />
                    <p>Sahil Sojitra</p>
                </div>
                <div className="image-card">
                    <img src={krish} alt="Coordinator 2" className="imageh" />
                    <p>Krish Vanani</p>
                </div>
                <div className="image-card">
                    <img src={krishna} alt="Coordinator 3" className="imageh" />
                    <p>Krishna Desai</p>
                </div>
              
              
            </div>
            
        </div>
        <div className="converse">
            <h1 className="heading">Event Volunteers</h1>
            <div className="image-grid">
                <div className="image-card">
                    <img src={ManavAvaiya} alt="Coordinator 1" className="imagev" />
                    <p>Manav Avaiya</p>
                </div>
                <div className="image-card">
                    <img src={JashChheta} alt="Coordinator 2" className="imagev" />
                    <p>Jash Chheta</p>
                </div>
                <div className="image-card">
                    <img src={NeelMandanka} alt="Coordinator 3" className="imagev" />
                    <p>Neel Mandanka </p>
                </div>
                <div className="image-card">
                    <img src={VachhaniUtsav} alt="Coordinator 4" className="imagev" />
                    <p>Vachhani Utsav</p>
                </div>
                <div className="image-card">
                    <img src={avtar} alt="Coordinator 5" className="imagev" />
                    <p>Zenith Dayani</p>
                </div>
                <div className="image-card">
                    <img src={akshat} alt="Coordinator 6" className="imagev" />
                    <p>Akshat Moradiya</p>
                </div>
              
              
            </div>
            
        </div>
        <Footer/>
        </>
    );
}

export default Bugbuzz;
