import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DoctorsPage from '../pages/DoctorsPage';
import { doctors } from '../data/doctors';
import DoctorCard from '../components/DoctorCard';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <div className="faq-answer"><p>{answer}</p></div>}
    </div>
  );
};


const HomePage = () => {
    const featuredDoctors = doctors.slice(0, 3);
    const navigate = useNavigate();

    const handleSymptomSearch = (speciality) => {
        navigate(`/doctors?search=${speciality}`);
    };
    

    return(
        <>
            <section className="hero-section">
            <h1 className="hero-title">Health is your top priority</h1>
            <p className="hero-subtitle">Quick and convenient appointment with the best specialists.</p>
            <Link to="/doctors" className="button">Search for doctors</Link>
            </section>

            <section className="page-container how-it-works-container">
                <h2 className="section-title">Making an appointment is easy.</h2>
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
                        <h4>Confirm the entry and receive a reminder.</h4>
                    </div>
                </div>
            </section>

            <section className="page-container">
                <h2 className="section-title">Our leading specialists</h2>
                <div className="doctors-grid">
                    {featuredDoctors.map(doctor => (
                    <DoctorCard key={doctor.id} doctor={doctor} />
                    ))}
                </div>
                <div style={ { textAlign: 'center', marginTop: '2rem'}}>
                    <Link to="/doctors" className="button">View all doctors</Link>
                </div>
            </section>

            <section className="page-container articles-section">
                <h2 className="section-title">Useful articles about health</h2>
                <div className="articles-grid">
                    <div className= "acticle-card">
                        <img src="/images/image.webp" alt="Healthy heart" />
                        <div className="article-content">
                            <h4>Cardiology</h4>
                            <h3>How save healthy heart: 5 easily advice</h3>
                            <p>Learn how quality sleep affects your brain, mood, and overall well-being...</p>
                            <a href="#">Read more...</a>
                        </div>
                    </div>
                </div>

                <div className="article-card">
                  <img src="/images/image-planet.jpeg" alt="Good sleep" />
                  <div className="article-content">
                      <h4>Neurologist</h4>
                      <h3>Sleep and health: why it's important to get enough sleep</h3>
                      <p>Learn how quality sleep affects your brain, mood, and overall well-being...</p>
                      <a href="#">Read more...</a>
                  </div>
                </div>
            </section>

            <section className="testimonials-section">
                <div className="page-container">
                    <h2 className="section-title" style={{color: 'white'}}>What our patients say</h2>
                    <div className="testimonials-container">
                        <div className="testimonial-card">
                            <p>"Very convenient service! I found a great neurologist and made an appointment in 5 minutes, without leaving home. I recommend it!"</p>
                            <h4>- Marry D.</h4>
                        </div>
                        <div className="testimonial-card">
                            <p>Finally, there is no need to call the reception. Everything is transparent, you can see the schedule, reviews. This is the future of medicine</p>
                            <h4>- David L.</h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );  
};

export default HomePage;