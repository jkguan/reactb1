import React, { Component } from "react";
import { connect } from "react-redux";

class SanPham extends Component {
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
                const sanPhamDuocNhan = this.props.sanPham;
                this.props.handleDetail(sanPhamDuocNhan);
                // this.props.handleDetail(this.props.sanPham);
              }}
            >
              Chi tiết
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                const sanPhamDuocNhan = this.props.sanPham;
                this.props.handleAddSanPham(sanPhamDuocNhan);
                // this.props.handleAddSanPham(this.props.sanPham);
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

const mapDispatchToProps = (dispatch) => {
  return {
    //key: value
    //key la props cua component: value la phuong thuc gui action len store
    handleDetail: (sp) => {
      const action = {
        type: "DETAIL_PRODUCT",
        payload: sp,
        //payload ten tu dat, data gui len
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(SanPham);
//lay du lieu la tham so thu 1
//gui du lieu len thi truyen vao tham so thu 2 mapDispatchToProps
