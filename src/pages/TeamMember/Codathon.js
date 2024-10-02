import React from 'react';
import { Link } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import great from "./great.png";
import Footer from '../../components/Footer';
import DhruvishParikh from '../../team/codathon/Dhruvish.png';
import HarshilGajipara from '../../team/codathon/Harshil.png';
import JeeyaTandel from '../../team/codathon/Jeeya.png';
import KrishaKeraliya from '../../team/codathon/Krisha.png';
import NencyKhunt from '../../team/codathon/Nency.png';
import RenilDholariya from '../../team/codathon/RenilDholariya.png';
import ShrutiGajera from '../../team/codathon/Shruti.png';
import Ashish from '../../team/faculty/Ashish.png';
import Apurva from '../../team/faculty/Apurv.png';
import Mitul from '../../team/faculty/Apurv.png';
import avtar from '../../team/avtar/maleA.png';

function Codathon() {
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
              <Link to="/codathon-team" >Codathon</Link>
            </h1>
        </div>
        </div>
        <div className="converse">
            <h1 className="heading">Faculty Event Heads</h1>
            <div className="image-grid">
                <div className="image-card">
                    <img src={Ashish} alt="Coordinator 1" className="imagef" />
                    <p>Prof. Ashish Kharvar</p>
                </div>
                <div className="image-card">
                    <img src={Apurva} alt="Coordinator 2" className="imagef" />
                    <p>Prof. Apurva M.</p>
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
                    <img src={HarshilGajipara} alt="Coordinator 1" className="imageh" />
                    <p>Harshil Gajipara</p>
                </div>
                <div className="image-card">
                    <img src={JeeyaTandel} alt="Coordinator 2" className="imageh" />
                    <p>Jeeya Tandel</p>
                </div>
               
              
            </div>
            
        </div>
        <div className="converse">
            <h1 className="heading">Event Volunteers</h1>
            <div className="image-grid">
               
                <div className="image-card">
                    <img src={NencyKhunt} alt="Coordinator 2" className="imagev" />
                    <p>Nency Khunt</p>
                </div>
                
                <div className="image-card">
                    <img src={ShrutiGajera} alt="Coordinator 4" className="imagev" />
                    <p>Shruti Gajera</p>
                </div>
                <div className="image-card">
                    <img src={KrishaKeraliya} alt="Coordinator 5" className="imagev" />
                    <p>KrishaKeraliya</p>
                </div>
                <div className="image-card">
                    <img src={RenilDholariya} alt="Coordinator 3" className="imagev" />
                    <p>Renil Dholariya</p>
                </div>
                <div className="image-card">
                    <img src={DhruvishParikh} alt="Coordinator 1" className="imagev" />
                    <p>Dhruvish Parikh</p>
                </div>
               
              
            </div>
            
        </div>
        <Footer/>
        </>
    );
}

export default Codathon;
