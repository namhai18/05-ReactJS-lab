import React, { Component } from 'react'
import Axios from "axios";

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
        // --Study about Rest operator -->
        console.log('Study about Rest operator ES6');
        // old way 1 + 2 .
        const mSum = (num1,num2) => console.log (num1+ num2);
        mSum(1,2,3,4,5);
        // new way ...args co the dai dien cho toan bo input vao function (ham co the tuy bien rat nhieu gia tri input param)
        const mSum1 = (num1, num2,...args) => {
            // in ra 1
            console.log(num1);
            // in ra 2
            console.log(num2);
            // in ra array 3,4
            console.log(args);
            let sum = 0 ;
            // args.length chieu dai cua 
            for (let index = 0; index < args.length; index++) {
                sum+= args[index];
            }
            console.log(sum);
        }
        // call function
        mSum1(1,2,3,4);
        // ---Study about Rest operator <--
        // ---Spread operator -->
        console.log('Spread operator');
        let mArr1 = [1,2,3,4,5];
        let mArr2 = [...mArr1];
        let mArr22 = [6,7,8];
        // add them 1 parameter vao mArr1
        mArr1.push(6);
        let mArr3 = [0,...mArr1,...mArr2,9];

        console.log(mArr1);
        console.log(mArr2);
        console.log(mArr3);

        let mObj1 = {
            name : 'John',
            lastName : 'Lark'
        }
        let mObj2= {
            age : 28
        }
        let mObj3 = {...mObj1,...mObj2}
        console.log(mObj3);
        // ---Spread operator <--
        // ---Destructuring -->
        console.log('Destructuring');
        const name = "Tran Nam Hai";
        // Cut thanh nameArr , phan tach bang dau ' '
        const nameArr = name.split(' ');
        console.log(nameArr);

        // Bam nho phan tu trong mang nameArr
        let [firstName, middleName, lastName] = nameArr;
        console.log(firstName);
        console.log(middleName);
        console.log(lastName);

        const person = {
            firstName1 : 'Nguyen',
            middleName1 : 'Tran',
            lastName1 : 'Hai',
            age: 28,
        }

        let {lastName1, firstName1} = person;
        console.log(lastName1);
        console.log(firstName1);

        // Gan data nhanh dung destructing
        let fristName11 = ' John';
        let lastName11 = 'Lark';
        let age = 28;
        const personObj = {
            fristName11,
            lastName11,
            age,
        }
        console.log(personObj);

        // ---Destructuring <--
        // ---Array function map- xu ly nhanh data -->
        console.log('Array function map');
        let mArrMap = [1,2,3,4,5];
        let newArrMap = mArrMap.map((data,index)=>{
            console.log(`Item at pos : ${index} is ${data}`);
            console.log(`print text and value in the same ${index} is ${data}`);
            return data*2;
        })
        console.log(`Orginal array: ${mArrMap}`);
        console.log(`New map array: ${newArrMap}`);

        let mArr = [
            {
                fristName: 'Hai',
                lastName: 'Nam',
                age: 20,
            },
            {
                fristName: 'Hoang',
                lastName: 'Ha',
                age: 21,
            }
        ]
        let newArrMap1 = mArr.map((data,index)=>{
            console.log(data);
            return {
                firstName1: data.fristName,
                lastName1: data.lastName
            }
        })
        console.log(newArrMap1);
        console.log(`newArrMap1 : ${newArrMap1}`);

        // ---Array function map <--

        // ---Arrow function reduce -->
        console.log('Array function reduce');
        const numArr = [1,2,3,4,5]
        const result = numArr.reduce((previousValue,currentValue)=>{
            console.log(`Array function acc: ${previousValue}`);
            console.log(`Array function item value: ${currentValue}`);
            return previousValue + currentValue;
        },0)
        console.log(`Array function reduce: ${result}`);
        // ---Arrow function reduce <--

        // ---Arrow function filter - create new array with condition from original array-->
        const mArrFilter = [1,2,3,4,5,6,7,8]
        const mArrFilterResult = mArrFilter.filter((item)=> {
            return item % 2 === 0 ;
        })
        console.log(`Array function filter (chan): ${mArrFilterResult}`)

        const mArrFilterResult1 = mArrFilter.filter((item)=> {
            return item % 2 !== 0 ;
        })
        console.log(`Array function filter (le): ${mArrFilterResult1}`)

        let mObjectArrFilter = [
            {
                fristName: 'Hai',
                lastName: 'Nam',
                age: 20,
            },
            {
                fristName: 'Hoang',
                lastName: 'Ha',
                age: 21,
            }
        ]
        // find member with age >= 21
        const resultFilter = mObjectArrFilter.filter((item)=>{
            // search and return object to resultFilter if condition match
            return item.age >= 21 ;
        })
        console.log(`find member with age >= 21 with filter : ${resultFilter}`)
        console.log(resultFilter);

        // ---Arrow function filter <--

        // ---Arrow function find and findIndex -->
        console.log('Arrow function find and findIndex');
        const numArrFunc = [-1,-2,-3,1,2,3];
        // find first element from array
        const resultnumArrFunc = numArrFunc.find((item)=>{
            return (item % 2 ===0 && item >=0 )
        })
        // find first element from array
        const resultnumArrFunc1 = numArrFunc.find((item)=>{
            return (item >=0 )
        })
        const resultnumArrFuncIndex = numArrFunc.findIndex((item)=>{
            return (item >=0 )
        })
        console.log(resultnumArrFunc);
        console.log(resultnumArrFunc1);
        // print index = 3.
        console.log(resultnumArrFuncIndex);

        // ---Arrow function find and findIndex <--
        // ---Classes -->
        class Person {
            // contructor
            constructor(name,age){
                this.name = name;
                this.age = age;
            }
            // function in site class
            getDetails = () => {
                return `Name : ${this.name} and Age : ${this.age}`
            }
        }
        let me= new Person('Hai', 30);
        console.log('class:');
        console.log(me.getDetails());
        // ---Classes <--

        // ---Inheritance -->
        class Pilot extends Person {
            // contructor
            constructor(name , age ,exp){
                // cac thuoc tinh tu cha se can dc super lai.
                super(name,age);
                this.exp = exp;
            }
            // function in site class
            getDetailsPilot = () => {
                return console.log(`Name : ${this.name} and Age : ${this.age} and Exp : ${this.exp}`)
            }
        }
        console.log('Inheritance'); 
        // can input nhung thuoc tinh cua class cha nua
        const john = new Pilot('Hai',28, 30);
        const toto = new Pilot('Too', 20, 21);
        console.log('TOTO print all variable and function insite toto')
        console.log(toto);
        console.log(john);
        john.getDetailsPilot();
        // ---Inheritance <--
        // ---Callback and promise -->
        console.log('Callback and promise');
        // Call hàm tuần tự dùng callback
        Axios({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/posts"
          }).then(rs => {
              const id = 1 ;
            Axios({
                method: "GET",
                url: `https://jsonplaceholder.typicode.com/posts/${id}`
              }).then(rs => {
                //   debugger;
                console.log(rs.data);
              }).catch(err => {
                console.log(err);
              });
            console.log(rs.data);
          }).catch(err => {
            console.log(err);
          });

        // ---Callback and promise <--
        // ---promise status (pending: going on , fulfilled: completed, rejected: operation not complete , throw error) -->
        const getListPromise1 = new Promise((resolve,reject)=> {
            Axios({
                method: "GET",
                url: "https://jsonplaceholder.typicode.com/posts"
              }).then(rs => {
                // co data trang thai thanh cong 
                resolve(rs.data);
                console.log(rs.data);
              }).catch(err => {
                  reject(new Error(`Error : ${err}`))
                console.log(err);
              });
        })

        // 1 Promise luôn đi kèm resolve , reject status
        const getListPromise2 = new Promise((resolve,reject)=>{
            const id = 1 ;
            Axios({
                method: "GET",
                url: `https://jsonplaceholder.typicode.com/posts/${id}`
              }).then(rs => {
                //   debugger;
                resolve(rs.data);
                console.log(rs.data);
              }).catch(err => {
                reject(err);
                console.log(err);
              });
        })

        // response nhan data tu resolve o tren
        getListPromise1.then((response)=>{
            getListPromise2.then((response1)=>{
                // debugger;
                // 2 Axios lồng nhau nhưng 
                console.log('getListPromise1 then success')
                console.log('Then response =>',response);
                console.log('getListPromise2 then success')
                console.log('Then response =>',response1);
            }).catch ((error2)=> {
                console.log(error2)
            })
        }).catch((error)=>{
            // response nhan data tu reject o tren
            console.log('getListPromise1 catch' , error);
        })
        // ---promise (pending, fulfilled, rejected) <--
        
        // ---Chaining promise (long ghep 2 promise)  -->
        // getListPromise4 nhan data input tu getListPromise3
        const getListPromise3 = new Promise((resolve,reject)=> {
            console.log('SENDING LIST CALL(getListPromise3)');
            Axios({
                method: "GET",
                url: "https://jsonplaceholder.typicode.com/posts"
              }).then(rs => {
                // co data trang thai thanh cong 
                resolve(rs.data);
              }).catch(err => {
                  reject(new Error(`Error : ${err}`))
                console.log(err);
              });
        })
        // getListPromise4 nhận data từ getListPromise3
        const getListPromise4 = (data) => new Promise((resolve,reject)=>{
            console.log('SENDING DETAILS CALL(getListPromise4)');
            Axios({
                method: "GET",
                url: `https://jsonplaceholder.typicode.com/posts/${data[0].id}`
              }).then(rs => {
                //   debugger;
                resolve(rs.data);
              }).catch(err => {
                reject(err);
                console.log(err);
              });
        })
        getListPromise3.then(getListPromise4).then((response)=>{
            console.log('Post details response', response);
        }).catch((error)=>{
            console.log('Call error', error)
        })
        // ---Chaining promise  <--

        return (
            <div>
                <h3>FormValidationc</h3>
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
