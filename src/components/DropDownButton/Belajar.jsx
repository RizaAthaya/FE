import React from "react";
import "../../css/Belajar.css";
import { useState } from "react";

const Belajar = (props) => {
  const [Display, setDisplay] = useState(false);
  return (
    <div className="full-pagenya">
      <div className="apakek">
        <div className="kasihtunjuk">
        <button onClick={(()=>{
            setDisplay(!Display);
        })}></button>
          <h3>Hai bodo</h3>
        </div>
        <div className={`sembunyi ${Display ? "muncul" : "ilang"}`}>
          <h3>Hai goblokk</h3>
        </div>

        Hai bodoh lagi
      </div>
    </div>
  );
};

Belajar.propTypes = {};

export default Belajar;
