import React from 'react';
import { Link } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import great from "./great.png";
import Footer from '../../components/Footer';
import DevButani from '../../team/marketing/DevButani.png';
import JayReshamwala from '../../team/marketing/JayReshamwala.png';
import KhushiShah from '../../team/marketing/KhushiShah.png';
import ManavAvaiya from '../../team/marketing/ManavAvaiya.png';
import MitShah from '../../team/marketing/MitShah.png';
import PuravDesai from '../../team/marketing/PuravDesai.png';
import SarahShaikh from '../../team/marketing/SarahShaikh.png';
import VrundanSoni from '../../team/marketing/VrundanSoni.png';



function Marketing() {
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
              <Link to="/marketing-team" >Marketing</Link>
            </h1>
        </div>
        </div>
  
            
        
        <div className="converse">
            <h1 className="heading">Team Coordinators </h1>
            <div className="image-grid">
                <div className="image-card">
                    <img src={JayReshamwala} alt="Coordinator 1" className="imageh" />
                    <p>Jay Reshamwala</p>
                </div>
                <div className="image-card">
                    <img src={DevButani} alt="Coordinator 2" className="imageh" />
                    <p>Dev Butani</p>
                    <p>Hi</p>
                </div>

              
            </div>
            
        </div>
        <div className="converse">
            <h1 className="heading">Team Members</h1>
            <div className="image-grid">
                <div className="image-card">
                    <img src={KhushiShah} alt="Coordinator 1" className="imagev" />
                    <p>Khushi Shah</p>
                </div>
                <div className="image-card">
                    <img src={ManavAvaiya} alt="Coordinator 2" className="imagev" />
                    <p>Manav Avaiya</p>
                </div>
                <div className="image-card">
                    <img src={MitShah} alt="Coordinator 3" className="imagev" />
                    <p>Mit Shah</p>
                </div>
                <div className="image-card">
                    <img src={PuravDesai} alt="Coordinator 4" className="imagev" />
                    <p>Purav Desai</p>
                </div>
                <div className="image-card">
                    <img src={SarahShaikh} alt="Coordinator 5" className="imagev" />
                    <p>Sarah Shaikh </p>
                </div>
                <div className="image-card">
                    <img src={VrundanSoni} alt="Coordinator 6" className="imagev" />
                    <p>Vrundan Soni </p>
                </div>
              
            </div>
            
        </div>
        <Footer/>
        </>
    );
}

export default Marketing;
