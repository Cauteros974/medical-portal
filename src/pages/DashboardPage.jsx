import React, { useState } from "react";
import Profile from "../components/Profile/Profile";
import { userAppointments } from "../data/userAppointments";

const DashboardPage = ({ user, onLogout }) => {

  const [userPhoto, setUserPhoto] = useState(null);

  const handlePhotoUpload = (file) => {
    const photoURL = URL.createObjectURL(file);
    setUserPhoto(photoURL);
    console.log("Photo uploaded:", file.name);
  };

  const updatedUser = { ...user, photo: userPhoto };

  return(
    <div className="page-container dashboard">
      <Profile
        user={updatedUser}
        onLogout={onLogout}
        onPhotoUpload={handlePhotoUpload}
      />
      
      <div style={{ marginTop: '2rem' }}>
        <h3>Your future entries</h3>
        {userAppointments.map(appt => (
          <div key={appt.id} className="appointment-card">
            <p><strong>Doctor:</strong> {appt.doctorName} ({appt.specialty})</p>
            <p><strong>Date:</strong> {new Date(appt.date).toLocaleString('uk-UA')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;