import React, { useState } from "react";
import Header from "../Components/Header";
import GoBackBtn from "../Components/GoBackBtn";
import Form from "../Components/Form";
import "./Compare.css";
function Compare() {
  return (
    <>
      <Header />
      <div className="container">
        <GoBackBtn />
        <div className="form-component">
          <Form />
          <Form />
        </div>
      </div>
    </>
  );
}

export default Compare;
