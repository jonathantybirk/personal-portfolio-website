import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/courses">Courses</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
