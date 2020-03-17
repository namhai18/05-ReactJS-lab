import React, { Component } from "react";
import {connect} from "react-redux";
import * as action from "./../redux/action";

class Search extends Component {
  render() {
    return <input type="text" className="form-control mb-3 w-50" onChange={(e)=>{
      // this.props.keywork(e.target.value)
      this.props.getKeywork(e.target.value);
    }}/>;
  }
}

const mapDispatchToProps = distpatch => {
  return {
    getKeywork: (keyworkValue) => {
      // let action = {
      //   type: "SEARCH",
      //   keyWorkabc: keyworkValue
      // };
      distpatch(action.actSearch(keyworkValue));
    }
  }
}

export default connect(null,mapDispatchToProps) (Search);
