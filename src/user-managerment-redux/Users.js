import React, { Component } from "react";
import UserItem from "./UserItem";
import { connect } from "react-redux";

class Users extends Component {

  renderTable = () => {
    console.log("User: ");
    console.log(this.props);
    let { userList, keyWork } = this.props;
    userList = userList.filter(user => {
      return user.name.toLowerCase().indexOf(keyWork.toLowerCase()) !== -1
    });

    return userList.map((user) => {
      return <UserItem
        key={user.id}
        user={user}
        // userList={this.props.userHome}
      // getUserEdit = {this.props.getUserEdit}
      />
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
            {this.renderTable()}
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
    userList: state.userReducer.userList,
    keyWork: state.userReducer.keyWork,
  };
};

export default connect(mapStateToProps, null)(Users);
