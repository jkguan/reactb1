// pro la thuoc tinh cua cac the, dung de truyen du lieu giua cac components
import React, { Component } from "react";
import ClassProps from "./ClassProps";
import FunctionProps from "./FunctionProps";

export default class DemoProps extends Component {
  type = "photo";
  image = "https://dmvnv.com/images/Miles-Computer.png";
  render() {
    return (
      <div>
        <h2>Props</h2>
        {/* CACH TRUYEN DU LIEU */}
        <FunctionProps loai={this.type} hinh99={this.image} />
        <ClassProps typeHaha={this.type} imgHaha={this.image} />
      </div>
    );
  }
}
