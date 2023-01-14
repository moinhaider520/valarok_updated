import React from "react";
import {Link} from 'react-router-dom';
function Footer(){
    // const handleClick = () => {
    //     window.open("https://www.valarok.com/terms/");
    //   };
    const handleClick1 = () => {
        window.open("https://www.discord.com/");
      };
    const handleClick2 = () => {
        window.open("https://www.instagram.com/");
      };
    const handleClick3 = () => {
        window.open("https://www.twitter.com/");
      };
    const handleClick4 = () => {
        window.open("https://www.opensea.com/");
      };
    return(
        <div className="footer">
            <div class="column">
            <h2>Follow Us</h2>
            <button onClick={handleClick1}><i class="fa-brands fa-discord dis"></i></button>
            <button onClick={handleClick3}><i class="fa-brands fa-twitter dis"></i></button>
            <button onClick={handleClick2}><i class="fa fa-instagram dis" aria-hidden="true"></i></button>
            <button onClick={handleClick4}><i class="fa-solid fa-sailboat dis"></i></button>
            </div>
            <div class="column">
            <h2>&copy; Valarok Since 2022</h2>
            <button><Link to="/terms" id="term">TERMS AND CONDITIONS</Link></button>
            </div>
            <div class="column">
            <h2>CONTACT US</h2>
            <p>info@valarok.com</p>
            </div>
        </div>

    )
}
export default Footer;
