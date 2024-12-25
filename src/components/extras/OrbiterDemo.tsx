import React, { useEffect, useRef } from "react";

const OrbiterDemo: React.FC = () => {
    const demoRef = useRef<HTMLIFrameElement>(null);
    useEffect(() => {
        document.title = "Orbiter";
        document.body.style.overflowY = "hidden";
        if (demoRef.current) {
            demoRef.current.focus();
        }
        
        return () => {
            document.body.style.overflowY = "scroll";
        };
    }, []);
    
    
    return (
        <iframe
        ref={demoRef}
        src={"/website-components/orbiter-demo/index.html"}
        style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", border: "none", zIndex: 9999}}
        tabIndex={-1}
        />
    );
}

export default OrbiterDemo;