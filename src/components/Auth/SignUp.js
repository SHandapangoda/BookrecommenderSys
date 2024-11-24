import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add sign-up logic here (e.g., API call)
    console.log("User signed up:", { email, password });
    navigate("/");
  };

  return (
    <form onSubmit={handleSignUp} className="form-control">
      <h2>Sign Up</h2>
      <div className="mb-3">
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" required />
      </div>
      <div className="mb-3">
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" required />
      </div>
      <button type="submit" className="btn btn-primary">Sign Up</button>
    </form>
  );
};

export default SignUp;
