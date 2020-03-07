import React, { Component } from "react";
import SanPham from "./san-pham";

export default class DanhSachSanPham extends Component {
  renderHtml = () =>{
    return this.props.danhsachSanPham.map(sanPham => {
      return <SanPham key={sanPham.maSP} product={sanPham} detailProductList={this.props.detailProductIndex} gioHangList = {this.props.gioHangIndex}/>
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
        {/* <p>{this.props.danhsachSanPham[0].tenSP}</p> */}
        {this.renderHtml()}
          {/* <SanPham />
          <SanPham />
          <SanPham /> */}
        </div>
      </div>
    );
  }
}
