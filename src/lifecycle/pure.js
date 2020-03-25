import React, { Component, PureComponent } from 'react'

// Khi click ko render lại Pure Component (extend từ PureComponent)
// Nếu có truyền props vào thì vẫn sẽ render lại
export default class Pure extends PureComponent {
    render() {
        console.log ("Pure_render");
        return (
            <div>
                <h3>Pure</h3>
                {/* <p>{this.props.username}</p> */}
            </div>
        )
    }
}
