import React, { Component } from 'react'

export default class State extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin : false,
            username : "CyberSoft"
        };
    }

    showMe = () => {
        console.log("showMe");
        if (this.state.isLogin === true){
            this.setState({
                isLogin: false
            });
            console.log( this.state.isLogin );
        } else {
            this.setState({
                isLogin: true
            });
            console.log( this.state.isLogin );
        }
    };

    renderHtml = () => {
        if (this.state.isLogin === true) {
            return  <h3>Hello isLogin true {this.state.username} !!!</h3>
        } else
        {
            return <h3>Hello isLogin false {this.state.username} !!!</h3>
        }
    }
    
    render() {
        return (
            <div>
                ExampleEvent
                <button className= "btn btn-success" onClick = {this.showMe}>Login</button>
                {this.renderHtml()};
            </div>
        )
    }
}
