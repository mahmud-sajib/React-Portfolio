import React, {useContext, useState, useEffect} from "react";
import useMousePosition from "../hooks/useMousePosition";
import { StateContext } from "../context/State";

const Cursor = () => {
    const { clientX, clientY } = useMousePosition()
    // consuming contexts
    const {cursor} = useContext(StateContext)

    console.log("Cursor Status " + cursor.active)

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);
        document.body.addEventListener("mouseenter", handleMouseEnter);
        document.body.addEventListener("mouseleave", handleMouseLeave);
        return () => {
          document.body.removeEventListener("mouseenter",   handleMouseEnter);
          document.body.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, []);
    
    return (
      <>
      <div 
        style={{ 
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          pointerEvents: "none",
          opacity: cursor.active ? 0 : 1,
          transition: "all 0.3s ease-out",
        }}
      >
        <div className="cursor2"
            style={{
            
            left: clientX,
            top: clientY,
            transform: `translate(-50%, -50%)`,
            transition: "all 0.3s ease-out",
            opacity: isVisible ? 1 : 0,
            
        }}
        >
            <span>play reel</span>
            <img 
            // style={{
               
            //     opacity: cursor.active ? 0 : 1
            // }}
                src={process.env.PUBLIC_URL + `/images/red-flower.svg`}
            />
        </div>
      </div>
      </>
    );
};

export default Cursor