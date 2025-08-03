import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DoctorCard.css';

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();

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
    <div className="doctor-card" onClick={() => navigate(`/doctor/${doctor.id}`)}>
      <div className="doctor-image-container">
        <img src={doctor.image} alt={doctor.name} className="doctor-image" />
      </div>
      <div className="doctor-info">
        <h3>{doctor.name}</h3>
        <p className="specialization">{doctor.specialization}</p>
        <span className={`availability-status ${getStatusClass(doctor.availabilityStatus)}`}>
          {doctor.availabilityStatus}
        </span>
        <div className="doctor-meta">
          <span className="doctor-rating">4.8</span>
          <span className="doctor-experience">15+ years</span>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;