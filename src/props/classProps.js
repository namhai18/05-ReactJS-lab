import React, { Component } from "react";

export default class ClassProps extends Component {

// --2-- click button doi name của component cha
  handleResetName = () =>{
    let name = "Hai";
    this.props.resetName(name);
    console.log(this.props.name);
  }

  render() {
    let component = {
      border: "1px solid black",
      padding: "30px"
    };
    return (
      <div style={component}>
        <h3>Details here Class Component</h3>
        {/* --1-- truyen sang con , can có từ khóa this*/}
        {/* props.name đang được class index.js quan lý */}
        <p>{this.props.name}</p>
        {/* // --2-- click button doi name của component cha*/}
        <button className="btn btn-success" onClick={this.handleResetName}>reset name</button>
        <button className="btn btn-success" onClick={()=>{this.props.resetName("COOL")}}>COOL</button>
      </div>
    );
  }
}
