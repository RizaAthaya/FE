import React from "react";
import "./FormInput.css";
import axios from "axios";
import { useState } from "react";
import { Typography, TextField, Button, Link } from "@mui/material";

const FormInput = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({ 
        message: '',
        status: ''
     })

  

  const handleLogin = (event) => {
    event.preventDefault();

    axios
      .post("https://tweet-api.up.railway.app/api/v1/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        window.localStorage.setItem("token", response.data.token.token);

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
        setError(error.response.data);
      });
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <h3 className="input-title">
          Email
        </h3>
        <input placeholder="Email" label="Email" type="text" className="input-box" onChange={(e) => { setEmail(e.target.value) }}></input>
        <h3 className="input-title" >
          Password
        </h3>
        <input placeholder="Password" label="Password" className="input-box" type="password" onChange={(e) => { setPassword(e.target.value) }}></input>
        <br/>
        <button type="submit" className="btn-submit">SUBMIT</button>
      </form>
    </>
  );
};

export default FormInput;
