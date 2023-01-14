import React from "react";
import {Outlet,Link} from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
class Story extends React.Component{

    render()
    {
              return(
              <div>
            <nav id="nav-page-story" style={{zIndex:"22"}}>
            <input type="checkbox" id="check" />
               <label htmlFor="check" className="checkbtn">
                  <i className="fas fa-bars"></i>
               </label>
      
            <ul id="nav-page">
                  <li><Link to="/" id="nav-a">Home</Link></li>
                  <li><Link to="/mint" id="nav-a">Mint</Link></li>
                  <li><Link to="/Story" id="nav-a">Story</Link></li>
                  <li><Link to="/Utilities" id="nav-a">Utilities</Link></li>
                  <li><Link to="/Roadmap" id="nav-a">Roadmap</Link></li>
                  <li><Link to="/toggle" id="nav-a">Faq</Link></li>
		         <Outlet />
            </ul>
            </nav>
                    <section className="story2">
                      <div className="mob-story-intro">
                      <LazyLoadImage src="assets/images/mobile-story-intro.png" alt="storyintro" />
                      <h1>Our story begins long before mankind appeared. When dinosaurs inhabited our earth, an aestroid rain fell on the planet causing destruction and altering the entire ecosystem.</h1>
                      </div>
                  
                    </section>
                    <section>
                    <video className='VideoTag' autoPlay loop muted>
                        <source src="assets/meteors.mp4" type='video/mp4'/>
                    </video>
                    <div className="mob-fallen-meteor">
                      <LazyLoadImage src="assets/images/fallen-meteor.png" alt="storyintro" />
                      <h1>It was the end for many animal species, but also the beginning of something new, unexpected. <br /><br />Some of these meteors released a powerful light, and exposure to this alien agent, Ethark, caused a genetic mutation in two different species.</h1>
                      </div>
                      
                      <video className='VideoTag' id="contact" autoPlay loop muted>
                        <source src="assets/contact.mp4" type='video/mp4'/>
                      </video>
                      <div className="mob-melian-text">
                      <LazyLoadImage src="assets/images/story-melian-text.png" alt="storyintro" />
                      <h1>and so Melian and Sabrian were born.</h1>
                      </div>
                      <LazyLoadImage style={{marginTop: "-7px"}} src="assets/images/awakening.png" id="awakening" alt="storyintro" />
                      <div className="mob-two-races">
                      <LazyLoadImage src="assets/images/two-races.png" alt="storyintro" />
                      <h1>The two races avanced very quickly but in different ways and this led them to become ever more distant.</h1>
                      </div>
                    <div className="brain-mob">
                    {/* <video className='VideoTag' autoPlay loop muted>
                        <source src="assets/brain.mp4" type='video/mp4'/>
                    </video> */}
                    <LazyLoadImage src="assets/images/brain.png" id="brain" alt="storyintro" />
                    <h1>On the one hand, the Melians who acted under the pressure of the left hemisphere of the brain; rational and analytical, they had a predilection for the use of intellect and logic.</h1>
                    <h2>On the other hand the Sabrians who developed more skills related to the right hemisphere such as creativity, intuitiveness and instinct.</h2>
                    </div>
                    <div className="mob-long-text">
                      <LazyLoadImage src="assets/images/story-melian-text.png" alt="storyintro" />
                      <h1>It didn't take long before Melian and Sabrian realized the enormous potential of the Ethark and this sparked a conflict between the two species over the control of the Ethark itself.</h1>
                      </div>
                      <video className='VideoTag' autoPlay loop muted>
                        <source src="assets/conflict.mp4" type='video/mp4'/>
                    </video>
                    <div className="mob-long-text-2">
                      <LazyLoadImage src="assets/images/story-melian-text.png" alt="storyintro" />
                      <h1 style={{top:"30%"}}>The war was bloody and lasting and caused a large number of casualties on both sides.</h1>
                      </div>
                    <video className='VideoTag' id="afterwar" autoPlay loop muted>
                        <source src="assets/war.mp4"  type='video/mp4'/>
                    </video>
                    </section>
                    <div className="mob-today-text">
                      <LazyLoadImage src="assets/images/story-melian-text.png" alt="storyintro" />
                      <h1>Even today Melian and Sabrian live hidden from mankind, whom they see as a possible enemy due to its destructive instincts and a soul corrupted by power. Some of them have perfectly camouflaged among us and so, hidden in full light, remain in watchful waiting...</h1>
                      </div>
                      <LazyLoadImage style={{width: "100%"}} src="assets/images/story10.jpg" alt="story-ending-2" />
                      <div className="mob-today-text-2">
                      <LazyLoadImage src="assets/images/story-melian-text.png" alt="storyintro" />
                      <h1>Eventually Melian and Sabrian were exhausted and decimated, it was at this point that they realized that, despite the differences between them, they had a common intent; to maintain a natural balance. So they, decided by mutual agreement to live, albeit separated, in peace but with the prerogative of keeping their existence and that of the Ethark hidden from the rest of the world.</h1>
                      </div>

            </div>
        )
    }
}
export default Story;