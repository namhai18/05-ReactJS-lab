import React, { Component } from 'react'

export default class HandlingEvent extends Component {

    showMe = () => {
        console.log ('Ok click');
    };

    showMeParam = (name,lop) => {
        console.log (name,lop);
    };

    render() {
        return (
            <div>
                handling-event
                <button className="btn btn-success" onClick = {this.showMe}>HandlingEvent</button>
                {/* Cách truyền tham số vào event button */}
                <button className="btn btn-success" onClick = {() => {
                    this.showMeParam("Click Paramabc","FE37")}}>Click Param</button>
            </div>
        )
    }
}
