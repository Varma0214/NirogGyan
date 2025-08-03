import React from 'react';
import './Confirmation.css';

const Confirmation = ({ formData, doctorName, onClose }) => {
  return (
    <div className="booking-form-modal confirmation-modal">
      <div className="confirmation-container">
        <span className="confirmation-icon">✅</span>
        <h3 className="confirmation-title">Appointment Confirmed!</h3>
        <p className="confirmation-message">
          Thank you for booking with us. Your appointment has been successfully scheduled.
        </p>
        
        <div className="booking-details">
          <h4>Booking Details</h4>
          <div className="detail-row">
            <span className="detail-label">Patient Name:</span>
            <span className="detail-value">{formData.patientName}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Doctor:</span>
            <span className="detail-value">{doctorName}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Date:</span>
            <span className="detail-value">{formData.date}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Time:</span>
            <span className="detail-value">{formData.time}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Email:</span>
            <span className="detail-value">{formData.email}</span>
          </div>
        </div>
        
        <button onClick={onClose} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default Confirmation;