import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {

        const{product} = this.props;

        return (
            <div className="col-sm-4">
                <div className="card">
                    <img className="card-img-top" src="https://i0.wp.com/www.thesupercarblog.com/wp-content/uploads/2019/09/Bugatti-Chiron-Super-Sport-300-Plus-2.jpg?resize=1000%2C500&ssl=1" alt="" />
                    <div className="card-body">
                        <h3 className="card-title">Tên sản phẩm : {product.tenSP}</h3>
                        <h3 className="card-title">Màn hình : {product.manHinh}</h3>
                        <button className="btn btn-success" onClick={()=>{this.props.setProduct(product)}} >Chi tiết</button>
                        {/* <button className="btn btn-danger">Thêm giỏ hàng</button> */}
                    </div>
                </div>
            </div>
        );
    }
}
