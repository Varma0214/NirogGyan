import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import './DoctorProfilePage.css';
import BookingForm from '../components/BookingForm';

const DoctorProfilePage = () => {
  const { id } = useParams();
  const { doctors, setSelectedDoctor } = useContext(AppContext);
  const navigate = useNavigate();
  const [showBookingForm, setShowBookingForm] = useState(false);

  const doctor = doctors.find(doc => doc.id === parseInt(id));

  useEffect(() => {
    if (doctor) {
      setSelectedDoctor(doctor);
    } else {
      // Handle case where doctor is not found
      navigate('/');
    }
  }, [doctor, setSelectedDoctor, navigate]);

  if (!doctor) {
    return null; // or a loading spinner
  }

  const getStatusClass = (status) => {
    switch(status) {
      case "Available Today":
        return "status-available";
      case "Fully Booked":
        return "status-booked";
      case "On Leave":
        return "status-leave";
      default:
        return "";
    }
  };

  return (
    <div className="doctor-profile-page">
      <button onClick={() => navigate('/')} className="back-button">
        ← Back to Home
      </button>
      <div className="profile-container">
        <div className="profile-image-section">
          <img src={doctor.image} alt={doctor.name} className="profile-image" />
        </div>
        <div className="profile-details">
          <div className="profile-header">
            <h2>{doctor.name}</h2>
            <p className="specialization">{doctor.specialization}</p>
            <span className={`availability-status ${getStatusClass(doctor.availabilityStatus)}`}>
              {doctor.availabilityStatus}
            </span>
          </div>
          
          <p className="bio">{doctor.bio}</p>
          
          <div className="schedule-section">
            <h3>Availability Schedule</h3>
            {doctor.schedule.length > 0 ? (
              doctor.schedule.map((day, index) => (
                <div key={index} className="schedule-day">
                  <h4>{new Date(day.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</h4>
                  <div className="time-slots">
                    {day.times.length > 0 ? (
                      day.times.map((time, timeIndex) => (
                        <span key={timeIndex} className="time-slot">{time}</span>
                      ))
                    ) : (
                      <p>No slots available</p>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p>This doctor has no upcoming appointments available.</p>
            )}
          </div>
          
          <button 
            onClick={() => setShowBookingForm(true)} 
            className="book-button"
            disabled={doctor.availabilityStatus === "On Leave" || doctor.availabilityStatus === "Fully Booked"}
          >
            Book Appointment
          </button>
        </div>
      </div>
      {showBookingForm && <BookingForm doctor={doctor} onClose={() => setShowBookingForm(false)} />}
    </div>
  );
};

export default DoctorProfilePage;