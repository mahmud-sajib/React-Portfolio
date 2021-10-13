import React, { useContext, useCallback } from "react";
import useCursorHandlers from "../hooks/useCursorHandlers";

const Button = () => {
    const cursorHandlers = useCursorHandlers();
  
    return (
        <button
        type="button"
        style={{ padding: "1rem", color:"red" }}
        {...cursorHandlers}
        >
        HOVER ME
        </button>
    );
};

export default Button