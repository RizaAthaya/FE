import React from "react";
import "./Footer.css";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer1">
        <h2>Logo</h2>
        <h4>Lorem ipsum dolor sit amet consectetur.</h4>
        <h4>© 2023 Lorem. Hak cipta dilindungi.</h4>
      </div>
      <div className="footer2">
        <ul>
          <li className="title-footer2">LAYANAN</li>
          <li>Layanan</li>
          <li>Layanan</li>
          <li>Layanan</li>
        </ul>
      </div>
      <div className="footer3">
        <ul>
            <li className="title-footer3">LAINNYA</li>
            <li>Lainnya</li>
            <li>Lainnya</li>
            <li>Lainnya</li>
            <li>Lainnya</li>
        </ul>
      </div>
      <div className="footer4">
        <h2>TENTANG KAMI</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur. Elit ultrices netus in
          potenti.
        </h3>
      </div>
    </div>
  );
};

export default Footer;
