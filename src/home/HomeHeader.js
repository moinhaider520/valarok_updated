import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {Outlet,Link} from 'react-router-dom';

function HomeHeader(){
    return(
        <div className="index">
          
        <section id="header">

  <div className="header-content">   
        <LazyLoadImage
              alt="demonstration1"
              id="header-logo"
              src={"assets/images/valaroklogo.png" }
        />
        <p>Valarok is a vision<br/>A new world to build together<br/>An ancient history shaped into our future that is revolutionizing our present.<br/>A unique opportunity in the Metaverse.<br />A collection of NFT based on 3 different races that will grant you access<br /> to a variety of content and perks.<br/>A chance to attend rewarded events, challenges and games.<br /> A chance to expand your profession to create new projects.<br/>A beginning of a reality that is here to remain.</p>
          <h2>WELCOME TO VALAROK</h2>
 
          <nav id="homenav">
          <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
              <i className="fas fa-bars"></i>
            </label>

          <ul>
            <li><Link to="/" id="nav-a">Home</Link></li>
            <li><Link to="mint" id="nav-a">Mint</Link></li>
            <li><Link to="Story" id="nav-a">Story</Link></li>
            <li><Link to="Utilities" id="nav-a">Utilities</Link></li>
            <li><Link to="Roadmap" id="nav-a">Roadmap</Link></li>
            <li><Link to="toggle" id="nav-a">Faq</Link></li>
                <Outlet />
          </ul>
        </nav>
  </div>
</section>
        </div>
    )
}

export default HomeHeader;