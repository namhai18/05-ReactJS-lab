import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";

export default class ShoppingCart extends Component {
  mangSanPham = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+xxx',
      heDieuHanh: "Android 9.0 (Pie)xxx",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg"
    },

    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg"
    },

    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg"
    }
  ];

  constructor(props) {
    super(props);
    this.state = {
      mangSanPham: this.mangSanPham,
      detailProduct: this.mangSanPham[0],
      mangGioHang: []
    };
  }

  handleDetail = (product) => {
    this.setState({
      detailProduct: product
    });
  }

  timViTri = (id) => {
    return (this.state.mangGioHang.findIndex(sanPham => {
      return sanPham.maSP === id;
    }));
  };

  handleGioHang = (product) => {
    const addProduct = {
      maSP: product.maSP,
      tenSP: product.tenSP,
      hinhAnh: product.hinhAnh,
      soLuong: 1,
      giaBan: product.giaBan
    }

    // search trong mangGioHang xem da ton tai chua
    let index = this.timViTri(product.maSP);
    console.log(index);

    // copy ra mangGioHang rieng
    let mangGioHang = [...this.state.mangGioHang];

    // Neu khong tim thay index return -1
    if (index !== -1) {
      // Update soLuong trong mangGioHang
      mangGioHang[index].soLuong +=1;
    } else {
      // Add them 1 object vao mangGioHang
      mangGioHang = [...this.state.mangGioHang, addProduct];
    }
    // setState de render lai mangGioHang (do mang moi trung ten nen viet ngan gon)
    this.setState({
      // mangGioHang:mangGioHang  => mangGioHang
      mangGioHang
    },
      // do bat dong bo nen muon show lap tuc thi can bo vao tham so 2 cua setState
      () => {
        console.log(this.state.mangGioHang);
      });
  }


  handleDelete = (product)=>{
    console.log(product);
    // dung slice de xoa
    let index = this.timViTri(product.maSP);
    console.log(index);
    let mangGioHang = [...this.state.mangGioHang];
    if (index !== -1){
      mangGioHang.splice(index,1);
      this.setState({
        // mangGioHang:mangGioHang  => mangGioHang
        mangGioHang
      })
    }else{
      
    }
  }

  handleTangGiamSL = (product,flag) =>{
    let index = this.timViTri(product.maSP);
    let mangGioHang = [...this.state.mangGioHang];
    // Tang so luong
    if (flag){
      // mangGioHang = [...this.state.mangGioHang, product];
      mangGioHang[index].soLuong +=1;
      console.log("handleTangGiamSL: Tang");
    }else {
      if( mangGioHang[index].soLuong > 1){
        mangGioHang[index].soLuong -=1;
      }else{
        mangGioHang.splice(index,1);
      }
      console.log("handleTangGiamSL: Giam");
    }
    this.setState({
      // mangGioHang:mangGioHang  => mangGioHang
      mangGioHang: mangGioHang
    })
  }

  // Luôn luôn phải co return (); tổng trong arrow function
  tongSL = () => {
    return (this.state.mangGioHang.reduce((total,sanPham)=>{
      return total = total + sanPham.soLuong;
    },0));
    // let mangGioHang = [...this.state.mangGioHang];
    // let resultTongTien = mangGioHang.reduce((total,sanPham,index)=>{
    //   total = total + sanPham.soLuong;
    //   return total;
    // },0);
  }

  render() {

    const { detailProduct } = this.state;

    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.tongSL()})
          </button>
        </div>
        <DanhSachSanPham danhsachSanPham={this.state.mangSanPham} detailProductIndex={this.handleDetail}
          gioHangIndex={this.handleGioHang}

        />
        <Modal gioHang={this.state.mangGioHang} 
        delete = {this.handleDelete}
        tangGiamSL = {this.handleTangGiamSL} />
        <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src="./img/vsphone.jpg" alt="" />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{detailProduct.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{detailProduct.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>20 MP</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>Chính 48 MP & Phụ 8 MP, 5 MP</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>4 GB</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>6 GB</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
