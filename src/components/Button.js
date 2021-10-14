import React, { useContext, useCallback } from "react";
import useCursorHandlers from "../hooks/useCursorHandlers";
// import flowerCursor from "../../src/"
const Button = () => {
    const cursorHandlers = useCursorHandlers();

    
  
  
    return (
        <button
            
        type="button"
        style={{ 
            padding: "20px",
            color: "red",
         }}
        {...cursorHandlers}
        >
           Hover
        </button>
    );
};

export default Button