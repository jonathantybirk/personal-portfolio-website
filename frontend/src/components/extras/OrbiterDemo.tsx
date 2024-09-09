import React, { useEffect, useRef } from "react";

const OrbiterDemo: React.FC = () => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    useEffect(() => {
        document.title = "Orbiter";
        document.body.style.overflowY = "hidden";
        if (iframeRef.current) {
            iframeRef.current.focus();
        }
        
        return () => {
            document.body.style.overflowY = "scroll";
        };
    }, []);
    
    
    return (
        <iframe
        ref={iframeRef}
        src={"/website-components/orbiter-demo/index.html"}
        style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", border: "none", zIndex: 9999}}
        tabIndex={-1}
        />
    );
}

export default OrbiterDemo;