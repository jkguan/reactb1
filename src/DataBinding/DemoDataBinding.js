import React, { Component } from "react";

export default class DemoDataBinding extends Component {
  //THUOC TINH CUA CLASS
  ten = "Admin";
  lop = 52;
  //PHUONG THUC CUA CLASS
  renderName = () => {
    return <p>Lớp: {this.lop}</p>;
  };
  render() {
    //BIEN CUA PHUONG THUC RENDER
    const hinhAnh = "https://dmvnv.com/images/Miles-Computer.png";
    return (
      <div>
        <h2>DataBinding</h2>
        <p>Tên: {this.ten}</p>
        {/* <p>Lớp: {this.lop}</p> */}
        {this.renderName()}
        <img src={hinhAnh} alt="Hinh Anh" />
        {/* hinhAnh khong can this, vi la bien */}
      </div>
    );
  }
}
