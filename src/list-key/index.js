import React, { Component } from 'react'
import data from "./data.json";

export default class ListKey extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            mangSanPham : [
                {maSP : 1 , tenSP : 'Iphone' , gia : 1000},
                {maSP : 2 , tenSP : 'SS' , gia : 2000},
                {maSP : 3 , tenSP : 'BB' , gia : 3000},
            ],
            listMovie : data
        }
    }

    renderTable=() => {
        console.log(this.state.listMovie);
        return this.state.mangSanPham.map((item)=>{
            return (<tr key= {item.maSP}> 
                <td>{item.maSP}</td>
                <td>{item.tenSP}</td>
                <td>{item.gia}</td>
            </tr>);
        })
    };

    renderHtml = () =>{
        let {listMovie} = this.state;
        return listMovie.map( movie => {
            return (
                <div className = "col-sm-4" key={movie.maPhim}>
                        <div className="card" style={{ width: "18rem" }}>
                            <img className="card-img-top" src={movie.hinhAnh} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{movie.tenPhim}</h5>
                                <p className="card-text">
                                {movie.moTa}
                                </p>
                                <a href="#" className="btn btn-primary">
                                Go somewhere
                                </a>
                            </div>
                        </div>
                </div>
            )
        });
    };

    render() {
        return (
            <div>
                Listket
                <table className="table">
                    <thead>
                        <tr>
                            <th>Ma</th>
                            <th>Ten</th>
                            <th>Gia</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()};
                    </tbody>
                </table>
                <div className = "container">
                    <div className = "row">
                        {this.renderHtml()}
                        <div className = "col-sm-4">
                        
                        </div>
                        <div className = "col-sm-4">
                        
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
