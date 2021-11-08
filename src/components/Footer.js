import { useState, useEffect } from 'react'
import useCursorHandlers from "../hooks/useCursorHandlers";
import {useLocation, Link} from 'react-router-dom'

function Footer(){
  const cursorHandlers = useCursorHandlers();

  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

    return(
      <footer className="page-footer">
        <nav>
          <Link 
            onClick={(e) => e.stopPropagation()} 
            {...cursorHandlers}
            to="/service"
            className={splitLocation[1] === "service" ? "active" : "non-active"}
          >
            Services
          </Link>
          
          <Link 
            onClick={(e) => e.stopPropagation()} 
            {...cursorHandlers} 
            to="/client"
            className={splitLocation[1] === "client" ? "active" : "non-active"}
          >
            Clients
          </Link>
        </nav>
      </footer>
    )
}

export default Footer