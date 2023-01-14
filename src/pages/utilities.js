import React, {Suspense, lazy} from "react";

const UtilityHeader = lazy(() => import('../utilities/UtilityHeader'));
const Box1 = lazy(() => import('../utilities/Box1'));
const Box2 = lazy(() => import('../utilities/Box2'));
const Box3 = lazy(() => import('../utilities/Box3'));
const Box4 = lazy(() => import('../utilities/Box4'));
const Box5 = lazy(() => import('../utilities/Box5'));
const Box6 = lazy(() => import('../utilities/Box6'));
const Box7 = lazy(() => import('../utilities/Box7'));
const Box8 = lazy(() => import('../utilities/Box8'));

function Utilities (){

        return(
            
        <div>
            <div className="utilities">
            
            <Suspense fallback={<div />}>
            <UtilityHeader />
            </Suspense>

            <div id="utility-title">
            <img src="assets/images/utility.png"  alt="Team Title" />
            </div>

            <Suspense fallback={<div />}>
            <Box1 />
            </Suspense>

            <Suspense fallback={<div />}>
            <Box2 />
            </Suspense>

            <Suspense fallback={<div />}>
            <Box3 />
            </Suspense>

            <Suspense fallback={<div />}>
            <Box4 />
            </Suspense>

            <Suspense fallback={<div />}>
            <Box5 />
            </Suspense>

            <Suspense fallback={<div />}>
            <Box6 />
            </Suspense>

            <Suspense fallback={<div />}>
            <Box7 />
            </Suspense>

            <Suspense fallback={<div />}>
            <Box8 />
            </Suspense>
            
            
            
         </div>
            

        </div>
        )
    }
export default Utilities;