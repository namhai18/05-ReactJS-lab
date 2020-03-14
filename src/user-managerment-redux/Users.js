import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  
  renderHTML = () => {
    return this.props.userList.map((user)=>{
      return <UserItem 
      key={user.id} 
      user={user} 
      userList = {this.props.userHome}
      getUserEdit = {this.props.getUserEdit}/>
    });
  }
  
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {/* <UserItem />
            <UserItem />
            <UserItem /> */}
            {this.renderHTML()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Users;
