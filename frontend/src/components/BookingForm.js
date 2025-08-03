import React, { useState } from 'react';
import Confirmation from './Confirmation';
import './BookingForm.css';

const BookingForm = ({ doctor, onClose }) => {
  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    date: '',
    time: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.patientName) newErrors.patientName = "Patient Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email address is invalid.";
    if (!formData.date) newErrors.date = "Date is required.";
    if (!formData.time) newErrors.time = "Time is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Here you would typically send data to a backend
      console.log('Booking submitted:', formData);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return <Confirmation formData={formData} doctorName={doctor.name} onClose={onClose} />;
  }

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="booking-form-modal">
      <div className="booking-form-container">
        <div className="booking-header">
          <h3>Book an Appointment with {doctor.name}</h3>
          <button onClick={onClose} className="close-button">&times;</button>
        </div>
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label>Patient Name</label>
            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
            />
            {errors.patientName && <p className="error-text">{errors.patientName}</p>}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={today}
            />
            {errors.date && <p className="error-text">{errors.date}</p>}
          </div>
          <div className="form-group">
            <label>Time</label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
            >
              <option value="">Select a time slot</option>
              {doctor.schedule.find(day => day.date === formData.date)?.times.map((time, index) => (
                <option key={index} value={time}>{time}</option>
              ))}
            </select>
            {errors.time && <p className="error-text">{errors.time}</p>}
          </div>
          <button type="submit" className="submit-button">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;