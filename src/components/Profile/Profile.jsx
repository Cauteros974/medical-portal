const Profile = ({ user, onLogOut }) => (
    <div className="profile-welcome">
        <h2>Welcome, {user.email}</h2>
        <p>Here you can view your upcoming appointments.</p>
        <button onClick={onLogOut} style={{ marginTop: '1rem'}}>LogOut</button>
    </div>
);

export default Profile;