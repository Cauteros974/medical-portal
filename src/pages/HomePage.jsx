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
                <div className="feature-card">
                    <h3>💬 Honest rewiews</h3>
                    <p>Read real patient reviews to make the right choice.</p>
                </div>
            </section>

            <section className="page-container how-it-works-section">
                <h2 className="section-title">Signing up is easy!</h2>
                <div className="steps-container">
                    <div className="step">
                        <div className="step-number">1</div>
                        <h4>Found a doctor</h4>
                        <p>Use search by specialty or name</p>
                    </div>
                    <div className="step">
                        <div className="step-number">2</div>
                        <h4>Choose a time</h4>
                        <p>View available hours in the doctor's schedule.</p>
                    </div>
                    <div className="step">
                        <div className="step-number">3</div>
                        <h4></h4>
                    </div>
                </div>
            </section>
        </>
    );
    
};

export default HomePage;