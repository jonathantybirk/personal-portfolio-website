import React, { useEffect } from "react";

const OrbiterDemo: React.FC = () => {
    useEffect(() => {
        document.title = "Orbiter";
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        };
    }, []);
    
    
    return (
        <iframe
        src={"/website-components/orbiter-demo/index.html"}
        style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", border: "none", zIndex: 9999}}
        />
    );
}

export default OrbiterDemo;