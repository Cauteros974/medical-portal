import { Link } from 'react-router-dom';

const DoctorCard = ({ doctor }) => (
  <div className="doctor-card">
    <img src={doctor.photo} alt={doctor.name} className="doctor-card-photo" />
    <h3>{doctor.name}</h3>
    <p>{doctor.specialty}</p>
    <Link to={`/doctors/${doctor.id}`}>More details</Link>
  </div>
);

export default DoctorCard;