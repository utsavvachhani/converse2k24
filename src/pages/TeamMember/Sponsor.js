import React from 'react';
import { Link } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTop';
import great from "./great.png";

function Sponsor() {
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
              <Link to="/sponsor-team" >Sponsorship</Link>
            </h1>
        </div>
        </div>
        <div className="converse">
            <h1 className="heading">Faculty Event Heads</h1>
            <div className="image-grid">
                <div className="image-card">
                    <img src="https://th.bing.com/th/id/OIG1.B3PgoOGGZbZ_okUN.Gye?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Coordinator 1" className="image" />
                </div>
                <div className="image-card">
                    <img src="https://th.bing.com/th/id/OIG1.B3PgoOGGZbZ_okUN.Gye?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Coordinator 2" className="image" />
                </div>
                <div className="image-card">
                    <img src="https://th.bing.com/th/id/OIG1.B3PgoOGGZbZ_okUN.Gye?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Coordinator 3" className="image" />
                </div>
                <div className="image-card">
                    <img src="https://th.bing.com/th/id/OIG1.B3PgoOGGZbZ_okUN.Gye?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Coordinator 4" className="image" />
                </div>
              
            </div>
            
        </div>
        <div className="converse">
            <h1 className="heading">Student Event Heads</h1>
            <div className="image-grid">
                <div className="image-card">
                    <img src="https://th.bing.com/th/id/OIG1.B3PgoOGGZbZ_okUN.Gye?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Coordinator 1" className="image" />
                </div>
                <div className="image-card">
                    <img src="https://th.bing.com/th/id/OIG1.B3PgoOGGZbZ_okUN.Gye?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Coordinator 2" className="image" />
                </div>
                <div className="image-card">
                    <img src="https://th.bing.com/th/id/OIG1.B3PgoOGGZbZ_okUN.Gye?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Coordinator 3" className="image" />
                </div>
                <div className="image-card">
                    <img src="https://th.bing.com/th/id/OIG1.B3PgoOGGZbZ_okUN.Gye?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Coordinator 4" className="image" />
                </div>
              
            </div>
            
        </div>
        <div className="converse">
            <h1 className="heading">Student Volunteers</h1>
            <div className="image-grid">
                <div className="image-card">
                    <img src="https://th.bing.com/th/id/OIG1.B3PgoOGGZbZ_okUN.Gye?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Coordinator 1" className="image" />
                </div>
                <div className="image-card">
                    <img src="https://th.bing.com/th/id/OIG1.B3PgoOGGZbZ_okUN.Gye?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Coordinator 2" className="image" />
                </div>
                <div className="image-card">
                    <img src="https://th.bing.com/th/id/OIG1.B3PgoOGGZbZ_okUN.Gye?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Coordinator 3" className="image" />
                </div>
                <div className="image-card">
                    <img src="https://th.bing.com/th/id/OIG1.B3PgoOGGZbZ_okUN.Gye?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Coordinator 4" className="image" />
                </div>
                <div className="image-card">
                    <img src="https://th.bing.com/th/id/OIG1.B3PgoOGGZbZ_okUN.Gye?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Coordinator 5" className="image" />
                </div>
                <div className="image-card">
                    <img src="https://th.bing.com/th/id/OIG1.B3PgoOGGZbZ_okUN.Gye?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Coordinator 6" className="image" />
                </div>
              
            </div>
            
        </div>
        
        </>
    );
}

export default Sponsor;
