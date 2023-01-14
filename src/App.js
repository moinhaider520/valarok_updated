import React, {Suspense, lazy} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Routes,} from 'react-router-dom';
import Music from './pages/music';

const Home = lazy(() => import ('./pages/home'))
const Story = lazy(() => import ('./pages/story'))
const Mint = lazy(() => import ('./pages/mint'))
const Utilities = lazy(() => import ('./pages/utilities'))
const Roadmap = lazy(() => import ('./pages/roadmap')) 
const Toggle = lazy(() => import ('./pages/toggle'))
const Terms = lazy(() => import ('./pages/Terms'))  

function App() {


  return (
    
   <div className="App">

    
      
      <BrowserRouter>
      <Suspense fallback={<div />}>
      <Routes>
      <Route>
          <Route index element={<Home />} />
          <Route path="story" element={<Story />} />
          <Route path="mint" element={<Mint />} />
          <Route path="roadmap" element={<Roadmap />} />
          <Route path="utilities" element={<Utilities />} />
          <Route path="toggle" element={<Toggle />} />
          <Route path="terms" element={<Terms />} />
        </Route>
      </Routes>
      </Suspense>
    </BrowserRouter>
    <div>
    <Music />
    </div>
    
    </div>
  );
}

export default App;
