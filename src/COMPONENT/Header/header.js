import React from "react";
import "./header.css";
class Header extends React.Component {
  render() {
    return (
    <div className="header">
        <h1 >Header</h1>
       <div className="_pages">
        <li>Home</li> 
        <li>About</li> 
        <li>contact</li> 
       </div>
       <div className="_buttons">
  <button>Sign in</button>
  <button>Login in</button>
       </div>
    </div>
    )
  }
}

export default Header;
