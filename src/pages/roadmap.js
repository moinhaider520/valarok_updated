import React from "react";
import {Outlet,Link} from 'react-router-dom';
export default function Roadmap() {
  return (
    <>
             
    <div className="roadmap">
            <nav id="mint-nav-page">
            	<input type="checkbox" id="check" />
               <label htmlFor="check" className="checkbtn">
                  <i className="fas fa-bars"></i>
               </label>
      
            <ul id="nav-page-mint">
                  <li><Link to="/" id="nav-a">Home</Link></li>
                  <li><Link to="/mint" id="nav-a">Mint</Link></li>
                  <li><Link to="/Story" id="nav-a">Story</Link></li>
                  <li><Link to="/Utilities" id="nav-a">Utilities</Link></li>
                  <li><Link to="/Roadmap" id="nav-a">Roadmap</Link></li>
                  <li><Link to="/toggle" id="nav-a">Faq</Link></li>
		         <Outlet />
            </ul>
			
            </nav>
            <div className="roadmap-img">
              <br/><br/><br/><br/><br/><br/><br/>
    <img src="assets/images/road-1.png" alt="layer1" id="road1" className="layers" />
    <img src="assets/images/road-2.png" alt="layer1" id="road2"  className="layers" />
    <img src="assets/images/road-3.png" alt="layer1" id="road3"  className="layers" />
    <img src="assets/images/road-4.png" alt="layer1" id="road4" className="layers" />
    <img src="assets/images/road-5.png" alt="layer1" id="road5" className="layers" />
    <img src="assets/images/road-6.png" alt="layer1" id="road6" className="layers" />
    <img src="assets/images/road-7.png" alt="layer1" id="road7" className="layers" />
    <img src="assets/images/road-8.png" alt="layer1" id="road8" className="layers" />
            </div>
    </div>
    </>
  );
}
