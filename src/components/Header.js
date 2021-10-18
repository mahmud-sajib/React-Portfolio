import useCursorHandlers from "../hooks/useCursorHandlers";
import {Link} from 'react-router-dom'

function Header(){
  const cursorHandlers = useCursorHandlers();

    return(
        <header className="page-header">
          <nav>
            <Link onClick={(e) => e.stopPropagation()} {...cursorHandlers} to="/">Home</Link>
            <Link onClick={(e) => e.stopPropagation()} {...cursorHandlers} to="/client">Client</Link>
          </nav> 
        </header>
    )
}

export default Header