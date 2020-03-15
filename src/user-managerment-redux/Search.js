import React, { Component } from "react";
import {connect} from "react-redux";

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
      let action = {
        type: "SEARCH",
        keywork: keyworkValue
      };
      distpatch(action);
    }
  }
}

export default connect(null,mapDispatchToProps) (Search);
