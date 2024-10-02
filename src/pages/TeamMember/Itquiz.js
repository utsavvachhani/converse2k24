import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../../components/ScrollToTop';
import great from './great.png';
import Footer from '../../components/Footer';

import PreshthaBodar from '../../team/Itquiz/PreshthaBodar.png';
import HitakshiDholakiya from '../../team/Itquiz/Hitakshi.png';
import KrishnaDabhi from '../../team/Itquiz/Krishna.png';
import RusheelDhandhalya from '../../team/Itquiz/Rusheel.png';
import TanishaAgarwal from '../../team/Itquiz/Tanisha.png';
import TishaChokshi from '../../team/Itquiz/Tisha.png';
import Mita from '../../team/faculty/Mita.png';
import Tushar from '../../team/faculty/Tushar.png';
import Ashish from '../../team/faculty/Ashish.png';
import avtar from '../../team/avtar/maleA.png';

function Itquiz() {
  return (
    <>
      <ScrollToTop />
      <div className='teams-section'>
        <div className='lin'>
          <h1>
            <Link to='/'>Home</Link>
          </h1>
          <img src={great} className='symb' />
          <h1>
            <Link to='/team'>Team</Link>
          </h1>
          <img src={great} className='symb' />
          <h1>
            <Link to='/itquiz-team'>IT Quiz</Link>
          </h1>
        </div>
      </div>
      <div className='converse'>
        <h1 className='heading'>Faculty Event Heads</h1>
        <div className='image-grid'>
          <div className='image-card'>
            <img src={Mita} alt='Coordinator 1' className='imagef' />
            <p>Dr. Mita Parikh</p>
          </div>
          <div className='image-card'>
            <img src={Tushar} alt='Coordinator 2' className='imagef' />
            <p>Prof. Tushar Gohil</p>
          </div>
          <div className='image-card'>
            <img src={Ashish} alt='Coordinator 2' className='imagef' />
            <p>Prof. Ashish Kharvar</p>
          </div>
        </div>
      </div>
      <div className='converse'>
        <h1 className='heading'>Student Event Heads</h1>
        <div className='image-grid'>
          <div className='image-card'>
            <img src={PreshthaBodar} alt='Coordinator 1' className='imageh' />
            <p>Preshtha Bodar</p>
          </div>
          <div className='image-card'>
            <img src={TishaChokshi} alt='Coordinator 2' className='imageh' />
            <p>Tisha Chokshi</p>
          </div>
          <div className='image-card'>
            <img
              src={HitakshiDholakiya}
              alt='Coordinator 3'
              className='imageh'
            />
            <p>Hitakshi Dholakiya</p>
          </div>
        </div>
      </div>
      <div className='converse'>
        <h1 className='heading'> Event Volunteers </h1>
        <div className='image-grid'>
          <div className='image-card'>
            <img
              src={RusheelDhandhalya}
              alt='Coordinator 1'
              className='imagev'
            />

            <p>Rusheel Dhandhalya </p>
          </div>

          <div className='image-card'>
            <img src={KrishnaDabhi} alt='Coordinator 3' className='imagev' />

            <p>Krishna Dabhi </p>
          </div>
          <div className='image-card'>
            <img src={TanishaAgarwal} alt='Coordinator 4' className='imagev' />
            <p>Tanisha Agarwal </p>
          </div>
          <div className='image-card'>
            <img src={avtar} alt='Coordinator 4' className='imagev' />
            <p> Shlok Sutariya</p>
          </div>
          <div className='image-card'>
            <img src={avtar} alt='Coordinator 2' className='imagev' />
            <p>Vatsal Makvana</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Itquiz;
