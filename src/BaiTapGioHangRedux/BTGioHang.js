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
https://cyber-demo-example-project-reactjs.vercel.app/cart
*/

import React, { Component } from "react";
import Modal from "./Modal";
import SanPham from "./SanPham";
import { connect } from "react-redux";

class BTGioHang extends Component {
  /* danhSachSanPham = [
    {
      maSP: "1",
      tenSP: "Android MZ",
      hinhAnh: "./img/meizuphone.jpg",
      manHinh: `AMOLED, FHD+ 2232 x 1080 pixels`,
      heDH: "Android 9.0 (Pie)",
      cameraTruoc: "20MP",
      cameraSau: "12MP",
      ram: "4GB",
      rom: "6GB",
      giaBan: 4999999,
    },
    {
      maSP: "2",
      tenSP: "Android VS",
      hinhAnh: "./img/vsphone.jpg",
      manHinh: `AMOLED, FHD+ 2232 x 1080 pixels`,
      heDH: "Android 10 (Pie)",
      cameraTruoc: "20MP",
      cameraSau: "12MP",
      ram: "5GB",
      rom: "7GB",
      giaBan: 5888888,
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
      giaBan: 6333333,
    },
  ]; */

  /* STATE */
  state = {
    sanPhamChiTiet: {
      maSP: "1",
      tenSP: "",
      hinhAnh: "./img/meizuphone.jpg",
      manHinh: `AMOLED, FHD+ 2232 x 1080 pixels`,
      heDH: "Android 9.0 (Pie)",
      cameraTruoc: "20MP",
      cameraSau: "12MP",
      ram: "4GB",
      rom: "6GB",
    },

    danhSachGioHang: [],
  };

  handleAddSanPham = (sanPham98) => {
    // console.log("sanPham98:", sanPham98);
    let danhSachGioHang = [...this.state.danhSachGioHang];
    // <...> dung de copy (clone) mang de tranh bi tham chieu cung vung gia tri

    /* findIndex tim xem co ton tai trong mang hay khong
      neu co ton tai tra ve vi tri index
      neu ko ton tai tra ve -1
    */
    const index = danhSachGioHang.findIndex((cart) => {
      return cart.maSP === sanPham98.maSP;
    });
    if (index !== -1) {
      // tim thay, cap nhat so luong
      danhSachGioHang[index].soLuong += 1;
    } else {
      //khong tim thay, set so luong, push vao mang
      sanPham98.soLuong = 1;
      //khi them vao gio hang thi moi can so luong, soLuong khi nhan lan dau khong co, nen phai tu tao ra 1
      danhSachGioHang = [...danhSachGioHang, sanPham98];
    }
    // danhSachGioHang.push(sanPham98);
    // danhSachGioHang = [...danhSachGioHang, sanPham98];
    /* setState*/
    this.setState(
      {
        danhSachGioHang: danhSachGioHang,
      },
      () => {
        //console.log(this.state.danhSachGioHang);
        // xem <() => {console.log(this.state.danhSachGioHang);> như la tham số 2
      }
    );
  };

  handleTangGiam = (cart, staTus) => {
    // console.log(cart, staTus);
    /*
    1. Lay mang gio hang ra
    2. Tim vi tri phan tu duoc nhan
    3. Check tang hay giam
    4. Cap nhat lai state
     */
    // let danhSachGioHang = this.state.danhSachGioHang;
    // let sanPhamChiTiet = this.props;
    //this.state la object, Dung Boc Tach Destructring
    let { danhSachGioHang, sanPhamChiTiet } = this.state;
    const index = danhSachGioHang.findIndex((item33) => {
      return item33.maSP === cart.maSP;
      //cart la nut modal
    });
    if (index !== -1) {
      if (staTus) {
        danhSachGioHang[index].soLuong += 1;
      } else {
        if (danhSachGioHang[index].soLuong > 1) {
          //danhSachGioHang[index].soLuong la so luong hien tai khong duoc am
          danhSachGioHang[index].soLuong -= 1;
        } else {
          alert("Khong The Giam Them");
        }
      }
    }
    this.setState({
      danhSachGioHang,
      sanPhamChiTiet,
    });
  };

  handleDetail = (sanPham97) => {
    // console.log("run");
    this.setState({
      sanPhamChiTiet: sanPham97,
    });
    //state trong bt gio hang thi phai set state trong gio hang
  };

  handleDelete = (cart) => {
    //neu nhu dk dung thi tra ve mang dung, deu dk sai thi tra ve mang nhung loai phan tu sai ra
    let danhSachGioHang = this.state.danhSachGioHang;
    danhSachGioHang = danhSachGioHang.filter((item) => {
      return cart.maSP !== item.maSP;
    });
    this.setState({ danhSachGioHang });
  };

  renderTotal = () => {
    let { danhSachGioHang } = this.state;
    let total = danhSachGioHang.reduce((tong, cartHienTai) => {
      return (tong += cartHienTai.soLuong);
    }, 0);
    //tham so thu 1  la callback func, tham so thu 2 la gia tri ban dau cua tong (0)
    //reduce return ve 1 gia tri, khac ve map, filter tra ve 1 mang
    return total;
  };

  renderDSSanPham = () => {
    return this.props.danhSachSP.map((sanPham99, index) => {
      //cham props
      return (
        <div className="col-sm-4" key={index}>
          <SanPham
            // handleDetail={this.handleDetail}
            handleAddSanPham={this.handleAddSanPham}
            sanPham={sanPham99}
          />
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
                Giỏ hàng: {this.renderTotal()}
              </button>
            </div>
            <div className="container">
              <div className="row">{this.renderDSSanPham()}</div>
            </div>
            <Modal
              handleDelete={this.handleDelete}
              danhSachGioHang={this.state.danhSachGioHang}
              handleTangGiam={this.handleTangGiam}
            />
            <div className="row">
              <div className="col-sm-5">
                <img
                  className="img-fluid"
                  src={this.props.sanPhamCT.hinhAnh}
                  alt=""
                />
              </div>
              <div className="col-sm-7">
                <h3>Thông số kỹ thuật</h3>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Màn hình</td>
                      <td>{this.props.sanPhamCT.manHinh}</td>
                    </tr>
                    <tr>
                      <td>Hệ điều hành</td>
                      <td>{this.props.sanPhamCT.heDH}</td>
                    </tr>
                    <tr>
                      <td>Camera trước</td>
                      <td>{this.props.sanPhamCT.cameraTruoc}</td>
                    </tr>
                    <tr>
                      <td>Camera sau</td>
                      <td>{this.props.sanPhamCT.cameraSau}</td>
                    </tr>
                    <tr>
                      <td>RAM</td>
                      <td>{this.props.sanPhamCT.ram}</td>
                    </tr>
                    <tr>
                      <td>ROM</td>
                      <td>{this.props.sanPhamCT.rom}</td>
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

const mapStateToProps = (state) => {
  return {
    //key: value
    //key la props cua component, value la state duoc luu tren store
    danhSachSP: state.gioHangReducer.danhSachSanPham,
    sanPhamCT: state.gioHangReducer.sanPhamChiTiet,
  };
};

export default connect(mapStateToProps)(BTGioHang);
//lay du lieu la tham so thu 1
