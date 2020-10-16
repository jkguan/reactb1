import React, { Component } from "react";

export default class CartItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.cart.maSP}</td>
        <td>{this.props.cart.tenSP}</td>
        <td>
          <img src={this.props.cart.hinhAnh} width={50} alt="" />
        </td>
        <td>
          <button
            onClick={() => {
              // const cartDuocNhan = this.props.cart;
              // this.props.handleDelete(cartDuocNhan);
              this.props.handleTangGiam(this.props.cart, false);
              //khi giam cho gia tri la false
            }}
          >
            -
          </button>
          {this.props.cart.soLuong}
          <button
            onClick={() => {
              this.props.handleTangGiam(this.props.cart, true);
              //khi tang cho gia tri la true
            }}
          >
            +
          </button>
        </td>
        <td>{this.props.cart.giaBan}</td>
        <td>{this.props.cart.giaBan * this.props.cart.soLuong}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              const cartDuocNhan = this.props.cart;
              this.props.handleDelete(cartDuocNhan);
              // this.props.handleDelete(this.props.cart);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
