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
};

export default DoctorPage;