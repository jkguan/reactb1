import React, { Component } from "react";

export default class ClassProps extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>ClassProps</h2>
        <p>type: {this.props.typeHaha} </p>
        <img src={this.props.imgHaha} alt="Hinh Dep 2" />
      </div>
    );
  }
}
