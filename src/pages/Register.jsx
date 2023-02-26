import React from "react";
import "./Register.css";

//components
import FormInput from "../components/FormInput";
import Buttons from "../components/Buttons";

const Register = () => {
  return (
    <div className="whole-sec2">
      <div className="left-sec2">
      <Buttons label="Button" styleBtn='btn-norm'></Buttons>
      </div>
      <div className="right-sec2">
        <form className="form-part2">
          <h2 className="title-form2">Lorem ipsum</h2>
          <h3 className="desc-form2">Lorem ipsum dolor sit amet consectetur.</h3>
          <FormInput judul="Title" />
          <FormInput judul="Title" />
          <FormInput judul="Title" />
          <FormInput judul="Title" />
          <h3 className="register2">Lorem ipsum dolor sit amet consectetur <br/> lorem ipsum dolor sit amet consectetur.</h3>
          <Buttons label='SUBMIT' styleBtn='btn-submit'></Buttons>
          <h3 className="penutup2">Lorem ipsum dolor sit amet consectetur.</h3>
        </form>
      </div>
    </div>
  );
};

export default Register;
