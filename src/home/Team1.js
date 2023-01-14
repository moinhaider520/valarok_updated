import React from "react";

function Team1(){
    const handleClick = () => {
        window.open("https://www.instagram.com/baqfolq/");
      };
      const handleClick1 = () => {
        window.open("https://www.soundcloud.com/bak97");
      };
    return(
            <div className="col-sm-6 col-lg-4 col-xl-4">
				<div className="single-person">
				<div className="person-image">
				<img src="assets/images/member1.png" alt="" />
				<center>
                <div className="team-icons">
                <button onClick={handleClick1} className="social-links"><span>link</span></button>
                <button onClick={handleClick} className="social-links"><span>link</span></button>
                </div>
                </center>
                </div>
				<div className="person-info">
				</div>
				</div>
				</div>
    )
}

export default Team1;