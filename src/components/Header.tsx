import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => (
  <header className="header">
    <nav>
      <NavigationLinks />
    </nav>
  </header>
);

const NavigationLinks: React.FC = () => (
  <ul>
    <li><Link to="/home">Home</Link></li>
    <li><Link to="/projects">Projects</Link></li>
    {/* <li><Link to="/courses">Courses</Link></li> */}
  </ul>
);

export default Header;
