import { useState, useEffect } from 'react';
import SearchForm from '../components/SearchForm';
import DoctorCard from '../components/DoctorCard';
import { doctors as mockDoctors } from '../data/doctors';

const DoctorsPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useEffect(() => {
    setDoctors(mockDoctors);
    setFilteredDoctors(mockDoctors);
  }, []);
  
  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const result = doctors.filter(doctor => 
      doctor.name.toLowerCase().includes(lowercasedQuery) ||
      doctor.specialty.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredDoctors(result);
  };

  return (
    <div className="page-container">
      <SearchForm onSearch={handleSearch} />
      <div className="doctors-grid">
        {filteredDoctors.map(doctor => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorsPage;