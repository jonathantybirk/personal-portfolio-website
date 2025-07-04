import React, { useEffect } from "react";
import "./Home.css";

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Home | Portfolio";
  }, []);

  return (
    <div className="home">
      <div className="content">
        <TopSection />
        <BottomSection />
      </div>
    </div>
  );
};

const TopSection: React.FC = () => (
  <div className="top-section">
    <img src="/assets/profile-photo.jpg" alt="Photo of me" className="img" />
    <div className="info">
      <ContactInfo />
    </div>
  </div>
);

const ContactInfo: React.FC = () => (
  <>
    <p><b>Email:</b> <br /> jonathantybirk@gmail.com</p>
    <br /><p><b>LinkedIn:</b> <br /> <a href="https://www.linkedin.com/in/jonathantybirk/" target="_blank" rel="noopener noreferrer">linkedin.com/in/jonathantybirk/</a></p>
    <br /><p><b>GitHub:</b> <br /> <a href="https://github.com/jonathantybirk/" target="_blank" rel="noopener noreferrer">github.com/jonathantybirk/</a></p>
    {/* <br /><p><a href="/resume" target="_blank" rel="noopener noreferrer"><b>Resume↗</b></a></p> */}
  </>
);

const BottomSection: React.FC = () => (
  <div className="bottom-section">
    <p>
      I am a BSc Artificial Intelligence and Data student at the Technical University of Denmark. 
      This site is where I showcase (and host) some of my personal projects.
    </p>
    {/* <p>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h1><a href="/projects/orbiter/demo" target="_blank" rel="noopener noreferrer">&nbsp; 🚀 &nbsp;</a> &nbsp; <a href="/interests" target="_blank" rel="noopener noreferrer">&nbsp; 📖 &nbsp;</a></h1>
    </p> */}
  </div>
);

export default Home;
