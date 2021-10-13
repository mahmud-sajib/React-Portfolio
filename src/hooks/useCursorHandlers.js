import { useContext, useCallback } from "react";
import { StateContext } from "../context/State";

const useCursorHandlers = (options = {}) => {
  const {setCursor} = useContext(StateContext);
  
  const toggleCursor = () => {
    setCursor(({ active }) => ({ active: !active }));
  };
  
  const onMouseEnter = useCallback(event => {
    if (options.onMouseEnter) {
      options.onMouseEnter(event);
    }
    toggleCursor();
  });
  
  const onMouseLeave = useCallback(event => {
    if (options.onMouseLeave) {
      options.onMouseLeave(event);
    }
    toggleCursor();
  });
  
  return { onMouseEnter, onMouseLeave };
};

export default useCursorHandlers