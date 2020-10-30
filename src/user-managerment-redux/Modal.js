import React, { Component } from "react";
import {connect} from "react-redux";
import * as action from "./../redux/action";

class Modal extends Component {

  // có form thì tao state để quản lý
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      username: "",
      name: "",
      email: "",
      phoneNumber: "",
      type: "USER"
    };
  }

  // Khi nhập props tiếp theo khác props ban đầu thì chạy
  componentWillReceiveProps(nextProps) {
    // Kiem tra xem nextProps có tồn tại hay chưa
    if (nextProps && nextProps.userEdit) {
      this.setState({
        id: nextProps.userEdit.id,
        username: nextProps.userEdit.username,
        name: nextProps.userEdit.name,
        email: nextProps.userEdit.email,
        phoneNumber: nextProps.userEdit.phoneNumber,
        type: nextProps.userEdit.type
      })
    } else {
      // reset lai state cho cac value
      this.setState({
        id: "",
        username: "",
        name: "",
        email: "",
        phoneNumber: "",
        type: "USER"
      })
    }
  }

  // tham so mac dinh cua ham la event OR e
  handleOnChange = (event) => {
    console.log(event);
    // Lấy dc value nguoi dung qua target
    console.log(event.target.name, event.target.value);
    let name = event.target.name;
    let value = event.target.value;
    // Khi value thay doi thi tu dong setState lai 
    this.setState({
      [name]: value
    },
      () => {
        console.log(this.state);
      });
  }

  

  handleSubmit = (event) => {
    // Hàm ngăn load lại trang
    event.preventDefault();
    debugger;
    console.log(this.state);
    this.props.onSubmit(this.state);
    // this.props.submit(this.state);
    // Dùng redux ko cần đẩy ra ngoài nữa
    
  };

  render() {
    return (
      <div
        className="modal fade"
        id="modelIdUserRedux"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {this.props.userEdit ? "EDIT USER" : "ADD USER"}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              {/* Kien thuc form */}
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  {/* Từng input phải có name (username trùng tên trên state)*/}
                  <input name="username" onChange={this.handleOnChange} type="text" className="form-control" value={this.state.username} />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input name="name" onChange={this.handleOnChange} type="text" className="form-control" value={this.state.name} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input name="email" onChange={this.handleOnChange} type="text" className="form-control" value={this.state.email} />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input name="phoneNumber" onChange={this.handleOnChange} type="text" className="form-control" value={this.state.phoneNumber} />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select name="type" onChange={this.handleOnChange} className="form-control" value={this.state.type}>
                    <option>USER</option>
                    <option>VIP</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success" >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Lên store kéo data userEdit về
const mapStateToProps = state =>{
    return {
      userEdit: state.userReducer.userEdit
    };
}
// Đẩy data lên store tùy theo action
const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (user) =>{
      // let action = {
      //   type: "SUBMIT",
      //   user: user
      // };
      dispatch(action.actSubmit(user));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (Modal);
