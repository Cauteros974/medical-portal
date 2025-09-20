import Profile from "../components/Profile/Profile";
import { userAppointments } from "../data/userAppointments";

const DashboardPage = () => {
    <div className="page-container dashboard">
        <Profile user={user} onLogOut={onLogOut} />
    </div>
};

export default DashboardPage;