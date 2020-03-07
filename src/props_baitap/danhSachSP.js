import React, { Component } from 'react'
import SanPham from './sanPham'

export default class DanhSachSP extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mangSanPham: [
                {
                    maSP: 1,
                    tenSP: "VinSmart Live",
                    manHinh: 'AMOLED, 6.2", Full HD+',
                    heDieuHanh: "Android 9.0 (Pie)",
                    cameraTruoc: "20 MP",
                    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
                    ram: "4 GB",
                    rom: "64x GB",
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
            ],
            detailProduct: {maSP: 1,
                tenSP: "VinSmart Live",
                manHinh: 'AMOLED, 6.2", Full HD+',
                heDieuHanh: "Android 9.0 (Pie)",
                cameraTruoc: "20 MP",
                cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
                ram: "4 GB",
                rom: "64x GB",
                giaBan: 5700000,
                hinhAnh: "./img/vsphone.jpg"},
        }
    }

    handleProduct = (product)=>{
        console.log(product);
        this.setState({
            detailProduct:product,
        });
    }

    renderHTML = () => {
        return this.state.mangSanPham.map((item) => {
            return (
                <SanPham product={item} key={item.maSP} setProduct={this.handleProduct} />
            );
        })
    }

    render() {
        return (
            <div>
                Danh sach SP
                <div className="container">
                    <div className="row">
                        {this.renderHTML()}
                        {/* <SanPham />
                        <SanPham />
                        <SanPham /> */}
                    </div>
                    <div className="row">
                        <div className="col-sm-5">
                            <img className="img-fluid" src="" alt="" />
                        </div>
                        <div className="col-sm-7">
                            <h3>Thông số kỹ thuật</h3>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Màn hình</td>
                                        <td>{this.state.detailProduct.manHinh}</td>
                                    </tr>
                                    <tr>
                                        <td>Hệ điều hành</td>
                                        <td>{this.state.detailProduct.heDieuHanh}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera trước</td>
                                        <td>{this.state.detailProduct.cameraTruoc}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera sau</td>
                                        <td>{this.state.detailProduct.cameraSau}</td>
                                    </tr>
                                    <tr>
                                        <td>RAM</td>
                                        <td>{this.state.detailProduct.ram}</td>
                                    </tr>
                                    <tr>
                                        <td>ROM</td>
                                        <td>{this.state.detailProduct.rom}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
