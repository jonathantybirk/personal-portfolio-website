import React, { useEffect } from "react";

const RESUME_PATH = "/website-components/website resume.pdf";

const Resume: React.FC = () => {
  useEffect(() => {
    document.title = "Resume";
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <iframe
      src={RESUME_PATH}
      style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", border: "none", zIndex: 9999 }}
    />
  );
}

export default Resume;