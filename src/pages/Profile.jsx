import React, { useState, useEffect } from "react";
import "../css/Profile.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import Navbar from "../components/general/Navbar2";
import Footer from "../components/general/Footer";
import { createAxiosInstance } from "../components/api/api";

const Profile = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: 0,
    phone_number: '',
    image: null,
    gender: '',
  });
  //tanya kakaknya. soalnya ga cuma foto, tapi harus nangkep repon dari api juga
  // const [Pict, HandlePhoto] = useForm();
  const [photo, setPhoto] = useState("");
  const [error, setError] = useState({
    message: "",
    status: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  useEffect(() => {
    const localStore = localStorage.getItem("token");
    const token = localStore;
    async function fetchData() {
      const response = await axios
        .get("https://reyhafiz.aenzt.tech/api/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          // console.log(response);
          const data = response.data.data;
          const currentData = {
            name: data.name,
            email: data.email,
            age: data.age,
            phone_number: data.phone_number,
            image: data.image,
            gender: data.gender,
          };

          console.log('data', data);
          setFormData(currentData);
        })
        .catch((error) => {
          console.log(error);
          setError(error.response.data);
        });
      console.log(response);
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log(formData.phone_number);
  }, [formData])

  const HandleSubmit = (e) => {
    e.preventDefault();

    axios;
    const token = localStorage.getItem("token");
    axios
      .post(
        `https://reyhafiz.aenzt.tech/api/users`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((result) => {
        console.log(result);

        // setTimeout(() => {
        //   window.location.reload();
        // }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="profile">
      <Navbar />
      <div className="semua-profileIsi">
        <div className="whole-profile">
          <div className="box-profile">
            <form onSubmit={HandleSubmit}>
              <div className="atas-profile">
                <h2 className="title-profile">Profile Saya</h2>
                <div className="pict-partProfile">
                  <img className="img-profile" src=""></img>
                  <input
                    label="foto"
                    type="file"
                    className="file-box"
                    onChange={handleChange}/>
                </div>
              </div>
              <h3 className="input-title">Nama</h3>
              <input
                value={formData.name}
                name="name"
                label="Nama"
                type="text"
                className="input-box"
                onChange={handleChange}
                required
              ></input>
              <h3 className="input-title">Email</h3>
              <input
                value={formData.email}
                label="Email"
                type="text"
                name="email"
                className="input-box"
                onChange={handleChange}
                required
              ></input>
              <h3 className="input-title">Password</h3>
              <input
                placeholder="Password"
                label="Password"
                className="input-box"
                type="password"
                name="password"
                value={'rahasia'}
                disabled
                required
                ></input>
              <h3 className="input-title">Nomor Telepon</h3>
              <input
                placeholder="Nomor Telepon"
                label="NoTelpon"
                type="text"
                value={formData.phone_number}
                name="phone_number"
                className="input-box"
                onChange={handleChange}
              ></input>
              <h3 className="input-title">Usia</h3>
              <input
                placeholder="Usia"
                label="Usia"
                type="text"
                className="input-box"
                value={formData.age}
                name="age"
                onChange={handleChange}
                required
                ></input>
              <h3 className="input-title">Jenis Kelamin</h3>
              <input
                placeholder="Jenis Kelamin"
                label="JenisKelamin"
                type="text"
                className="input-box"
                value={formData.gender}
                name="gender"
                onChange={handleChange}
                required
                ></input>
              <br />
              <button type="submit" className="btn-submit">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
