import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/Auth/SignUp";
import Login from "./components/Auth/Login";
import Logout from "./components/Auth/Logout";
import BookLibrary from "./components/BookLibrary/BookLibrary";
import BookReviews from "./components/BookReviews/BookReviews";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="text-center my-4">Book Recommendation App</h1>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/library" element={<BookLibrary />} />
          <Route path="/reviews/:bookId" element={<BookReviews />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
