import "../../css/FormRegister.css";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAxiosInstance } from "../api/api";

const FormRegister = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [firstname, setFirstname] = useState('');
    // const [lastname, setLastname] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState({ 
      message: '',
      status: ''
   }, [])
   const [user, setUser] = useState('');
   const axiosInstance = createAxiosInstance();

    const handleRegister = (e) => {
        e.preventDefault()

        axios.post('https://reyhafiz.aenzt.tech/api/register', {
            name: name,
            email: email,
            password: password
        })
        .then((response) => {
            console.log(response);
            setTimeout(() => {
                navigate('/login');
            }, 1000)
        })
        .catch((error) => {
            console.log(error);
            setError(error.response.data);
        })
    }


  return (
    <div>
      <form onSubmit={handleRegister}>
      <h3 className="input-title">Nama</h3>
      <input
        label="Nama"
        type="text"
        className="input-box"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
        <h3 className="input-title">Email</h3>
        <input
          label="Email"
          type="text"
          className="input-box"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <h3 className="input-title">Password</h3>
        <input
          label="Password"
          className="input-box"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input> <br/>
        <button className="btn-submit" type="submit" >SUBMIT</button>
      </form>
    </div>
  );
};

export default FormRegister;
