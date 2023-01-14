import React, { Suspense, lazy } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Team1 = lazy(() => import('./Team1'));
const Team2 = lazy(() => import('./Team2'));
const Team3 = lazy(() => import('./Team3'));
const Team4 = lazy(() => import('./Team4'));
const Team5 = lazy(() => import('./Team5'));
const Team6 = lazy(() => import('./Team6'));
const HomeFooter = lazy(() => import('../home/HomeFooter'));

function Team(){
    return(
        <div className="section-team">
        <center>
        <LazyLoadImage
              alt="rocks"
              id="rocks"
              src={"assets/images/rocks.png" }
        />
        <LazyLoadImage
              alt="teamtitle"
              id="team-title"
              src={"assets/images/teamtitle.png" }
        />
        </center>
        <div className="container">
        <div className="row">
        <Suspense fallback={<div />}>
        <Team4 />
        </Suspense>
        <Suspense fallback={<div />}>
        <Team2 />
        </Suspense>
        <Suspense fallback={<div />}>
        <Team1 />
        </Suspense>
        <Suspense fallback={<div />}>
        <Team5 />
        </Suspense>
        <Suspense fallback={<div />}>
        <Team3 />
        </Suspense>
        <Suspense fallback={<div />}>
        <Team6 />
        </Suspense>
        <Suspense fallback={<div />}>
        <HomeFooter />
        </Suspense>
    
        </div>
        </div>
        
    </div>
    )
}

export default Team;