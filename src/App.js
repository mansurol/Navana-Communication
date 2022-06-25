import React from 'react';
import Navbar from './Components/TestOne/Navbar';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import LayoutOne from './Components/TestOne/LayoutOne/LayoutOne'
import LayoutTwo from './Components/TestOne/LayoutTwo/LayoutTwo'
import LayoutThree from './Components/TestOne/LayoutThree/LayoutThree'

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
     <Routes>
     <Route path="/Layout1" element={<LayoutOne />}/>
     <Route path="/Layout2" element={<LayoutTwo />}/>
     <Route path="/Layout3" element={<LayoutThree />}/>
     <Route exact path="/" element={<LayoutOne />}/>
   
     </Routes>
 

  </BrowserRouter>      
    </div>
  );
};

export default App;