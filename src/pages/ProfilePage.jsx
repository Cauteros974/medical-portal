import { useState } from "react";
import AuthForm from '../components/Profile/AuthForm';
import DashboardPage from "./DashboardPage";

const ProfilePage = () => {
    const [user, setUser] = useState(null); 

  const handleLogin = (userData) => setUser(userData);
  const handleLogout = () => setUser(null);

  return user ? (
    <DashboardPage user={user} onLogout={handleLogout} />
  ) : (
    <AuthForm onLogin={handleLogin} />
  );
}

export default ProfilePage;