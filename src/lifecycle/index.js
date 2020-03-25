import React, { Component } from 'react'
import Child from './child'
import Pure from './pure'

export default class lifeCycle extends Component {
    // Hàm khởi tạo
    constructor(props) {
        super(props);
        console.log("constructor");
        this.state = {
            username: "CyberSoft"
        };
    }

    // Không phải hàm - chạy sau khi constructor chạy
    UNSAFE_componentWillMount() {
        console.log("componentWillMount");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    // Khi có set state lại thì componentWillUpdate chạy > render chạy > componentDidUpdate
    UNSAFE_componentWillUpdate() {
        console.log("componentWillUpdate");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    shouldComponentUpdate(nextProps, nextState) {
        // nextProps : không nhận props từ cha nên rỗng
        console.log(nextProps);
        // nextState : có state mới là Nam Hai
        console.log(nextState);
        console.log("shouldComponentUpdate");
        if (nextState.username === "NamHai"){
            return true;
        }
        return false;
    }

    UNSAFE_componentWillReceiveProps () {
        console.log ("UNSAFE_componentWillReceiveProps");
    }

    // --- RULE CHẠY ---
    // 1. contructor
    // 2. willMount (chạy 1 lần duy nhất)
    // 3. render
    // 4. componentDidMount(chạy 1 lần duy nhất) : Call API, xử lý chương trình nhiều trong này.
    // shouldComponentUpdate (return true cho phép update || return false không cho phép update) default là true : update
    // 5. UNSAFE_componentWillUpdate (khi có set lại state mới chạy)
    // 6. componentDidUpdate
    // UNSAFE_componentWillReceiveProps => con nhận props từ cha truyền sang thì chạy 
    render() {
        console.log("render");
        return (
            <div>
                <h3>
                    Lifecycle
                </h3>
                <Child username= {this.state.username}/>
                <Pure />
                <p>Username: {this.state.username}</p>
                {/* CLick button thì thay đổi test username thành tên khác */}
                <button className="btn btn-success" onClick={() => this.setState({
                    username: "NamHai",
                })}>Click</button>
            </div>
        )
    }
}
