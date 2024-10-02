import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../../components/ScrollToTop';
import great from './great.png';
import Footer from '../../components/Footer';
import harsh from '../../team/10core/harsh1.png';
import jensi from '../../team/10core/jensi2.png';
import mitarsh from '../../team/10core/mitarsh3.png';
import shreya from '../../team/10core/shreya4.png';

import ayush from '../../team/10core/ayush7.png';
import uttam from '../../team/10core/uttam8.png';
import tilak from '../../team/10core/tilak.png';
import jenish from '../../team/10core/jenish.png';
import keyur from '../../team/10core/keyur.png';
import Hiren from '../../team/faculty/Hiren.png';
import Ankit from '../../team/faculty/Ankit.png';
import Karishma from '../../team/faculty/Karishma.png';
import Nitya from '../../team/faculty/nitya.png';
import Utsav from '../../team/10core/VachhaniUtsav.png';
import Meet from '../../team/10core/meetpatel.png';

function Converse() {
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
            <Link to='/converse-team'>Converse</Link>
          </h1>
        </div>
      </div>
      <div className='converse'>
        <h1 className='heading'>Faculty Coordinators</h1>
        <div className='image-grid'>
          <div className='image-card'>
            <img src={Hiren} alt='Coordinator 2' className='imagef' />
            <p>Prof. Hiren Vavaiya</p>
          </div>
          <div className='image-card'>
            <img src={Ankit} alt='Coordinator 2' className='imagef' />
            <p>Prof. Ankit Patel</p>
          </div>
          <div className='image-card'>
            <img src={Karishma} alt='Coordinator 3' className='imagef' />
            <p>Prof. Karishma Desai</p>
          </div>
          <div className='image-card'>
            <img src={Nitya} alt='Coordinator 4' className='imagef' />
            <p>Prof. Nitya Komalan</p>
          </div>
        </div>
      </div>
      <div className='converse'>
        <h1 className='heading'>Student Coordinators</h1>
        <div className='image-grid'>
          <div className='image-card'>
            <img src={ayush} alt='Coordinator 4' className='imageh' />
            <p>Ayush Polara</p>
          </div>

          <div className='image-card'>
            <img src={mitarsh} alt='Coordinator 3' className='imageh' />
            <p>Mitarsh Savaliya</p>
          </div>
          <div className='image-card'>
            <img src={shreya} alt='Coordinator 4' className='imageh' />
            <p>Shreya Chopra</p>
          </div>
          <div className='image-card'>
            <img src={jenish} alt='Coordinator 3' className='imageh' />
            <p>Jenish Sonani</p>
          </div>
          <div className='image-card'>
            <img src={harsh} alt='Coordinator 1' className='imageh' />
            <p>Harsh Maniya</p>
          </div>
          <div className='image-card'>
            <img src={uttam} alt='Coordinator 2' className='imageh' />
            <p>Uttam Moradiya</p>
          </div>

          <div className='image-card'>
            <img src={jensi} alt='Coordinator 2' className='imageh' />
            <p>Jensi Ghadiya</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Converse;
