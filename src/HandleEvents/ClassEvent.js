import React, { Component } from "react";

export default class ClassEvent extends Component {
  // phuong thuc cua class
  hanldleFocus = () => {
    // alert("Da Focus roi!");
    console.log("Da Focus roi!");
  };

  hanldleFocusParams = (message) => {
    console.log(message);
  };

  render() {
    return (
      <div>
        <h2>ClassEvents</h2>
        <input
          type="text"
          placeholder="Noi Dung Focus"
          onFocus={this.hanldleFocus}
        ></input>
        {/* phai dung this vi handleFocus chi la phuong thuc */}
        <input
          type="text"
          placeholder="ND Focus param"
          onFocus={() => this.hanldleFocusParams("Hello nhé!")}
          /* arrow function () => neu co 1 lenh co the bo luon {} */
        ></input>
      </div>
    );
  }
}
