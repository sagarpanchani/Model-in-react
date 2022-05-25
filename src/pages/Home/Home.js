
import React from "react";

import  {Button ,Modal} from "react-bootstrap";
class Home extends React.Component{
    constructor(){
        super()
        this.state={
            show:false,
        }}
        handleModle(){
          this.setState({show: !this.state.show})
        }
    
    render(){
        return(
            <div >
           
              
            <Button  onClick={()=>this.handleModle()}>Click  me</Button>
            <Modal  show={this.state.show} onHide={()=>this.handleModle()}>
            <Modal.Dialog   >
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Modal body text goes here.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={()=>this.handleModle()}>Close</Button>
    <Button variant="primary" onClick={()=>this.handleModle()}>Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>
</Modal>
            </div>
        )
    }

}
export default Home;