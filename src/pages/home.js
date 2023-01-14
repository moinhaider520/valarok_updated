import React, { Suspense, lazy} from "react";
const HomeHeader = lazy(() => import('../home/HomeHeader'));
const Waterfall = lazy(() => import('../home/Waterfall'));
const Team = lazy(() => import('../home/Team'));
const Partnership = lazy(() => import('../home/Partnership'));
const Footer = lazy(() => import('../home/Footer'));



function Home (){
   
        return(
            <div>	
				
			  	<Suspense fallback={<div />}>	          
          		<HomeHeader />
		  		</Suspense>
		  
		  		<Suspense fallback={<div />}>
          		<Waterfall />
		  		</Suspense>
		  
		  		<Suspense fallback={<div />}>
          		<Team />
		  		</Suspense>	

				<Suspense fallback={<div />}>
          		<Partnership />
		  		</Suspense>	

				<Suspense fallback={<div />}>
          		<Footer />
		  		</Suspense>	
            
			</div>
        )
    }
export default Home;