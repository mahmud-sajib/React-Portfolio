import {React, useContext} from 'react';
import useCursorHandlers from "../hooks/useCursorHandlers";

function Header(){
  const cursorHandlers = useCursorHandlers();

    return(
        <header class="page-header">
          <nav>
            <a class="logo" onClick={(e) => e.stopPropagation()} href="https://facebook.com" {...cursorHandlers}>Home</a>
            <a class="logo" onClick={(e) => e.stopPropagation()} href="https://fast.com" {...cursorHandlers}>Client</a>
          </nav>
        </header>
    )
}

export default Header