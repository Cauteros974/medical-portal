import Profile from "../components/Profile/Profile";
import { userAppointments } from "../data/userAppointments";

const DashboardPage = ({ user, onLogout }) => (
    <div className="page-container dashboard">
      <Profile user={user} onLogout={onLogout} />
      
      <div style={{ marginTop: '2rem' }}>
        <h3>Your future entries</h3>
        {userAppointments.map(appt => (
          <div key={appt.id} className="appointment-card">
            <p><strong>Doctor:</strong> {appt.doctorName} ({appt.specialty})</p>
            <p><strong>Data:</strong> {new Date(appt.date).toLocaleString('uk-UA')}</p>
          </div>
        ))}
      </div>
    </div>
  );

export default DashboardPage;