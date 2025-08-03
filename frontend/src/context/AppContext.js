import React, { createContext, useState, useEffect } from 'react';
import doctorsData from '../data/doctors.json';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  useEffect(() => {
    // Simulating an API call
    setDoctors(doctorsData);
  }, []);

  return (
    <AppContext.Provider value={{ doctors, selectedDoctor, setSelectedDoctor }}>
      {children}
    </AppContext.Provider>
  );
};