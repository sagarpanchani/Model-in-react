import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  Redirect,
} 
from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About";
import Contact from "../pages/contact";
 const Routercontainer=()=>{
  return (
    <Router>
    <Routes>
        
          <Route path="/" element={<Home /> }>
       
          </Route>
          <Route path="/about" element={<About />}>
          
          </Route>
          <Route path="/Contact" element={<Contact /> }>
       
          </Route>
   
   </Routes>
    </Router>
  );
}
export default Routercontainer;