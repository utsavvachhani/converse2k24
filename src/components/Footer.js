import React from 'react';
import { Link } from 'react-router-dom';
import instagram from './insta.png';
function Footer() {
  return (
    <>
      <div className='back'>
        <footer className='footer'>
          <div className='footer-section'>
            <h4>Head of Department</h4>
            <p>Dr. Vivaksha Jariwala</p>
          </div>
          <div className='footer-section'>
            <h4>Faculty Coordinators</h4>
            <p>Prof. Hiren Vavaiya</p>
            <p>Prof. Ankit Patel</p>
            <p>Prof. Karishma Desai </p>
            <p>Prof. Nitya Komalan </p>
          </div>
          <div className='footer-section'>
            <h4>Student Heads</h4>
            <p>Ayush Polara </p>
            <p>Uttam Moradiya </p>
            <p>Shreya Chopra </p>
            <p>Mitarsh Savaliya </p>
            <p>Jenish Sonani </p>
            <p>Harsh Maniya </p>
            <p>Jensi Ghadiya</p>
          </div>
          <div className='footer-section'>
            <h4>Web Team</h4>
            <p><a href='https://github.com/utsavvachhani'>Utsav Vachhani</a></p>
            <p>Meet Patel</p>
          </div>
        </footer>
        <section className='her'>
          <div className='container'>
            <h2 className='sub'>Follow us on instagram !</h2>
            <div>
              <a
                href='https://www.instagram.com/converse_2k24?igsh=bmpwbnBxOHVpeWQz'
                className=''
                target='_blank'
                alt='Converse2k24'
              >
                <img src={instagram} alt='instagram' />
              </a>
            </div>
            <div>
              <p class='text-sm'>© Converse 2024 - All Rights Reserved</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Footer;
