import React from 'react'
import {Link} from 'gatsby';
import headerStyles from "module";

export const Header = () => {
  return (
    <div className="header">
    <div>ERAINTERFACES</div>
    <div>
     <ul>
     <li>
     <Link to="/">Home</Link>
     </li>
     <li>
     <Link to="/industries">Industries</Link>
     </li>
     <li>
     <Link to="/aboutus">About Us</Link>
     </li>
     <li>
     <Link to="/contact">Contact Us</Link>
     </li>
     </ul>
    </div>      
        </div>
  )
}
export default Header