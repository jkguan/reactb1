import React from "react";

export default function FunctionEvent() {
  const handleClick = () => {
    alert("Yeh");
  };
  const handleClickParam = (message) => {
    alert(message);
  };

  return (
    <div>
      <h2>Function Event</h2>
      {/* event js khong ap dung */}
      {/* <button onclick="handleClick()">Click me</button> */}
      <button onClick={handleClick}>Click ReactJS</button>
      {/* KHONG DUOC VIET THEM () SAU TEN HAM, VI SE CHAY TRUOC */}
      <button
        onClick={() => {
          handleClickParam("hello cyber");
        }}
      >
        Click ReactJS params
      </button>
      {/* BO HAM handleClickParam TRONG 1 ARROW FUNCTION () => {} DE KHONG CHAY LIEN*/}
    </div>
  );
}
