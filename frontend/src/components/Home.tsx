import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <img src="path/to/your/image.png" alt="Profile" />
      <div>
        <p>Email: jonathantybirk@gmail.com</p>
        <p>LinkedIn: linkedin.com/in/jonathantybirk/</p>
        <p>GitHub: github.com/jonathantybirk/</p>
        <p>
          Hello! I am currently studying BSc Artificial Intelligence and Data
          at the Technical University of Denmark. This site is where I put
          projects up as I do them. :)
        </p>
        <p>
          You can see the courses I've taken <a href="/courses">here</a>.
        </p>
        <p>
          You can also check out <a href="resume.pdf">my resume</a>.
        </p>
      </div>
    </div>
  );
};

export default Home;
