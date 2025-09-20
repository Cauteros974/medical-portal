import { useParams } from "react-router-dom";
import { doctors } from "../data/doctors";
import BookingForm from "../components/BookingForm";

const DoctorDetailsPage = () => {
    const { id } = useParams();
    const doctor = doctor.find( d => d.id === parseInt(id));
}