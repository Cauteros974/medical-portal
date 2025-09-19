import { useState } from 'react'
import AboutUs from './components/AboutUs';
import BookingForm from './components/BookingForm';
import DoctorCard from './components/DoctorCards';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import './App.css'
import { Router, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="app-container">
        <Header />
      </div>
      <main className="main-container">
        <Routes>
          
        </Routes>
      </main>
    </Router>
  )
}

export default App;