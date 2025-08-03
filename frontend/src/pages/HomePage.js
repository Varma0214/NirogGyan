import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import DoctorCard from '../components/DoctorCard';
import './HomePage.css';

const HomePage = () => {
  const { doctors } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <div className="search-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search doctors by name or specialization..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>
      <div className="doctor-list">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))
        ) : (
          <p className="no-results">No doctors found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;