import React, { Component } from 'react'

// statefull component
export default class RenderingElement extends Component {
    username = "Hai";
    lop ="fe37";

    // arrow function
    renderInfo = () =>{
        // Cần return html để tra ve gia tri
        return (<p>UserName(renderInfo) : {this.username}</p>);
    }

    render() {
        return (
            <div>
                RenderingElement
                <p>render: {this.username}</p>
                <h3>render: {this.lop}</h3>
                {this.renderInfo()};
            </div>
        )
    }
}
