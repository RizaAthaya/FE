import React from "react";
import "../../css/Footer.css";

//assets
import Call from "../../assets/Call.svg";
import Mail from "../../assets/Mail.svg";
const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer-parts">
        <div className="footer1">
          <h2>LOGO</h2>
          <h4>Lorem ipsum dolor sit amet consectetur.</h4>
          <h4>© 2023 Lorem. Hak cipta dilindungi.</h4>
        </div>
        <div className="footer2">
          <ul>
            <li className="title-footer">LAYANAN</li>
            <li className="part-footer">Study Abroad</li>
            <li className="part-footer">Pojok Beasiswa</li>
            <li className="part-footer">Komunitas</li>
            <li className="part-footer">Artikel</li>
          </ul>
        </div>
        <div className="footer3">
          <ul>
            <li className="title-footer">LAINNYA</li>
            <li className="part-footer">Help center</li>
            <li className="part-footer">Syarat & Ketentuan</li>
            <li className="part-footer">Kebijakan Privasi</li>
          </ul>
        </div>
        <div className="footer4">
          <h2 className="title-footer">Kontak</h2>
          <div className="flex-footer4">
            <img src={Call}></img>
            <h5 className="text-footer4">0271-192837</h5>
          </div>
          <div className="flex-footer4">
            <img src={Mail}></img>
            <h5 className="text-footer4">scholarwithus@email.com</h5>
          </div>
        </div>
      </div>

      <div className="last-footer">
        <hr />
        <h3 className="akhir-footer">
          Copyright © 2023 ScholarWithUs. All rights reserved.
        </h3>
      </div>
    </div>
  );
};

export default Footer;
