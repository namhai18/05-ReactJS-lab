import React, { Component } from 'react'

export default class ExampleCar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            imgLink : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-honda-civic-si-coupe-001-1566397363.jpg?crop=0.801xw:0.901xh;0.106xw,0.0986xh&resize=640:*"
        };
    }

    showMeParam = (color) => {
        console.log(color);
        if (color === "Black"){
            this.setState({
                imgLink: "https://carfromjapan.com/wp-content/uploads/2019/09/a-Black-car-on-the-road-min-1024x683.jpg"
            });
        }else {
            this.setState({
                imgLink: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-honda-civic-si-coupe-001-1566397363.jpg?crop=0.801xw:0.901xh;0.106xw,0.0986xh&resize=640:*"
            });
        }
    };

    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "col-sm-5">
                            <img className = "img-fluid" src={this.state.imgLink} alt="Image"/>
                        </div>
                        <div className = "col-sm-7">
                            <button className= "btn btn-success" onClick = {() => {
                                this.showMeParam("Red")}}>Red</button>
                            <button className= "btn btn-success" onClick = {() => {
                                this.showMeParam("Silver")}}>Silver</button>
                            <button className= "btn btn-success" onClick = {() => {
                                this.showMeParam("Black")}}>Black</button>
                        </div>
                    </div>
                </div>
                ExampleCar
            </div>
        )
    }
}
