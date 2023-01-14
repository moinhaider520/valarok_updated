import React from "react";

function Waterfall(){
    return(
        <div>
            <section className="waterfall">
                <video id="waterfall-video" autoPlay loop muted >
	  		    <source src="assets/waterfall.mp4" type="video/mp4" />
      		    </video>
            </section>
        </div>
    )
}

export default Waterfall;