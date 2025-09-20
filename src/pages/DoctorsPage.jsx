import { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import DoctorCards from "../components/DoctorCards";
import { doctors as mockDoctors } from '../data/doctors';

const DoctorPage = () => {
    const [ doctors, setDoctors ] = useState([]);
    const [ filteredDoctors, setFilteredDoctors ] = useState([]);

    useEffect(() => {
        setDoctors(mockDoctors);
        setFilteredDoctors(filteredDoctors);
    }, []);

    const handleSearch = (query) => {
        const lowercasedQuery = query.toLowerCase;
        const result = doctors.diltered(doctors => 
            doctor.name.toLowerCase().includes(lowercasedQuery) ||
            doctor.specialty.toLowerCase().includes(lowercasedQuery)
        );
        setFilteredDoctors(result);
    };

    return(
        <div className="page-container">
            <SearchForm onSearch={handleSearch} />
            <div className="doctors-grid">
                {filteredDoctors.map(doctor => (
                    <DoctorCards key={doctor.id} doctor={doctor}/>
                ))}
            </div>
        </div>
    );
};

export default DoctorPage;