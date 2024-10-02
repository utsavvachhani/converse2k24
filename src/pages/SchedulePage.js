import React from 'react';
import './SchedulePage.css'; // Import the CSS file for styling
import { Link } from "react-router-dom";
import ScrollToTop from '../components/ScrollToTop';
import great from "./great.png";
import Footer from '../components/Footer';


const SchedulePage = () => {
  // Schedule data
  const schedule = [
    {
      day: 'Friday, 20th September, 2024',
      events: [
        { time: '8:30 am - 10:00 am', event: 'Inauguration Ceremony', location: 'Outside LAB-1' },
        { time: '10:00 am - 10:45 am', event: 'PY-IT (Round-1)', location: 'Lab-1,2,3' },
        { time: '11:00 am - 11:45 am', event: 'IT Quiz', location: 'Lab-1,2,3' },
        { time: '12:00 pm - 1:00 pm', event: 'Codathon', location: 'Lab-1,2,3' },
        { time: '12:00 pm - 1:00 pm', event: 'PY-IT Round-2', location: 'LAB-5' },
        { time: '1:00 pm - 1:30 pm', event: 'Lunch Break', location: '' },
        { time: '1:30 pm - 2:15 pm', event: 'AI Quiz', location: 'Lab-1,2,3' },
        { time: '2:30 pm - 3:00 pm', event: 'TECH TUSSLE ROUND -1 (Quiz)', location: 'Lab – 1,2,3' },
        { time: '2:30 pm - 3:00 pm', event: 'Cyber Siege Round-1 (quiz)', location: 'Lab-1,2,3' },
        { time: '3:00 pm - 4:15 pm', event: 'Web Wave', location: 'Lab-4,5' },
        { time: '3:00 pm - 4:15 pm', event: 'Cyber Siege Round-2', location: 'Lab-1,2,3' },
      ]
    },
    {
      day: 'Saturday, 21st September, 2024',
      events: [
        { time: '9:00 am - 9:45 am', event: 'Ai-Memes (Round 1)', location: 'Lab -1,2,3' },
        { time: '10:00 am - 11:00 am', event: 'Py-IT Round 3', location: 'Lab 5' },
        { time: '10:00 am - 11:00 am', event: 'Tech Tussle ROUND 2', location: 'NJ Seminar Hall' },
        { time: '11:15 am - 12:15 pm', event: 'Logo Hunt', location: 'Lab 1,2,3' },
        { time: '12:15 pm - 1:15 pm', event: 'AI-Memes (Round 2)', location: 'Lab 1,2,3' },
        { time: '12:15 pm - 1:15 pm', event: 'Bug Buzz (Round 1 and Round 2)', location: 'Lab 4,5' },
        { time: '1:00 pm - 2:00 pm', event: 'Lunch Break', location: '' },
        { time: '2:30 pm - 4:00 pm', event: 'Valedictory, Prize & Certificate distribution', location: '' },
      ]
    },
  ];

  return (<>
  <ScrollToTop/>
  <div className="teams-section">
                <div className='lin'>
                    <h1>
                        <Link to="/" >Home</Link>
                    </h1>
                    <img src={great} className='symb'/>
                    <h1>
                        <Link to="/schedule" >Schedule</Link>
                    </h1>
                </div>
                <div className='ex'>
                    <h2 >Converse 2K24 Schedule</h2>
                </div>
    <div className="schedule-page">
      {/* <h1>Converse 2024 Event Schedule</h1> */}
      {schedule.map((day, index) => (
        <div key={index} className="schedule-day">
          <h2>{day.day}</h2>
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Event</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {day.events.map((event, idx) => (
                <tr key={idx}>
                  <td>{event.time}</td>
                  <td>{event.event}</td>
                  <td>{event.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default SchedulePage;
