import React, { Component } from "react";
import {connect} from "react-redux";
// import tất cả hàm trong action
import * as action from "./../redux/action";

class UserItem extends Component {
  render() {

    let { user } = this.props;

    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            onClick={() => { 
              // chuyen sang dung redux
              this.props.edit(user);
              // this.props.getUserEdit(user)
             }}
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUserRedux"
          >
            Editx
          </button>
          <button className="btn btn-danger" onClick={() => {
            this.props.delete(user);
            // this.props.userList(user)
          }
          }>Delete</button>
        </td>
      </tr>
    );
  }
}

const mapDisaptchToProps =(dispatch) => {
  return {
    // key : value (arrow function)
    delete: (user) => {
      // let action = {
      //   type: "DELETE",
      //   user: user
      // };
      // bắn acton vào store
      dispatch(action.actDelete(user));
    },
    edit: (user) =>{
      // let action = {
      //   type: "EDIT",
      //   user: user
      // };
      dispatch(action.actEdit(user));
    }
  }
}


// connect mapDisaptchToProps vào component
export default connect(null,mapDisaptchToProps) (UserItem);
