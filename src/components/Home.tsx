import React, { useEffect } from "react";
import "./Home.css";
import profilePhoto from "../assets/profile-photo.jpg";

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Home | Portfolio";
  }, []);

  return (
    <div className="home">
      <div className="content">
        <div className="top-section">
          <img src={profilePhoto} alt="Photo of me" className="img" />
          <div className="info">
            <p><b>Email:</b> <br /> jonathantybirk@gmail.com</p>
            <br /><p><b>LinkedIn:</b> <br /> <a href="https://www.linkedin.com/in/jonathantybirk/" target="_blank" rel="noopener noreferrer">linkedin.com/in/jonathantybirk/</a></p>
            <br /><p><b>GitHub:</b> <br /> <a href="https://github.com/jonathantybirk/" target="_blank" rel="noopener noreferrer">github.com/jonathantybirk/</a></p>
          </div>
        </div>
        <div className="bottom-section">
          <p>
            Hello! I am currently studying BSc Artificial Intelligence and Data
            at the Technical University of Denmark. This site is where I put
            projects up as I do them. :)
          </p>
          <p>
            You can check out <b><a href="/resume" target="_blank" rel="noopener noreferrer">my resume</a>↗</b>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
