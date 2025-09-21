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
    </div>
  );
};

export default DashboardPage;