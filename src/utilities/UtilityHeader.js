import React from "react";
import {Outlet,Link} from 'react-router-dom';

function UtilityHeader(){
    return(
        <div>
            <nav id="nav-page-utils-mn" style={{zIndex:"22"}}>
            <input type="checkbox" id="check" />
               <label htmlFor="check" className="checkbtn">
                  <i className="fas fa-bars"></i>
               </label>
            <ul id="nav-page-utils">
                  <li><Link to="/" id="nav-a">Home</Link></li>
                  <li><Link to="/mint" id="nav-a">Mint</Link></li>
                  <li><Link to="/Story" id="nav-a">Story</Link></li>
                  <li><Link to="/Utilities" id="nav-a">Utilities</Link></li>
                  <li><Link to="/Roadmap" id="nav-a">Roadmap</Link></li>
                  <li><Link to="/toggle" id="nav-a">Faq</Link></li>
		         <Outlet />
            </ul>
         </nav>
        </div>
    )
}

export default UtilityHeader;