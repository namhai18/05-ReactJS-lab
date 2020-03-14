import React, { Component } from "react";

class Modal extends Component {

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
    ()=>{
      console.log(this.state);
    });
  }

  // có form thì tao state để quản lý
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      username:"",
      name:"",
      email:"",
      phoneNumber:"",
      type: "USER"
    };
  }

  handleSubmit = (event) => {
    // Hàm ngăn load lại trang
    event.preventDefault();
    console.log(this.state);
    this.props.submit(this.state);
  };

  render() {
    return (
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">ADD USER</h5>
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
                  <input name="username" onChange={this.handleOnChange} type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input name="name" onChange={this.handleOnChange} type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input name="email" onChange={this.handleOnChange} type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input name="phoneNumber" onChange={this.handleOnChange} type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select name="type" onChange={this.handleOnChange} className="form-control">
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

export default Modal;
