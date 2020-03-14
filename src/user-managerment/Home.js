import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        {
          id: 1,
          name: "Dinh Phuc Nguyen",
          username: "dpnguyen",
          email: "dpnguyen@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        },
        {
          id: 2,
          name: "Nguyen Dinh Phuc",
          username: "nguyendp",
          email: "nguyendp@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        }
      ]
    };
  }

  timViTri = (id) => {
    return (this.state.userList.findIndex(user => {
      return user.id === id;
    }));
  };

  handleDeleteUser = (user) => {
    console.log("handleUser");
    console.log(user);
    let index = this.timViTri(user.id);
    console.log("Vi tri : "+index);
    let userList = [...this.state.userList];
    userList.splice(index,1);
    this.setState({
      // mangGioHang:mangGioHang  => mangGioHang
      userList
    },
    // do bat dong bo nen muon show lap tuc thi can bo vao tham so 2 cua setState
    () => {
      console.log(this.state.mangGioHang);
    });
  }

  handleSubmitUser = (user) =>{
    // Cần tạo object userAdd mới để tránh tham biến giá trị
    let userAdd = {...user};
    userAdd.id = Math.random();
    let userList = [...this.state.userList,userAdd];
    this.setState({
      userList
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            Add User
          </button>
        </div>
        <Users userList={this.state.userList} userHome={this.handleDeleteUser} />
        <Modal submit={this.handleSubmitUser}/>
      </div>
    );
  }
}

export default Home;
