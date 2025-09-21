import { Link } from 'react-router-dom';
import DoctorsPage from '../pages/DoctorsPage';
import { doctors } from '../data/doctors';

const HomePage = () => (
    <section className="hero-section">
        <h1 className="hero-title">Health is your top priority</h1>
        <p className="hero-subtitle">Quick and convenient appointment with the best specialists.</p>
        <Link to="/doctors" className="button">Search for doctors</Link>
    </section>
);

export default HomePage;