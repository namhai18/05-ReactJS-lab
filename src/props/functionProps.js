import React from "react";

export default function FunctionProps(props) {
  let component = {
    border: "1px solid black",
    padding: "30px"
  };

  {/* // --3-- click button doi name của component cha func*/}
  // --3-- cần dùng khóa let hoặc const
  let handleResetNameFunc = () =>{
    let name = "Nam";
    // resetName trùng tên với hàm bên cha
    props.resetName(name);
    console.log(props.name);
  }

  return (
    <div style={component}>
      <h3>Details here Function Component</h3>
      {/* --1-- truyen component cha sang con function ko co this nhưng có tham số input */}
      <p>{props.name}</p>
      {/* // --3-- click button doi name của component cha func*/}
      <button className="btn btn-success" onClick={handleResetNameFunc}>reset name</button>
    </div>
  );
}
