/* 
1. dan layout
2. xac dinh data thay doi va luu vao state
3. lay data trong state di binding ra jsx
4. rende mang du lieu
5. xay dung chuc nang xem chi tiet
6. xay dung chuc nang them gio hang
7. xay dung chuc nang xoa sp khoi gio hang
8. xay dung chuc nang tang giam so luong
9. xay dung chuc nang tong so san pham
*/

import React, { Component } from "react";
import SanPham from "./SanPham";

export default class BTGioHang extends Component {
  danhSachSanPham = [
    {
      maSP: "1",
      tenSP: "Android Phone",
      hinhAnh: "./img/meizuphone.jpg",
      manHinh: `AMOLED, FHD+ 2232 x 1080 pixels`,
      heDH: "Android 9.0 (Pie)",
      cameraTruoc: "20MP",
      cameraSau: "12MP",
      ram: "4GB",
      rom: "6GB",
    },
    {
      maSP: "2",
      tenSP: "Android Phone",
      hinhAnh: "./img/vsphone.jpg",
      manHinh: `AMOLED, FHD+ 2232 x 1080 pixels`,
      heDH: "Android 10 (Pie)",
      cameraTruoc: "20MP",
      cameraSau: "12MP",
      ram: "5GB",
      rom: "7GB",
    },
    {
      maSP: "3",
      tenSP: "Apple Phone",
      hinhAnh: "./img/applephone.jpg",
      manHinh: `AMOLED, FHD+ 2232 x 1080 pixels`,
      heDH: "iOS",
      cameraTruoc: "20MP",
      cameraSau: "12MP",
      ram: "6GB",
      rom: "8GB",
    },
  ];

  state = {
    sanPhamChiTiet: {
      maSP: "1",
      hinhAnh: "./img/meizuphone.jpg",
      manHinh: `AMOLED, FHD+ 2232 x 1080 pixels`,
      heDH: "Android 9.0 (Pie)",
      cameraTruoc: "20MP",
      cameraSau: "12MP",
      ram: "4GB",
      rom: "6GB",
    },
  };

  renderDSSanPham = () => {
    return this.danhSachSanPham.map((sanPham, index) => {
      return (
        <div className="col-sm-4">
          <SanPham />
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div>
          <section className="container">
            <h3 className="title text-center">Bài tập giỏ hàng</h3>
            <div className="container text-center my-2">
              <button
                className="btn btn-danger "
                data-toggle="modal"
                data-target="#modelId"
              >
                Giỏ hàng (0)
              </button>
            </div>
            <div className="container">
              <div className="row">{this.renderDSSanPham()}</div>
            </div>
            <div
              className="modal fade"
              id="modelId"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="modelTitleId"
              aria-hidden="true"
            >
              <div
                className="modal-dialog"
                role="document"
                style={{ maxWidth: 1000 }}
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Giỏ hàng</h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Mã sản phẩm</th>
                          <th>tên sản phẩm</th>
                          <th>hình ảnh</th>
                          <th>số lượng</th>
                          <th>đơn giá</th>
                          <th>thành tiền</th>
                        </tr>
                      </thead>
                      <tbody />
                    </table>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-5">
                <img
                  className="img-fluid"
                  src={this.state.sanPhamChiTiet.hinhAnh}
                  alt
                />
              </div>
              <div className="col-sm-7">
                <h3>Thông số kỹ thuật</h3>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Màn hình</td>
                      <td>{this.state.sanPhamChiTiet.manHinh}</td>
                    </tr>
                    <tr>
                      <td>Hệ điều hành</td>
                      <td>{this.state.sanPhamChiTiet.heDH}</td>
                    </tr>
                    <tr>
                      <td>Camera trước</td>
                      <td>{this.state.sanPhamChiTiet.cameraTruoc}</td>
                    </tr>
                    <tr>
                      <td>Camera sau</td>
                      <td>{this.state.sanPhamChiTiet.cameraSau}</td>
                    </tr>
                    <tr>
                      <td>RAM</td>
                      <td>{this.state.sanPhamChiTiet.ram}</td>
                    </tr>
                    <tr>
                      <td>ROM</td>
                      <td>{this.state.sanPhamChiTiet.rom}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
