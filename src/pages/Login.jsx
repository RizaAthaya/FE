import React from "react";
import "./Login.css";

//components
import FormInput from "../components/FormInput";
import Button from "../components/Button";

const Login = () => {
  return (
    <>
      <div className="whole-sec">
        <div className="left-sec">
          <Button label="Button"></Button>
        </div>
        <div className="right-sec">
          <form className="form-part">
            <h2 className="title-form">Lorem ipsum</h2>
            <h3 className="desc-form">Lorem ipsum dolor sit amet consectetur.</h3>
            <FormInput judul='Title'/>
            <FormInput judul='Title'/>
            <h3 className="register">Lorem ipsum</h3>
            <button type="submit" className="submit-form">SUBMIT</button>
            <h3 className="penutup">Lorem ipsum dolor sit amet consectetur.</h3>
          </form>
          
        </div>
        
      </div>
    </>
  );
};

export default Login;
