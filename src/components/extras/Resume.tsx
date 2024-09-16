import React, { useEffect } from "react";

const Resume: React.FC = () => {
  useEffect(() => {
    document.title = "Resume";
    document.body.style.overflowY = "hidden";
    return () => {
        document.body.style.overflowY = "scroll";
    };
}, []);
    
    return (
        <div>
            Resume currently unavailable. Check out my LinkedIn at <b><a href="https://www.linkedin.com/in/jonathantybirk/" target="_blank" rel="noopener noreferrer">linkedin.com/in/jonathantybirk</a></b>↗.
        </div>

        // <iframe
        //   src={"/website-components/resume.pdf"}
        //   style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", border: "none", zIndex: 9999 }}
        // />
    );
}

export default Resume;