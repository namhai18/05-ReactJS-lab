import React, { Component } from 'react'

export default class Child extends Component {
    // con nhận props từ cha truyền sang thì chạy
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log("Child");
        console.log("UNSAFE_componentWillReceiveProps", nextProps);
    }

    render() {
        return (
            <div>
                <h3>Child component</h3>
                <p>{this.props.username}</p>
            </div>
        )
    }
}
