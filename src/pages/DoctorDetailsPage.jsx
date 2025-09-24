import { useParams } from "react-router-dom";
import { doctors } from "../data/doctors";
import BookingForm from "../components/BookingForm";

const DoctorDetailsPage = () => {
    const { id } = useParams();
    const doctor = doctors.find( d => d.id === parseInt(id));

    if(!doctor){
        return <div className="page-container">Doctor not found</div>
    }

    return(
        <div className="page-container">
            <div className="details-container">
                <div className="details-info">
                    <img src={doctor.photo} alt={doctor.name} className="details-info-photo" />
                    <h1>{doctor.name}</h1>
                    <h3>{doctor.specialty}</h3>
                    <p>{doctor.experience}</p>
                    <p>{doctor.bio}</p>
                </div>
                <div className="booking-form">
                    <BookingForm doctorName={doctor.name} />
                </div>
            </div>
        </div>
    );
};

export default DoctorDetailsPage;