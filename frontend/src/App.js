import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import HomePage from './pages/HomePage';
import DoctorProfilePage from './pages/DoctorProfilePage';
import Chatbot from './components/Chatbot';
import './App.css';

const App = () => {
  return (
    <Router>
      <AppProvider>
        <div className="app-container">
          <header className="app-header">
            <h1>NirogGyan</h1>
            <p>Your Health, Our Priority - Book Appointments with Expert Doctors</p>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/doctor/:id" element={<DoctorProfilePage />} />
            </Routes>
          </main>
          <Chatbot />
        </div>
      </AppProvider>
    </Router>
  );
};

export default App;