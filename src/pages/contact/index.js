import React from "react";
import {Link} from "react-router-dom"
class Contact extends React.Component{
    render(){
        return(
            <div >
                  <Link to={'/'}>Go to Back</Link>
            <h1>Contact page</h1>
            </div>
        )
    }
}

export default Contact;