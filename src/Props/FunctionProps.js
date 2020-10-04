import React from "react";
// CACH NHAN DU LIEU TU PROPS
export default function FunctionProps(props) {
  console.log(props);
  return (
    <div>
      <h2>Function Props</h2>
      <p>type: {props.loai} </p>
      <img src={props.hinh99} alt="Hinh Dep" />
    </div>
  );
}
