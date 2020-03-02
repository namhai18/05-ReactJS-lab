import React, { Component } from 'react'

export default class ExampleEvent extends Component {
    isLogin = false;
    username = "CyberSoft";

    showMe = () => {
        console.log("showMe");
        if (this.isLogin === true){
            this.isLogin = false;
            console.log( this.isLogin );
        } else {
            this.isLogin = true;
            console.log( this.isLogin );
        }
    };

    renderHtml = () => {
        if (this.isLogin === true) {
            return  <h3>Hello isLogin true {this.username} !!!</h3>
        } else
        {
            return <h3>Hello isLogin false {this.username} !!!</h3>
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
