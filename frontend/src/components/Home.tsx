import React, {useEffect} from "react";
import "./Home.css";
import profilePhoto from "../assets/profile-photo.jpg";

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Home | Portfolio";
  }, []);

  return (
    <div className="home">
      <img src={profilePhoto} alt="Photo of me" className="img"/>
      <div className="info">
        <p>Email: jonathantybirk@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/jonathantybirk/" target="_blank" rel="noopener noreferrer" link-type="hidden">linkedin.com/in/jonathantybirk/</a></p>
        <p>GitHub: <a href="https://github.com/jonathantybirk/" target="_blank" rel="noopener noreferrer" link-type="hidden">github.com/jonathantybirk/</a></p>
      </div>
      <div>
        <p>
          Hello! I am currently studying BSc Artificial Intelligence and Data
          at the Technical University of Denmark. This site is where I put
          projects up as I do them. :)
        </p>
        <p>
          You can also check out <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">my resume</a>↗.
        </p>
      </div>
    </div>
  );
};

export default Home;
