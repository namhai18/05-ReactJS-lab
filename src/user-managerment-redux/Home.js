import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import {connect} from "react-redux";
import * as action from "./../redux/action";

class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     userList: [
  //       {
  //         id: 1,
  //         name: "Dinh Phuc Nguyen",
  //         username: "dpnguyen",
  //         email: "dpnguyen@gmail.com",
  //         phoneNumber: "1123123213",
  //         type: "VIP"
  //       },
  //       {
  //         id: 2,
  //         name: "Nguyen Dinh Phuc",
  //         username: "nguyendp",
  //         email: "nguyendp@gmail.com",
  //         phoneNumber: "1123123213",
  //         type: "VIP"
  //       }
  //     ],
  //     userEdit: null,
  //     keyWork: ""
  //   };
  // }

  // timViTri = (id) => {
  //   return (this.state.userList.findIndex(user => {
  //     return user.id === id;
  //   }));
  // };

  // handleDeleteUser = (user) => {
  //   console.log("handleUser");
  //   console.log(user);
  //   let index = this.timViTri(user.id);
  //   console.log("Vi tri : " + index);
  //   let userList = [...this.state.userList];
  //   userList.splice(index, 1);
  //   this.setState({
  //     // mangGioHang:mangGioHang  => mangGioHang
  //     userList
  //   },
  //     // do bat dong bo nen muon show lap tuc thi can bo vao tham so 2 cua setState
  //     () => {
  //       console.log(this.state.mangGioHang);
  //     });
  // }

  // handleSubmitUser = (user) => {
  //   // Cần tạo object userAdd mới để tránh tham biến giá trị
  //   let userAdd = { ...user };
  //   console.log(userAdd);
  //   // UPDATE
  //   if (user.id) {
  //     let userList = [...this.state.userList];
  //     let index = this.timViTri(user.id);
  //     if (index != -1) {
  //       userList[index] = user;
  //     }
  //     this.setState({
  //       userList,
  //       userEdit: user
  //     });
  //   } else
  //   // ADD
  //   {
  //     userAdd.id = Math.random();
  //     let userList = [...this.state.userList, userAdd];
  //     this.setState({
  //       userList
  //     });
  //   }
  // }

  // handleGetUserEdit = (user) => {
  //   this.setState({
  //     userEdit: user
  //   })
  // }

  // handleKeyword = (keyWork) => {
  //   // let searchListUser = this.state.userList.filter(user=>{
  //   //   return user.name.toLowerCase().indexOf(keyWork.toLowerCase()) !== -1
  //   // });
  //   // this.setState({
  //   //   userList: searchListUser
  //   // })
  //   // Cập nhật lại keyWork so với ban đầu rỗng
  //   this.setState({
  //     keyWork
  //   })
  // }

  render() {
    // Init gia tri ban đầu từ mảng trong state
    // let { userList,keyWork } = this.state;
    // // Filter từ mảng userList đã dc bóc tách ra , không làm truc tiếp lên state
    // userList = userList.filter(user => {
    //   return user.name.toLowerCase().indexOf(keyWork.toLowerCase()) !== -1
    // });
    // => REDUX

    // this.setState({
    //   userList: searchListUser
    // })
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management Redux</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search 
          // keywork={this.handleKeyword} 
          />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUserRedux"
            // cap nhat lai state cho userEdit
            onClick={() => {
              // this.setState({
              //   userEdit: null
              // })
              this.props.changeTitle();
            }}
          >
            Add User
          </button>
        </div>
        <Users 
          // userHome={this.handleDeleteUser}
          // getUserEdit={this.handleGetUserEdit}
           />
        <Modal 
          // Dùng redux
          // submit={this.handleSubmitUser}
          // userEdit={this.state.userEdit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeTitle: () => {
      let action = {
        type: "EDIT",
        user: null
      };
      dispatch(action);
    }
  }
}

export default connect(null,mapDispatchToProps) (Home);
