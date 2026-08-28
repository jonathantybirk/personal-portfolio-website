import { useEffect } from 'react';

const RESUME_PATH = '/website-components/jonathan-tybirk-cv.pdf';

export default function Resume() {
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
      title="Jonathan Tybirk's résumé"
      className="fullscreen-frame"
    />
  );
}
