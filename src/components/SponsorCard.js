import React from 'react';
import './SponsorCard.css';

import bul from './bul.jpg';
import car from './car.jpg';
import hos from './san.jpg';

import kashyap from './kashyap.png';

import fin from './fin.jpg';
import fins from './fins.png';
// import EmblaCarousel from './EmblaCarousel/index';

// const OPTIONS = { loop: true };
const SponsorCard = () => {
  return (
    // <EmblaCarousel
    //   slides={[

    //   ]}
    //   options={OPTIONS}
    // />
    <>


    <div className='sponsor-card'>
        <h3 className='sponsor-title'>Welcome</h3>
        <h4>
          We are proud to announce that our Converse 2k24 will be sponsored by
        </h4>
        <h3 className='sponsor-title'>_______________</h3>

        <img
          src={kashyap}
          alt='Sponsor Logo'
          height={124}
          width={220}
          className='sponsor-image'
        />
        <h3 className='sponsor-title'>Kashyap Solar</h3>
        <p className='sponsor-description'>  Visit Our <a href="https://kashyap.in/"> Website</a> for more Info.. </p>
    </div>


      <div className='sponsor-card'>
        <h3 className='sponsor-title'>Welcome</h3>
        <h4>
          We are proud to announce that our Converse 2k24 will be sponsored by
        </h4>
        <h3 className='sponsor-title'>_______________</h3>

        <img
          src={car}
          alt='Sponsor Logo'
          height={100}
          width={220}
          className='sponsor-image'
        />
        <h3 className='sponsor-title'>Careerline Education</h3>
        <p className='sponsor-description'></p>
      </div>
      <div className='sponsor-card'>
        <h3 className='sponsor-title'>Welcome</h3>
        <h4>
          We are proud to announce that our Converse 2k24 will be sponsored by
        </h4>
        <h3 className='sponsor-title'>_______________</h3>
        <img
          src={hos}
          alt='Sponsor Logo'
          className='sponsor-image'
          height={120}
          width={200}
        />
        <h3 className='sponsor-title'>House of sanskruti</h3>
        <p className='sponsor-description'></p>
      </div>
      <div className='sponsor-card'>
        <h3 className='sponsor-title'>Welcome</h3>
        <h4>
          We are proud to announce that our Converse 2k24 will be sponsored by
        </h4>
        <h3 className='sponsor-title'>_______________</h3>

        <img
          src={bul}
          alt='Sponsor Logo'
          height={100}
          width={220}
          className='sponsor-image'
        />
        <h3 className='sponsor-title'>Bull Rider</h3>
        <p className='sponsor-description'> </p>
      </div>
      <div className='sponsor-card'>
        <h3 className='sponsor-title'>Welcome</h3>
        <h4>
          We are proud to announce that our Converse 2k24 will be sponsored by
        </h4>
        <h3 className='sponsor-title'>_______________</h3>

        <img
          src={fin}
          alt='Sponsor Logo'
          height={100}
          width={220}
          className='sponsor-image'
        />
        <h3 className='sponsor-title'>Infinity Financial</h3>
        <p className='sponsor-description'> </p>
      </div>
      <div className='sponsor-card'>
        <h3 className='sponsor-title'>Welcome</h3>
        <h4>
          We are proud to announce that our Converse 2k24 will be sponsored by
        </h4>
        <h3 className='sponsor-title'>_______________</h3>

        <img
          src={fins}
          alt='Sponsor Logo'
          height={150}
          width={220}
          className='sponsor-image1'
        />
        <h3 className='sponsor-title'>Perfum House</h3>
        <p className='sponsor-description'> </p>
      </div>
    </>
  );
};

export default SponsorCard;
