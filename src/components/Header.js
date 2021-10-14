import React from 'react';
import useCursorHandlers from "../hooks/useCursorHandlers";

function Header(){
  const cursorHandlers = useCursorHandlers();

    return(
        <header class="page-header">
          <nav>
            <a class="logo" {...cursorHandlers} href="https://facebook.com">Home</a>
            <a class="logo" href="https://fast.com" {...cursorHandlers}>Client</a>
          </nav>
        </header>
    )
}

export default Header