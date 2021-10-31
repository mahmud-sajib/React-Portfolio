import useCursorHandlers from "../hooks/useCursorHandlers";
import {Link} from 'react-router-dom'

function Footer(){
  const cursorHandlers = useCursorHandlers();
    return(
        <footer className="page-footer">
          <nav>
            <Link onClick={(e) => e.stopPropagation()} to="/service" {...cursorHandlers}>Services</Link>
            
            <Link onClick={(e) => e.stopPropagation()} {...cursorHandlers} to="/client">Clients</Link>
          </nav>
        </footer>
    )
}

export default Footer