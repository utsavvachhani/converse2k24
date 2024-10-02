import React from 'react';
import { Link } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import great from "./great.png";
import Footer from '../../components/Footer';
import DhruvitKuvadiya from '../../team/pyiti/PY-IT_Dhruvit.png';
import Krish from '../../team/pyiti/PY-IT_Krish.png';
import KrutiKikani from '../../team/pyiti/PY-IT_kruti.png';
import PriyaLathiya from '../../team/pyiti/PY-IT_priya.png';
import Priyanshu from '../../team/pyiti/PY-IT_priyanshu.png';
import ShrutiKakadiya from '../../team/pyiti/PY-IT_shruti.png';
import TishaChauhan from '../../team/pyiti/Py-IT_TISHA.png';
import GranthSavaliya from '../../team/pyiti/PY-IT_Granth.PNG';
import Vivaksha from '../../team/faculty/vivaksha.png';
import Mukesh from '../../team/faculty/mukesh.png';



function Pyit() {
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
              <Link to="/pyit-team" >PY-IT</Link>
            </h1>
        </div>
        </div>
        <div className="converse">
            <h1 className="heading">Faculty Coordinators</h1>
            <div className="image-grid">
                <div className="image-card">
                    <img src={Vivaksha} alt="Coordinator 1" className="imagef" />
                    <p>Dr. Vivaksha Jariwala</p>
                </div>
                <div className="image-card">
                    <img src={Mukesh} alt="Coordinator 2" className="imagef" />
                    <p>Prof. Mukesh Patel</p>
                </div>
               
            </div>
            
        </div>
        <div className="converse">
            <h1 className="heading">Student Event Heads</h1>
            <div className="image-grid">
                <div className="image-card">
                    <img src={ShrutiKakadiya} alt="Coordinator 1" className="imageh" />
                    <p>Shruti Kakadiya</p>
                </div>
                <div className="image-card">
                    <img src={KrutiKikani} alt="Coordinator 2" className="imageh" />
                    <p>Kruti Kikani</p>
                </div>
               
              
            </div>
            
        </div>
        <div className="converse">
            <h1 className="heading">Event Volunteers</h1>
            <div className="image-grid">
                <div className="image-card">
                    <img src={TishaChauhan} alt="Coordinator 1" className="imagev" />
                    <p>Tisha Chauhan</p>
                </div>
                <div className="image-card">
                    <img src={DhruvitKuvadiya} alt="Coordinator 2" className="imagev" />
                    <p>Dhruvit Kuvadiya</p>
                </div>
                <div className="image-card">
                    <img src={PriyaLathiya} alt="Coordinator 3" className="imagev" />
                    <p>Priya Lathiya</p>
                </div>
                <div className="image-card">
                    <img src={GranthSavaliya} alt="Coordinator 4" className="imagev" />
                    <p>Granth Savaliya</p>
                </div>
                <div className="image-card">
                    <img src={Krish} alt="Coordinator 4" className="imagev" />
                    <p>Krish</p>
                </div>
                <div className="image-card">
                    <img src={Priyanshu} alt="Coordinator 4" className="imagev" />
                    <p>Priyanshu</p>
                </div>
              
              
            </div>
            
        </div>
        <Footer/>
        </>
    );
}

export default Pyit;
