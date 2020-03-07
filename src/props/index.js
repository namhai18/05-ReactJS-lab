import React, { Component } from "react";
import ClassProps from "./classProps";
import FunctionProps from "./functionProps";

export default class Props extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: "Cybersoft"
    };
  }

  // --2-- click button doi name của component cha
  handleResetName = (name)=>{
    console.log("handleResetName" + name);
    this.setState({
      name:name,
    });
  }

  render() {
    let component = {
      border: "1px solid black",
      padding: "30px"
    };
    return (
      <div style={component} className="container">
        <div className="row">
          <div className="col-sm-12">
            <p>Name is {this.state.name}</p>
            <hr />
            <div className="row">
              <div className="col-sm-6">
              {/* --1-- truyen sang con */}
              {/* // --2-- click button doi name của component cha*/}
              <ClassProps name={this.state.name} resetName={this.handleResetName}/>
              </div>
              <div className="col-sm-6">
                 {/* // --3-- click button doi name của component cha func*/}
                <FunctionProps name={this.state.name} resetName={this.handleResetName}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
