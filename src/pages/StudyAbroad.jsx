import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../css/StudyAbroad.css";
import axios from "axios";

// components
// import Manggil from "../Pagination/Manggil"
import Navbar from "../components/general/Navbar";
import CarouselStudyAbroad from "../components/Carousel/CarouselStudyAbroad";
import Footer from "../components/general/Footer";
import ManggilCardSA from "../components/Pagination/ManggilCardSA";
import Search from "../components/general/Search";
import DropDown from "../components/DropDownButton/DDBFilter";
import DropDown2 from "../components/DropDownButton/DDBFilter2";
import DropDown3 from "../components/DropDownButton/DDBFilter3";

//assets
import Cari from "../assets/Search.svg";
import Down from "../assets/Down.svg";

const StudyAbroad = (props) => {
  const [negara, setNegara] = useState(0);
  const [pendanaan, setPendanaan] = useState(0);
  const [jenjang, setJenjang] = useState(0);

  const [namaNegara, setNamaNegara] = useState("Negara");
  const [namaPendanaan, setNamaPendanaan] = useState("Tipe Pendanaan");
  const [namaJenjang, setNamaJenjang] = useState("Jenjang");

  function DropdownItem(props) {
    return (
      <li className="dropdownItemDash">
        <button
          onClick={props.onClick}
          className="btn-ilang"
          name="tag_countries_id"
        >
          <a value={props.id}> {props.text} </a>
        </button>
      </li>
    );
  }
  function DropdownItem2(props) {
    return (
      <li className="dropdownItemDash">
        <button
          onClick={props.onClick}
          className="btn-ilang"
          name="tag_cost_id"
        >
          <a value={props.id}> {props.text} </a>
        </button>
      </li>
    );
  }
  function DropdownItem3(props) {
    return (
      <li className="dropdownItemDash">
        <button
          onClick={props.onClick}
          className="btn-ilang"
          name="tag_level_id"
        >
          <a value={props.id}> {props.text} </a>
        </button>
      </li>
    );
  }

  // filter 1
  const [open, setOpen] = useState(false);
  const [tagCountries, setTagCountries] = useState([]);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        // console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://reyhafiz.aenzt.tech/api/tagCountries"
      );
      setTagCountries(response.data.data);
      console.log(response.data);
    }
    fetchData();
  }, []);

  //filter 2
  const [open2, setOpen2] = useState(false);
  const [tagCost, setTagCost] = useState([]);

  let menuRef2 = useRef();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://reyhafiz.aenzt.tech/api/tagCosts"
      );
      setTagCost(response.data.data);
      console.log(response.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    let handler2 = (e) => {
      if (!menuRef2.current.contains(e.target)) {
        setOpen2(false);
        // console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler2);

    return () => {
      document.removeEventListener("mousedown", handler2);
    };
  });

  const localStore = localStorage.getItem("token");
  const token = localStore;

  // filter 3

  const [open3, setOpen3] = useState(false);
  const [tagLevel, setTagLevel] = useState([]);

  let menuRef3 = useRef();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://reyhafiz.aenzt.tech/api/tagLevels"
      );
      setTagLevel(response.data.data);
      console.log(response.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    let handler3 = (e) => {
      if (!menuRef3.current.contains(e.target)) {
        setOpen3(false);
      }
    };

    document.addEventListener("mousedown", handler3);

    return () => {
      document.removeEventListener("mousedown", handler3);
    };
  });

  const [search, setSearch] = useState("");
  // const [scholarshipsData, setScholarshipsData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [linknya, setLink] = useState(
    `https://reyhafiz.aenzt.tech/api/programs`
  );

  // const [searchProgram, setSearchProgram] = useState([]);
  // const [program, setProgram] = useState([]);

  // useEffect(() => {
  //   handleSearch("");
  // }, []);

  // const handleSearch = (title) => {
  //   const response = axios.get(
  //     `http://127.0.0.1:8000/api/programs/search?name=${title}`
  //   );

  //   setProgram(response.data);
  //   console.log(response.data);
  // };

  const handleSearch = async () => {
    setSearchParams({
      name: search,
      tag_level_id: jenjang,
      tag_country_id: negara,
      tag_cost_id: pendanaan,
    });
  };

  useEffect(() => {
    handleSearch();
    setLink(`https://reyhafiz.aenzt.tech/api/programs/search?name=${search}`);
  }, [search]);

  useEffect(() => {
    handleSearch();
    setLink(
      `https://reyhafiz.aenzt.tech/api/programs/filter?tag_level_id=${jenjang}&tag_country_id=${negara}&tag_cost_id=${pendanaan}`
    );
  }, [jenjang, negara, pendanaan]);


  const handleReset = () => {
    setJenjang(0);
    setNamaJenjang("Jenjang");
    setNegara(0)
    setNamaNegara("Negara")
    setPendanaan(0)
    setNamaPendanaan("Tipe pendanaan")
    setSearch('')
    setLink(`https://reyhafiz.aenzt.tech/api/programs`)
  }

  return (
    <div className="whole-sa">
      <Navbar />
      <div className="atasan-sa">
        <div className="bread-crumb">
          <h3>
            <Link to="/">Home</Link> - Mentoring
          </h3>
        </div>
        <div className="header-sa">
          <div className="title-sa">Mentoring</div>
          <div className="desc-sa">
            Dapatkan bimbingan dari mentor berpengalaman untuk membantumu meraih
            beasiswa impianmu.
          </div>
        </div>
      </div>
      <div className="body-sa">
        <h3 className="title1-bodySA">Program Terbaru</h3>
        <CarouselStudyAbroad />
        <h3 className="title2-bodySA">Program Tersedia</h3>
        <div className="nav-tengah">
          <div className="nav-sa2">
            <div className="search-filter">
              <form onSubmit={handleSearch}>
                {/** Search */}
                <div className="search-box">
                  <div className="search-part">
                    <img className="img-search" src={Cari}></img>
                    <input
                      onChange={(e) => setSearch(e.target.value)}
                      className="cari-box"
                      type="search"
                      placeholder="Cari layanan mentoring"
                    ></input>
                  </div>
                  <button className="btn-search">Cari</button>
                </div>
              </form>
            </div>
            <div className="nav-filter">
              {/** Filter 1 */}
              <div className="ddb1-filter">
                <div className="ddb-filter">
                  <div className="menu-container" ref={menuRef}>
                    <div
                      className="menu-trigger"
                      onClick={() => {
                        setOpen(!open);
                      }}
                    >
                      <h1 className="nama-ddb1">{namaNegara}</h1>
                      <img src={Down} className="img-ddb2"></img>
                    </div>

                    <div
                      className={`dropdown-menu ${
                        open ? "active" : "inactive"
                      }`}
                    >
                      <ul>
                        {tagCountries.map((item) => (
                          <DropdownItem
                            text={item.name}
                            id={item.id}
                            onClick={() => (
                              setNegara(item.id), setNamaNegara(item.name)
                            )}
                          />
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/** Filter 2 */}

              <div className="ddb-filter">
                <div className="menu-container" ref={menuRef2}>
                  <div
                    className="menu-trigger"
                    onClick={() => {
                      setOpen2(!open2);
                    }}
                  >
                    <h1 className="nama-ddb1">{namaPendanaan}</h1>
                    <img src={Down} className="img-ddb2"></img>
                  </div>

                  <div
                    className={`dropdown-menu ${open2 ? "active" : "inactive"}`}
                  >
                    <ul>
                      {tagCost.map((item) => (
                        <DropdownItem2
                          text={item.name}
                          id={item.id}
                          onClick={() => (
                            setPendanaan(item.id), setNamaPendanaan(item.name)
                          )}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {/** Filter 3 */}
              <div className="ddb-filter2">
                <div className="menu-container" ref={menuRef3}>
                  <div
                    className="menu-trigger"
                    onClick={() => {
                      setOpen3(!open3);
                    }}
                  >
                    <h1 className="nama-ddb1">{namaJenjang}</h1>
                    <img src={Down} className="img-ddb2"></img>
                  </div>

                  <div
                    className={`dropdown-menu ${open3 ? "active" : "inactive"}`}
                  >
                    <ul>
                      {tagLevel.map((item) => (
                        <DropdownItem3
                          text={item.name}
                          id={item.id}
                          onClick={() => (
                            setJenjang(item.id), setNamaJenjang(item.name)
                          )}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {/**END */}
              <div onClick={handleReset} className="reset-filter">
                <h3 className="reset-filter">RESET</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="semua-pagination">
          <ManggilCardSA data={linknya} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StudyAbroad;
