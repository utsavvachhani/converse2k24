import './App.css';
import { Routes,Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import About from './pages/About';
import Events from './pages/Events';
import TeamsSection from './pages/TeamSection';
import Converse from './pages/TeamMember/Converse';
import Graphics from './pages/TeamMember/Graphics';
import Marketing from './pages/TeamMember/Marketing';

import Register from './Register';
import Thankyou from './Thankyou';
import RegisterTeam from './RegisterTeam';

import Decoration from './pages/TeamMember/Decoration';
import NonTech from './pages/TeamMember/NonTech';
import LogoHunt from './pages/TeamMember/LogoHunt';
import Itquiz from './pages/TeamMember/Itquiz';
import Bugbuzz from './pages/TeamMember/Bugbuzz';
import Codathon from './pages/TeamMember/Codathon';
import Pyit from './pages/TeamMember/Pyit';
import Aimemes from './pages/TeamMember/Aimemes';
import Techdebate from './pages/TeamMember/Techdebate';
import Cybersiege from './pages/TeamMember/Cybersiege';
import Webwave from './pages/TeamMember/Webwave';
import Techevent from './pages/event-type/Techevent';
import Nontech from './pages/event-type/Nontech';
import AboutPage from './pages/AboutPage';
import Webteam from "./pages/TeamMember/Webteam";

import SchedulePage from './pages/SchedulePage';
import LogoHuntPage from './pages/EventPage/LogoHuntPage';
import Itquizpage from './pages/EventPage/Itquizpage';
import Pyitpage from './pages/EventPage/Pyitpage';
import Bugbuzzpage from './pages/EventPage/Bugbuzzpage';
import Codathonpage from './pages/EventPage/Codathonpage';
import Aimemespage from './pages/EventPage/Aimemespage';
import Techdebatepage from './pages/EventPage/Techdebatepage';
import Cybersiegepage from './pages/EventPage/Cybersiegepage';
import Webwavepage from './pages/EventPage/Webwavepage';
import Aiquizpage from './pages/EventPage/Aiquizpage';




import LevelZeroPage from './pages/Noneventpage/LevelZeroPage';
import MusicalMysteryPage from './pages/Noneventpage/MusicalMysteryPage';
import IPLAuctionPage from './pages/Noneventpage/IPLAuctionPage';
import BGMIPage from './pages/Noneventpage/BGMIPage';
import MindOverMatterPage from './pages/Noneventpage/MindOverMatterPage';
import ValorantBlitzPage from './pages/Noneventpage/ValorantBlitzPage';
import BlindNavigatorPage from './pages/Noneventpage/BlindNavigatorPage';
import TreasureHuntPage from './pages/Noneventpage/TreasureHuntPage';
import Aiquiz from './pages/TeamMember/Aiquiz';


function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="events" element={<Events/>}/>
    <Route path="team" element={<TeamsSection/>}/>
    <Route path="converse-team" element={<Converse/>}/>
    <Route path="nontech-team" element={<NonTech/>}/>
    <Route path="graphics-team" element={<Graphics/>}/>
    <Route path="decoration-team" element={<Decoration/>}/>
    <Route path="marketing-team" element={<Marketing/>}/>
    <Route path="tech-team" element={<Webteam/>}/>

    
    <Route path="register" element={<Register/>}/>
    <Route path="thankyou" element={<Thankyou/>}/>
    <Route path="registerteam" element={<RegisterTeam/>}/>
    

    <Route path="logohunt-team" element={<LogoHunt/>}/>
    <Route path="itquiz-team" element={<Itquiz/>}/>
    <Route path="bugbuzz-team" element={<Bugbuzz/>}/>
    <Route path="codathon-team" element={<Codathon/>}/>
    <Route path="pyit-team" element={<Pyit/>}/>
    <Route path="aimemes-team" element={<Aimemes/>}/>
    <Route path="aiquiz-team" element={<Aiquiz/>}/>
    <Route path="techdebate-team" element={<Techdebate/>}/>
    <Route path="cybersiege-team" element={<Cybersiege/>}/>
    <Route path="webwave-team" element={<Webwave/>}/>
    <Route path="tech-event" element={<Techevent/>}/>
    <Route path="nontech-event" element={<Nontech/>}/>
    <Route path="aboutpage" element={<AboutPage/>}/>
    
    <Route path="schedule" element={<SchedulePage/>}/>


     {/* Tech event page */}
    <Route path="logohunt-event" element={<LogoHuntPage/>}/>
    <Route path="itquiz-event" element={<Itquizpage/>}/>
    <Route path="bugbuzz-event" element={<Bugbuzzpage/>}/>
    <Route path="codathon-event" element={<Codathonpage/>}/>
    <Route path="pyit-event" element={<Pyitpage/>}/>
    <Route path="aimemes-event" element={<Aimemespage/>}/>
    <Route path="techdebate-event" element={<Techdebatepage/>}/>
    <Route path="cybersiege-event" element={<Cybersiegepage/>}/>
    <Route path="webwave-event" element={<Webwavepage/>}/>
    <Route path="aiquiz-event" element={<Aiquizpage/>}/>



    {/* Non-tech event page */}
    <Route path="levelzero-event" element={<LevelZeroPage/>}/>
    <Route path="musical-event" element={<MusicalMysteryPage/>}/>
    <Route path="ipl-event" element={<IPLAuctionPage/>}/>
    <Route path="bgmi-event" element={<BGMIPage/>}/>
    <Route path="mindover-event" element={<MindOverMatterPage/>}/>
    <Route path="valorant-event" element={<ValorantBlitzPage/>}/>
    <Route path="blindnavigation-event" element={<BlindNavigatorPage/>}/>
    <Route path="Treasure-event" element={<TreasureHuntPage/>}/>
   
    </Routes>
  
    </>
  );
}
export default App;







// import React, { useState } from 'react';
// import './App.css';
// import { Routes, Route } from 'react-router-dom';
// import HomePage from './pages/Homepage';
// import About from './pages/About';
// import Events from './pages/Events';

// function App() {
//   const [gifPosition, setGifPosition] = useState({ x: 0, y: 0 });
//   const [showGif, setShowGif] = useState(false);

//   const handleClick = (event) => {
//     if (event.target.tagName !== 'A') {
//       const x = event.clientX;
//       const y = event.clientY;

//       setGifPosition({ x, y });
//       setShowGif(true);

//       // Hide the GIF after 1 second
//       setTimeout(() => setShowGif(false), 1000);
//     }
//   };

//   return (
//     <div className="App" onClick={handleClick} style={{ height: '100vh' }}>
//       {showGif && (
//         <img
//           src="https://i.pinimg.com/originals/e4/d2/c1/e4d2c1d0da356797359acd9270bcdd77.gif"
//           alt="Click Animation"
//           style={{
//             position: 'absolute',
//             top: gifPosition.y,
//             left: gifPosition.x,
//             transform: 'translate(-50%, -50%)',
//             pointerEvents: 'none',
//             zIndex: 1000,
//           }}
//         />
//       )}

//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="about" element={<About />} />
//         <Route path="events" element={<Events />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
