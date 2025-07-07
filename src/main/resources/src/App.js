//App.js
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";

// Guest
import GuestServices from "./components/Guest/Services";
import GuestArticles from "./components/Guest/Articles";
import Contact from "./components/Guest/Contact";
import Login from "./components/Guest/Login";
import Register from "./components/Guest/Register";
// Customer
import CustomerDashboard from "./components/Customer/Dashboard";
import TreatmentTimeline from "./components/Customer/TreatmentTimeline";
import Notifications from "./components/Customer/Notifications";
import Profile from "./components/Customer/Profile";
import Feedback from "./components/Customer/Feedback";
// Doctor
import PatientList from "./components/Doctor/PatientList";
import VisitRecord from "./components/Doctor/VisitRecord";
import TreatmentPlan from "./components/Doctor/TreatmentPlan";
// Manager
import ServiceManagement from "./components/Manager/ServiceManagement";
import DoctorManagement from "./components/Manager/DoctorManagement";
import FeedbackManagement from "./components/Manager/FeedbackManagement";
// Admin
import UserManagement from "./components/Admin/UserManagement";
import AdminDashboard from "./components/Admin/Dashboard";
// Introduction
import Facilities from "./components/Introduction/Facilities";
import VisionMission from "./components/Introduction/VisionMission";
import Staff from "./components/Introduction/Staff";


const Layout = () => {
  const location = useLocation();

  // Các path cần ẩn navbar
  const hideNavbarPaths = ["/admin", "/doctor", "/manager"];
  const shouldHideNavbar = hideNavbarPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        {/* Guest */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<GuestServices />} />
        <Route path="/articles" element={<GuestArticles />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        {/* Customer */}
        <Route path="/customer/dashboard" element={<CustomerDashboard />} />
        <Route path="/customer/timeline" element={<TreatmentTimeline />} />
        <Route path="/customer/notifications" element={<Notifications />} />
        <Route path="/customer/profile" element={<Profile />} />
        <Route path="/customer/feedback" element={<Feedback />} />
        {/* Doctor */}
        <Route path="/doctor/patients" element={<PatientList />} />
        <Route path="/doctor/visit-record" element={<VisitRecord />} />
        <Route path="/doctor/treatment-plan" element={<TreatmentPlan />} />
        {/* Manager */}
        <Route path="/manager/services" element={<ServiceManagement />} />
        <Route path="/manager/doctors" element={<DoctorManagement />} />
        <Route path="/manager/feedbacks" element={<FeedbackManagement />} />
        {/* Admin */}
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        {/* Introduction */}
        <Route path="/introduction/facilities" element={<Facilities />} />
        <Route path="/introduction/visionmission" element={<VisionMission />} />
        <Route path="/introduction/doctors" element={<Staff />} />
        
      </Routes>
      {!shouldHideNavbar && <Footer />}
    </>
  );
};

const App = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/users", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Không có quyền truy cập");
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <Router>
      <Layout />
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </div>
    </Router>
  );
};

export default App;
