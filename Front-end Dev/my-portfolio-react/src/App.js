import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import TechArchive from "./pages/TechArchive";
import Contact from "./pages/Contact";
import Aws from "./pages/Aws"; // Import AWS page
import Footer from "./components/Footer"; // ✅ Import Footer
import Projects from "./pages/Projects"; // ✅ Import Projects Page
import UnderConstructionPage from "./pages/UnderConstructionPage";



import "./styles.css";

function Layout() {
  return (
    <div className="content-container">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/techarchive" element={<TechArchive />} />
            <Route path="/techarchive/aws" element={<Aws />} /> {/* New AWS page */}
            <Route path="/techarchive/azure" element={<UnderConstructionPage title="Azure" />} />
            <Route path="/techarchive/googleworkspace" element={<UnderConstructionPage title="Google Workspace" />} />
            <Route path="/techarchive/m365" element={<UnderConstructionPage title="Microsoft 365" />} />
            <Route path="/techarchive/python" element={<UnderConstructionPage title="Python" />} />
            <Route path="/techarchive/powershell" element={<UnderConstructionPage title="PowerShell" />} />
            <Route path="/techarchive/react" element={<UnderConstructionPage title="React" />} />
            <Route path="/techarchive/mongodb" element={<UnderConstructionPage title="MongoDB" />} />
            <Route path="/techarchive/django" element={<UnderConstructionPage title="Django" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<UnderConstructionPage title="Projects" />} /> {/* ✅ Projects Page Route */}
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Layout />
      <Footer /> {/* ✅ Add Footer at the bottom */}
    </Router>
  );
}

export default App;