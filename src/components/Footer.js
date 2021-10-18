import React from 'react';
import useCursorHandlers from "../hooks/useCursorHandlers";

function Footer(){
  const cursorHandlers = useCursorHandlers();
    return(
        <footer class="page-footer">
          <nav>
            <a class="logo" onClick={(e) => e.stopPropagation()} href="https://yahoo.com" {...cursorHandlers}>Service</a>
            <a class="logo" onClick={(e) => e.stopPropagation()} href="https://instagram.com" {...cursorHandlers}>Contact</a>
          </nav>
        </footer>
    )
}

export default Footer