//App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
// Guest
import GuestServices from './components/Guest/Services';
import GuestArticles from './components/Guest/Articles';
// Customer
import CustomerDashboard from './components/Customer/Dashboard';
import TreatmentTimeline from './components/Customer/TreatmentTimeline';
import Notifications from './components/Customer/Notifications';
import Profile from './components/Customer/Profile';
import Feedback from './components/Customer/Feedback';
// Doctor
import PatientList from './components/Doctor/PatientList';
import VisitRecord from './components/Doctor/VisitRecord';
import TreatmentPlan from './components/Doctor/TreatmentPlan';
// Manager
import ServiceManagement from './components/Manager/ServiceManagement';
import DoctorManagement from './components/Manager/DoctorManagement';
import FeedbackManagement from './components/Manager/FeedbackManagement';
// Admin
import UserManagement from './components/Admin/UserManagement';
import AdminDashboard from './components/Admin/Dashboard';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Guest */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<GuestServices />} />
        <Route path="/articles" element={<GuestArticles />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;