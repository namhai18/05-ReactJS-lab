import React, { Component } from 'react'

export default class FormValidation extends Component {

    handleOnChange = (event) => {
        //console.log("handleOnChange: ",event);
        // Lấy dc value nguoi dung qua target
        console.log(event.target.name, event.target.value);
        // let name = event.target.name;
        // let value = event.target.value;
        let { name, value } = event.target;
        // Khi value thay doi thi tu dong setState lai - multi form ko cần ghi detail name là gì
        this.setState({
            // copy lai state value , va multi-form gan lai 
            values: { ...this.state.values, [name]: value }
        },
            () => {
                console.log(this.state);
            });
    }

    handleError = (event) => {
        console.log("handleError");
        let { name, value } = event.target;
        let mess = "";
        if (value === "") {
            mess = "Khong duoc rong";
        } else {
            mess = "";
        }

        switch (name) {
            case "manv":
                if (value !== "" && value.length < 4 ) {
                    mess = "Lon hon 3 ky tu";
                }
                this.setState({
                    manvValid: mess !== "" ? false : true,
                })
                break;
            case "tennv":
                this.setState({
                    tennvValid: mess !== "" ? false : true,
                })
                break;

            case "email":
                // value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
                if (value !== "" && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                    mess = "Email format sai";
                }
                this.setState({
                    emailValid: mess !== "" ? false : true,
                })
                break;

            default:
                break;
        }

        this.setState({
            errors: { ...this.state.errors, [name]: mess }
        }, () => {
            // formValidation => khi 3 bien tren da cap nhat xong thi goi ham
            this.formValidation();
            console.log(this.state);
        })
    }

    formValidation = () => {
        console.log("formValidation");
        this.setState({
            formValid: this.state.manvValid && this.state.tennvValid && this.state.emailValid,
        })
    }

    handleSubmit = (event) => {
        // Hàm ngăn load lại trang
        event.preventDefault();
        console.log(this.state);
        this.props.submit(this.state);
      };

    constructor(props) {
        super(props);
        this.state = {
            // tạo object values
            values: {
                manv: "",
                tennv: "",
                email: "",
            },
            // object moi chua error
            errors: {
                manv: "",
                tennv: "",
                email: "",
            },

            formValid: false,

            manvValid: false,
            tennvValid: false,
            emailValid: false,
        }
    }
    render() {
        return (
            <div>
                <h3>FormValidation</h3>
                <div className="container">
                    <h3 className="title">*FormValidation</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Mã nhân viên</label>
                            <input
                                onBlur={this.handleError}
                                // bao lỗi ngay khi nhap sai
                                onKeyUp={this.handleError}
                                onChange={this.handleOnChange}
                                type="text"
                                className="form-control"
                                name="manv" />
                            {
                                this.state.errors.manv !== "" ? <p className="alert alert-danger">{this.state.errors.manv}</p> : ""
                            }
                        </div>

                        <div className="form-group">
                            <label>Tên nhân viên</label>
                            <input
                                onBlur={this.handleError}
                                onKeyUp={this.handleError}
                                onChange={this.handleOnChange}
                                type="text"
                                className="form-control"
                                name="tennv" />
                            {
                                this.state.errors.tennv !== "" ? <p className="alert alert-danger">{this.state.errors.tennv}</p> : ""
                            }
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                onBlur={this.handleError}
                                onKeyUp={this.handleError}
                                onChange={this.handleOnChange}
                                type="email"
                                className="form-control"
                                name="email" />
                            {
                                this.state.errors.email !== "" ? <p className="alert alert-danger">{this.state.errors.email}</p> : ""
                            }
                        </div>

                        <button type="submit" className="btn btn-success" disabled={!this.state.formValid}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
