import React, { Component } from "react";

export default class DemoCourse extends Component {
  danhSachKhoaHoc = ["React JS", "Node JS", "Vue JS"];

  /* renderDSKhoaHoc = () => {
    const danhSachKhoaHocJSX = this.danhSachKhoaHoc.map((khoaHoc, index) => {
      // trong map la 1 callback function () => {}, map tra ve mang moi, con for each chi duyet, khong tra ve
      return <li key={index}>{khoaHoc}</li>;
      // dung key de lam id khi duyet
    });
    console.log(danhSachKhoaHocJSX);
    return danhSachKhoaHocJSX; // return moi co danh sach
  }; */

  renderDSKhoaHoc = () => {
    return this.danhSachKhoaHoc.map((khoaHoc, index) => {
      // trong map la 1 callback function () => {}, map tra ve mang moi, con for each chi duyet, khong tra ve
      return <li key={index}>{khoaHoc}</li>;
      // dung key de lam id khi duyet
    });
  };

  render() {
    return (
      <div>
        <h2> List And Keys</h2>
        <h3>Danh Sách Khóa Học</h3>
        <ul>{this.renderDSKhoaHoc()}</ul>
      </div>
    );
  }
}
