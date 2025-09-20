import Profile from "../components/Profile/Profile";
import { userAppointments } from "../data/userAppointments";

const DashboardPade = ({ user, onLogOut}) => {
    <div className="page-container dashboard">
        <Profile user={user} onLogOut={onLogOut} />
    </div>
}