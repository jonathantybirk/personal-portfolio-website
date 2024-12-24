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
    <iframe
      src={
        "https://docs.google.com/gview?url=" +
        "https://drive.google.com/uc?export=download&id=1HE3DZ11_sGU0pejU-ND6akeq_iT_RlyA" +
        "&embedded=true"
      }
      style={{ width: "100%", height: "100vh", border: "none" }}
      frameBorder="0"
      title="resume"
    />
  );
};

export default Resume;
