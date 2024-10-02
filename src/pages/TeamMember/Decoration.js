import React from 'react';
import { Link } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import great from "./great.png";
import Footer from '../../components/Footer';
import amee from '../../team/decoration/amee.png';
import diya from '../../team/decoration/diya.png';
import arya from '../../team/decoration/arya.png';
import ayushi from '../../team/decoration/ayushi.png';
import dhvani from '../../team/decoration/dhvani.png';
import foram from '../../team/decoration/foram.png';
import hareshwari from '../../team/decoration/hareshwari.png';
import hasti from '../../team/decoration/hasti.png';
import himaja from '../../team/decoration/himaja.png';
import hiral from '../../team/decoration/hiral.png';
import jensi from '../../team/decoration/jensi.png';
import kanvi from '../../team/decoration/kanvi.png';
import kashvi from '../../team/decoration/kashvi.png';
import kavya from '../../team/decoration/kavya.png';
import krina from '../../team/decoration/krina.png';
import krupa from '../../team/decoration/krupa.png';
import nishita from '../../team/decoration/nishita.png';
import radha from '../../team/decoration/radha.png';
import shruti from '../../team/decoration/shruti.png';
import suhani from '../../team/decoration/suhani.png';
import tvisha from '../../team/decoration/tvisha.png';
import varna from '../../team/decoration/varna.png';
import vedanshi from '../../team/decoration/vedanshi.png';
import veena from '../../team/decoration/veena.png';
import virali from '../../team/decoration/virali.png';

function Decoration() {
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
              <Link to="/decoration-team" >Decoration</Link>
            </h1>
        </div>
        </div>
        {/* <div className="converse">
            <h1 className="heading">Faculty Coordinators</h1>
            <div className="image-grid">
                <div className="image-card">
                    <img src={h} alt="Coordinator 1" className="imagef" />
                </div>
                <div className="image-card">
                    <img src={h} alt="Coordinator 2" className="imagef" />
                </div>
                <div className="image-card">
                    <img src={h} alt="Coordinator 3" className="imagef" />
                </div>
                <div className="image-card">
                    <img src={h} alt="Coordinator 4" className="imagef" />
                </div>
              
            </div>
            
        </div> */}
        <div className="converse">
            <h1 className="heading">Team Coordinators</h1>
            <div className="image-grid">
                <div className="image-card">
                    <img src={amee} alt="Coordinator 1" className="imageh" />
                    <p>Amee Pansuriya</p>
                </div>
                <div className="image-card">
                    <img src={diya} alt="Coordinator 2" className="imageh" />
                    <p>Diya Moradiya</p>
                </div>
               
              
            </div>
            



            
        </div>
        <div className="converse">
            <h1 className="heading">Team Members</h1>
            <div className="image-grid">
                <div className="image-card">
                    <img src={arya} alt="Coordinator 1" className="imagev" />
                    <p>Arya Patel</p>
                </div>
                <div className="image-card">
                    <img src={ayushi} alt="Coordinator 2" className="imagev" />
                    <p>Aayushi Chodvadiya</p>
                </div>
                <div className="image-card">
                    <img src={dhvani} alt="Coordinator 3" className="imagev" />
                    <p>Dhvani Patel</p>
                </div>
                <div className="image-card">
                    <img src={foram} alt="Coordinator 4" className="imagev" />
                    <p>Foram boghara</p>
                </div>
                <div className="image-card">
                    <img src={hareshwari} alt="Coordinator 5" className="imagev" />
                    <p>Hareshvari</p>
                </div>
                <div className="image-card">
                    <img src={hasti} alt="Coordinator 6" className="imagev" />
                    <p>Hasti Nakarani</p>
                </div>
                <div className="image-card">
                    <img src={himaja} alt="Coordinator 1" className="imagev" />
                    <p>Himaja</p>
                </div>
                <div className="image-card">
                    <img src={hiral} alt="Coordinator 2" className="imagev" />
                    <p>Hirali Patel</p>
                </div>
                <div className="image-card">
                    <img src={jensi} alt="Coordinator 3" className="imagev" />
                    <p>Jensi tagadiya</p>
                </div>
                <div className="image-card">
                    <img src={kanvi} alt="Coordinator 4" className="imagev" />
                    <p>Kanvi Ghoghari</p>
                </div>
                <div className="image-card">
                    <img src={kashvi} alt="Coordinator 5" className="imagev" />
                    <p>Kashvi Patel</p>
                </div>
                <div className="image-card">
                    <img src={kavya} alt="Coordinator 6" className="imagev" />
                    <p>Kavya Bhalala</p>
                </div>
                <div className="image-card">
                    <img src={krina} alt="Coordinator 1" className="imagev" />
                    <p>Krina Sutariya</p>
                </div>
                <div className="image-card">
                    <img src={krupa} alt="Coordinator 2" className="imagev" />
                    <p>Krupa dungrani</p>
                </div>
                <div className="image-card">
                    <img src={nishita} alt="Coordinator 3" className="imagev" />
                    <p>Nishita Paladiya</p>
                </div>
                <div className="image-card">
                    <img src={radha} alt="Coordinator 4" className="imagev" />
                    <p>Radha Zadafiya</p>
                </div>
                <div className="image-card">
                    <img src={shruti} alt="Coordinator 5" className="imagev" />
                    <p>Shruti Gajera</p>
                </div>
                <div className="image-card">
                    <img src={suhani} alt="Coordinator 6" className="imagev" />
                    <p>Suhani Padmani</p>
                </div>
                <div className="image-card">
                    <img src={tvisha} alt="Coordinator 1" className="imagev" />
                    <p>Twisha Savani</p>
                </div>
                <div className="image-card">
                    <img src={varna} alt="Coordinator 2" className="imagev" />
                    <p>Varna Thummar</p>
                </div>
                <div className="image-card">
                    <img src={vedanshi} alt="Coordinator 3" className="imagev" />
                    <p>Vedanshi ponkia</p>
                </div>
                <div className="image-card">
                    <img src={veena} alt="Coordinator 4" className="imagev" />
                    <p>Patel Veena</p>
                </div>
                <div className="image-card">
                    <img src={virali} alt="Coordinator 5" className="imagev" />
                    <p>Virali Joshi</p>
                </div>
                
              
            </div>
            
        </div>
        <Footer/>
        </>
    );
}

export default Decoration;
