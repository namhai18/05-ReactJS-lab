import React, { Component } from "react";
import UserItem from "./UserItem";
import {connect} from "react-redux";

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

// Lên store reducer để kéo data về 
const mapStateToProps = (state) => {
  return {
    // key: value
    userList: state.userReducer.userList
  };
};

export default connect(mapStateToProps,null) (Users);
