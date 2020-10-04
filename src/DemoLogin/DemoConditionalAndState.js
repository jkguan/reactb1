import React, { Component } from "react";

export default class DemoConditionalAndState extends Component {
  /* isLogin la thuoc tinh cua Class
    true: da dang nhap > hien ten nguoi dung
    false: chua dang nhap > hien nut login
    */
  //   isLogin = false;
  // dung state de phuong thuc render chay lai
  state = {
    isLogin: false,
  };

  handleClick = () => {
    // this.handleClick = true;
    // console.log(this.isLogin);
    // this.state.isLogin = true;
    this.setState({ isLogin: true });
    // dung state de cap nhat lai component, neu khong chi cap nhat gia tri ben trong, ma khong cap nhat giao dien
  };

  //PHUONG THUC CUA CLASS
  renderLogin = () => {
    // if/else
    if (this.state.isLogin) {
      return <p>Admin</p>;
    } else {
      return <button onClick={this.handleClick}>Login</button>;
    }

    //CACH 2 TOAN TU 3 NGOI
    //DIEU KIEN ? XU LY DUNG : XU LY SAI
    // return this.isLogin ? <p>Admin</p> : <button>Login</button>;
  };

  render() {
    console.log("Render chay");
    return (
      <div>
        <h2>Conditional and State</h2>
        <div>{this.renderLogin()}</div>
      </div>
    );
  }
}
