import React from "react";
import { Route, Routes } from "react-router-dom"; 
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./Dashboard";
import AuthRoute from "./AuthRoute";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import StudentReg from "./Screens/StudentReg";
import StudentList from "./Screens/StudentList";
import AdminDashboard from "./AdminDashboard";

const App = () => {
  return (
    <>
  <Routes>
  <Route element={<ProtectedRoute />}>
    <Route path="/client-dashboard/*" element={<Dashboard />} />
    <Route path="/admin-dashboard/*" element={<AdminDashboard />} />
    <Route path="/students-add" element={<StudentReg />} />
    <Route path="/studentsList" element={<StudentList />} />
  </Route>

  <Route element={<AuthRoute />}>
    <Route path="/" element={<SignUp />} />
    <Route path="/login" element={<Login />} />
  </Route>
</Routes>

    </>
  );
};

export default App;
