import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <h1>Dashboard</h1>

      <button onClick={signOut}>SignOut</button>
    </>
  );
};

export default Dashboard;
