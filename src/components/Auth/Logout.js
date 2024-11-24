import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove JWT from localStorage
    console.log("User logged out");
    navigate("/"); // Redirect to login page
  };

  return (
    <div className="text-center mt-5">
      <h2>Are you sure you want to log out?</h2>
      <button onClick={handleLogout} className="btn btn-danger mx-2">
        Yes, Logout
      </button>
      <button onClick={() => navigate(-1)} className="btn btn-secondary mx-2">
        Cancel
      </button>
    </div>
  );
};

export default Logout;
