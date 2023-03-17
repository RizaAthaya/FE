import React from "react";
import "../css/Modul.css";

//components
import SidebarModul from "../components/general/SidebarModul";
// import Navbar from "../components/general/Navbar2";
import NavbarDash from "../components/general/NavbarDash";

//assets
import VideoCover from "../assets/VideoCover.svg";

const Modul = (props) => {
  return (
    <div className="modul-kelas">
      <NavbarDash />
      <div className="modul-isi">
        <div className="left-modul">
          <img className="foto-materi" src={VideoCover}></img>
          <h3 className="title-materi">All About IISMA</h3>
          <h3 className="text-descMateri">
            Lorem ipsum dolor sit amet consectetur. Habitant ornare tellus nulla
            nec non ultrices. Accumsan maecenas feugiat volutpat nam. Eu
            molestie eget eget phasellus. Urna urna cras tempus suspendisse
            quisque consectetur amet. Dui at in dolor ultricies ultrices. Orci
            quis sagittis sem in. Tellus vel amet neque cursus aliquam fermentum
            quam ultricies. Tellus elementum ut mi massa. Sollicitudin vitae
            senectus tristique nulla duis a eu eu consectetur. Lobortis quam sit
            nam parturient scelerisque enim gravida. Accumsan mi ut massa id ac
            adipiscing scelerisque sagittis. Ac viverra enim ac convallis diam.
            Massa aliquam hendrerit augue leo. Hendrerit sed morbi a vel nibh
            nec potenti leo. Tincidunt et sed et consequat dignissim praesent
            dictum iaculis. Condimentum feugiat mattis pretium quam fermentum
            pellentesque. Egestas enim auctor risus mauris at imperdiet etiam
            maecenas orci. Lobortis tristique vestibulum fringilla in. Luctus in
            molestie eget at quisque elit. Pellentesque orci eu et fringilla
            facilisis justo diam tincidunt tempor. Bibendum nunc quam congue
            tincidunt. Enim cras nunc mi aliquam at. Auctor senectus quam semper
            lobortis imperdiet. Tristique pharetra blandit maecenas metus
            lobortis ipsum massa a. Mattis magna arcu turpis dis rhoncus quam.
            Viverra purus ut vehicula ornare aliquam. Consequat elit id ac
            egestas sem cursus. Dignissim tristique arcu sit ut pellentesque dui
            nunc eu ipsum. Lacus cursus imperdiet tortor quisque vitae enim
            nullam egestas. Eu congue sem eleifend in id ullamcorper elit. Arcu
            et eu id at sed eu in. Pulvinar libero urna egestas quis turpis
            curabitur aliquet. Congue gravida sollicitudin tempus auctor risus.
            Et nec tellus sed platea
          </h3>
        </div>

        <SidebarModul />
      </div>
    </div>
  );
};

export default Modul;
