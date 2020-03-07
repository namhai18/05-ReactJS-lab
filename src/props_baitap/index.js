import React, { Component } from 'react'
import DanhSachSP from './danhSachSP'
import SanPham from './sanPham'

export default class BaiTapProps extends Component {
    render() {
        return (
            <div>
                <p>Bai tap props</p>
                <DanhSachSP />
            </div>
        )
    }
}
