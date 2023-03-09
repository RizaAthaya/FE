import React from "react";

const TagArtikel2 = (props) => {
  const [On, setOn] = useState(true);
  const [On2, setOn2] = useState(false);
  const [On3, setOn3] = useState(false);
  const [On4, setOn4] = useState(false);
  const [On5, setOn5] = useState(false);
  const [On6, setOn6] = useState(false);
  const [On7, setOn7] = useState(false);
  return (
    <>
      <div
        className={`tag-artikel ${On ? "active" : "inactive"}`}
        onClick={() => {
          setOn(!On);
        }}
      >
        <h3 className="text-tagArtikel">Semua</h3>
      </div>
      <div
        className={`tag-artikel ${On2 ? "active" : "inactive"}`}
        onClick={() => {
          setOn2(!On2);
        }}
      >
        <h3 className="text-tagArtikel">Tips dan Trik</h3>
      </div>
      <div
        className={`tag-artikel ${On3 ? "active" : "inactive"}`}
        onClick={() => {
          setOn3(!On3);
        }}
      >
        <h3 className="text-tagArtikel">Inspirasi</h3>
      </div>
      <div
        className={`tag-artikel ${On4 ? "active" : "inactive"}`}
        onClick={() => {
          setOn4(!On4);
        }}
      >
        <h3 className="text-tagArtikel">Pendidikan</h3>
      </div>
      <div
        className={`tag-artikel ${On5 ? "active" : "inactive"}`}
        onClick={() => {
          setOn5(!On5);
        }}
      >
        <h3 className="text-tagArtikel">Kehidupan</h3>
      </div>
      <div
        className={`tag-artikel ${On6 ? "active" : "inactive"}`}
        onClick={() => {
          setOn6(!On6);
        }}
      >
        <h3 className="text-tagArtikel">Wisata</h3>
      </div>
      <div
        className={`tag-artikel ${On7 ? "active" : "inactive"}`}
        onClick={() => {
          setOn7(!On7);
        }}
      >
        <h3 className="text-tagArtikel">Bahasa dan Budaya</h3>
      </div>
    </>
  );
};

export default TagArtikel2;
