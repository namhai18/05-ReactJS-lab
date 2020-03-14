import React, { Component } from "react";

class UserItem extends Component {
  render() {

    let {user} = this.props;

    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button 
            onClick = {()=>{this.props.getUserEdit(user)}}
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            Edit
          </button>
          <button className="btn btn-danger" onClick = {()=>{this.props.userList(user)}}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default UserItem;
