import React from "react";


function Team4(){
    const handleClick = () => {
        window.open("https://www.instagram.com/stefano.ans/");
      };
    return(
            <div className="col-sm-6 col-lg-4 col-xl-4">
				<div className="single-person">
				<div className="person-image">
				<img src="assets/images/member4.png" alt="" />
				<center>
                <div className="team-icons">
                <button onClick={handleClick} className="-links"><span>link</span></button>

                </div>
                </center>
                </div>
				<div className="person-info">
                    
				</div>
				</div>
				</div>
    )
}

export default Team4;