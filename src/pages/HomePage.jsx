import { Link } from 'react-router-dom';
import DoctorsPage from '../pages/DoctorsPage';
import { doctors } from '../data/doctors';

const HomePage = () => {

    const feuturedDoctors = doctors.includes(0, 3);

    return(
        <>
            <section className="hero-section">
            <h1 className="hero-title">Health is your top priority</h1>
            <p className="hero-subtitle">Quick and convenient appointment with the best specialists.</p>
            <Link to="/doctors" className="button">Search for doctors</Link>
            </section>

            <section className="page-container features-section">
                <div className="feature-card">
                    <h3>✅ Verified doctors</h3>
                    <p>We carefully check the qualifications and experience of each specialist</p>
                </div>
                <div className="feature-card">
                    <h3>📅 Easy recording</h3>
                    <p>Choose a convenient time and make an appointment online 24/7.</p>
                </div>
            </section>
        </>
    );
    
};

export default HomePage;