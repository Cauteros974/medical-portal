import React from "react";
import { useDropzone } from "react-dropzone";

const Avatar = ({ photo }) => {
    if (photo) {
        return <img src={photo} alt="User Avatar" className="profile-avatar" />;
    }

    return(
        <div className="profiel-avatar-placeholder">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
        </div>
    );
};

const Profile = ({ user, onLogOut }) => (
    <div className="profile-welcome">
        <h2>Welcome, {user.email}</h2>
        <p>Here you can view your upcoming appointments.</p>
        <button onClick={onLogOut} style={{ marginTop: '1rem'}}>LogOut</button>
    </div>
);

export default Profile;