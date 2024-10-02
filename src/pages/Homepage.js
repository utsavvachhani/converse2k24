import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import SponsorCard from '../components/SponsorCard';

// import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
// import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';

const HomePage = () => {
  // const teams = [
  //   {
  //     title: 'Career line ',
  //     imageSrc:
  //       'https://th.bing.com/th/id/OIG1.B3PgoOGGZbZ_okUN.Gye?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn',
  //     link: '/converse-team',
  //   },
  //   {
  //     title: 'House of sanskruti',
  //     imageSrc:
  //       'https://th.bing.com/th/id/OIG4.lL1HeudmWRX2k6hOXZs6?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn',
  //     link: '/web-team',
  //   },
  //   {
  //     title: 'Bull Rider',
  //     imageSrc:
  //       'https://th.bing.com/th/id/OIG1.XqMnE8S_.9bYYPvoOy3.?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn',
  //     link: '/webwave-team',
  //   },
  // ];
  return (
    <>
      <Header />
      <ScrollToTop />
      <div className='hompage'>
        <div className='conten'>
          <div className='explor-section'>
            <p className='tilaks'>EXPLORE THE FEST</p>
            <ul className='menu'>
              <li>
                <Link to='/events' className='button-style'>
                  {/* <CodeOutlinedIcon sx={{ fontSize: 40 }} /> */}
                  EVENT INFO
                </Link>
              </li>
              <li>
                <Link to='/schedule' className='button-style'>
                  {/* <EditCalendarOutlinedIcon sx={{ fontSize: 40 }} /> */}
                  SCHEDULE
                </Link>
              </li>
              <li>
                <Link to='/team' className='button-style'>
                  {/* <PeopleOutlineOutlinedIcon sx={{ fontSize: 40 }} /> */}
                  TEAMS
                </Link>
              </li>
              <li>
                <Link to='/aboutpage' className='button-style'>
                  {/* <InfoOutlinedIcon sx={{ fontSize: 40 }} /> */}
                  ABOUT CONVERSE
                </Link>
              </li>
              {/* <li><Link to="/sponsors" >SPONSORS</Link></li> */}
            </ul>
            <p className='welcom-message'>
              WELCOME TO 2024 EDITION OF CONVERSE 
            </p>
          </div>
          <div className='tilak'>
            <div>
              <p className='tilaks'>Our Sponsors</p>
            </div>
            <div className='spo'>
              <SponsorCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
