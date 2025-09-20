import { Link } from 'react-router-dom';

const HomePage = () => (
    <section className="hero-section">
        <h1 className="hero-title">Found your doctor</h1>
        <p className="hero-subtitle">Quick and convenient appointment with the best specialists.</p>
        <Link to="/doctors" className="button">Search for doctors</Link>
    </section>
);

export default HomePage;