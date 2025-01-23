import React from "react";


import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainComponent";

const Dashboard = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Dashboard;
