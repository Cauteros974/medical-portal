import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DoctorsPage from './pages/DoctorsPage';
import DoctorDetailsPage from './pages/DoctorDetailsPage';
import ProfilePage from './pages/ProfilePage';
import AboutUs from './components/AboutUs';
import Cardiology from './components/Cardiology';
import Neurology from './components/Neurology';
import Pediatrics from './components/Pediatrics';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/doctors/:id" element={<DoctorDetailsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/cardiology" element={<Cardiology />} />
            <Route path="/neurology" element={<Neurology />} />
            <Route path="/pediatrics" element={<Pediatrics />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;