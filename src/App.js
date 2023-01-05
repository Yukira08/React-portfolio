import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Redirect
} from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import Footer from "./components/Footer/Footer";
import "./App.css";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
