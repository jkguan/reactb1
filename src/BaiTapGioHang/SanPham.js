import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    // console.log("run");
    return (
      <div>
        <div className="card">
          <img
            className="card-img-top"
            src={this.props.sanPham.hinhAnh}
            alt=""
          />
          <div className="card-body">
            <h4 className="card-title">{this.props.sanPham.tenSP}</h4>
            <button
              className="btn btn-success"
              onClick={() => {
                // const sanPhamDuocNhan = this.props.sanPham;
                // this.props.handleDetail(sanPhamDuocNhan);
                this.props.handleDetail(this.props.sanPham);
              }}
            >
              Chi tiết
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                // const sanPhamDuocNhan = this.props.sanPham;
                // this.props.handleAddSP(sanPhamDuocNhan);
                this.props.handleAddSanPham(this.props.sanPham);
              }}
            >
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
