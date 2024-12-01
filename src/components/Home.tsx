import React, { useEffect } from "react";
import "./Home.css";

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Home | Portfolio";
  }, []);

  return (
    <div className="home">
      <div className="content">
        <div className="top-section">
          <img src="/assets/profile-photo.jpg" alt="Photo of me" className="img" />
          <div className="info">
            <p><a href="/resume" target="_blank" rel="noopener noreferrer"><b>Resume↗</b></a></p>
            <br /><p><b>Email:</b> <br /> jonathantybirk@gmail.com</p>
            <br /><p><b>LinkedIn:</b> <br /> <a href="https://www.linkedin.com/in/jonathantybirk/" target="_blank" rel="noopener noreferrer">linkedin.com/in/jonathantybirk/</a></p>
            <br /><p><b>GitHub:</b> <br /> <a href="https://github.com/jonathantybirk/" target="_blank" rel="noopener noreferrer">github.com/jonathantybirk/</a></p>
          </div>
        </div>
        <div className="bottom-section">
          <p>
            I am studying BSc Artificial Intelligence and Data
            at the Technical University of Denmark. This site is where I showcase (and host) some of my personal projects.
          </p>
          <p>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="/projects/orbiter/demo" target="_blank" rel="noopener noreferrer">&nbsp; 🚀 &nbsp;</a> ← &nbsp; click to launch
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
