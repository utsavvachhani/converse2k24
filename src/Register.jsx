import React, { useState } from 'react';
import { ref, push, set } from 'firebase/database';
import { database } from './firebase'; // Adjust the path as necessary
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import great from './great.png';
import './pages/registration/Register.css';

const Register = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    event: location.state?.event || '',
    enrollment: '',
    college: '',
    name: '',
    department: '',
    email: '',
    year: '',
    contactNumber: '',
  });

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Email validation (SCET or Gmail)
  const validateEmail = (email) => {
    const scetEmailPattern = /^[a-zA-Z0-9._%+-]+@scet\.ac\.in$/;
    const normalEmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return scetEmailPattern.test(email) || normalEmailPattern.test(email);
  };

  // Phone number validation (10 digits, starting from 6, 7, 8, 9)
  const validateContactNumber = (contactNumber) => {
    const contactNumberPattern = /^[6-9]\d{9}$/;
    return contactNumberPattern.test(contactNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email validation
    if (!validateEmail(formData.email)) {
      setError('Email must be a valid @scet.ac.in address or a normal Gmail address.');
      return;
    }

    // Phone number validation
    if (!validateContactNumber(formData.contactNumber)) {
      setError('Invlid Number Please write the Currect one.');
      // setError('Please enter a valid 10-digit mobile number that starts with 6, 7, 8, or 9.');
      return;
    }

    setIsLoading(true);

    try {
      const usersRef = ref(database, 'users');
      // const emailQuery = query(usersRef, orderByChild('email'), equalTo(formData.email));
      // const snapshot = await get(emailQuery);

      let emailExists = false;
      /*snapshot.forEach((childSnapshot) => {
        const data = childSnapshot.val();
        if (data.event === formData.event) {
          emailExists = true;
        }
      });*/

      if (emailExists) {
        setError('This email is already registered for the selected event.');
      } else {
        console.log('Inserting new data:', formData);
        const newUserRef = push(usersRef);
        await set(newUserRef, formData);
        console.log('Data inserted successfully');
        navigate('/thankyou', { state: { formData } });
      }
    } catch (error) {
        navigate('/thankyou', { state: { formData } });
        console.error('Error checking or storing data:', error);
      setError('There was an error processing your registration. Please try again.');
    }

    setIsLoading(false);
  };

  return (
    <>
      <ScrollToTop />
      <div className="teams-section">
        <div className="lin">
          <h1>
            <Link to="/">Home</Link>
          </h1>
          <img src={great} className="symb" alt="Symbol" />
          <h1>
            <Link to="/events">Events</Link>
          </h1>
          <img src={great} className="symb" alt="Symbol" />
          <h1>
            <Link to="/tech-event">Tech</Link>
          </h1>
        </div>
      </div>

      <div className="form-body">
        <form onSubmit={handleSubmit}>
          <h2 className="header-register">Converse 2K24 Registration Form</h2>

          <div className="form-group">
            <label htmlFor="event">Event List:</label>
            <select name="event" id="event" value={formData.event} onChange={handleChange} required>
              <option value="">Select Event</option>
              <option value="IT QUIZ">IT QUIZ</option>
              <option value="AI QUIZ">AI QUIZ</option>
              <option value="BUG BUZZ">BUG BUZZ</option>
              <option value="PY-IT">PY-IT</option>
              <option value="AI MEMES">AI MEMES</option>
              <option value="CYBER SIEGE">CYBER SIEGE</option>
              <option value="WEB WAVE">WEB WAVE</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email ID:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <p className="Email-text">
              If you have an <a href='https://github.com/utsavvachhani/converse2k24' target='_blank' rel="noopener noreferrer">SCET id</a>, then register with it. Otherwise, go with Gmail.
            </p>
          </div>
    
          <div className="form-group">
            <label htmlFor="contactNumber">Mobile Number:</label>
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              placeholder="Enter your mobile number"
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="enrollment">Enrollment No:</label>
            <input
              type="text"
              id="enrollment"
              name="enrollment"
              placeholder="Enter your enrollment number"
              value={formData.enrollment}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="college">College Name:</label>
            <select name="college" id="college" value={formData.college} onChange={handleChange} required>
              <option value="">Select College</option>
              <option value="SCET">Sarvjanik College of Engineering and Technology, Surat</option>
              <option value="PPSU">P P Savani University, Surat</option>
              <option value="Tapi">Tapi Diploma Engineering College, Surat</option>
              <option value="SSGandhi">DRS & SS Gandhi College of Engineering, Surat</option>
              <option value="BMV">Bhagwan Mahavir University, Surat</option>
              <option value="SVNIT">SVNIT</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="department">Department:</label>
            <select name="department" id="department" value={formData.department} onChange={handleChange} required>
              <option value="">Select Department</option>
              <option value="AI&DS">Artificial Intelligence and Data Science</option>
              <option value="Ch_En">Chemical Engineering</option>
              <option value="Ci_En">Civil Engineering</option>
              <option value="CO">Computer Engineering</option>
              <option value="EE">Electrical Engineering</option>
              <option value="ECE">Electronics & Communication Engineering</option>
              <option value="IT">Information Technology</option>
              <option value="IC">Instrumentation and Control</option>
              <option value="ME">Mechanical Engineering</option>
              <option value="TT">Textile Technology</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="year">Year:</label>
            <select name="year" id="year" value={formData.year} onChange={handleChange} required>
              <option value="">Select Year</option>
              <option value="1st">1st Year</option>
              <option value="2nd">2nd Year</option>
              <option value="3rd">3rd Year</option>
              <option value="4th">4th Year</option>
            </select>
          </div>

          {error && <p className="error">{error}</p>}
          <button type="submit" id="submit" disabled={isLoading}>
            {isLoading ? 'Registering...' : 'Register'}
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Register;
