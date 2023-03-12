import React, { useState } from "react";
import "../../css/TagArtikel.css";
import "../../css/ButtonGroup.css";;

// useEffect(() => {
//   async function fetchData(props) {
//     const response = await axios.get(
//       "http://103.189.235.157:10015/api/scholarships/new"
//     );
//     setNewPB(response.data.data);
//     console.log(response.data);
//   }
//   fetchData();
// }, []);

const ButtonGroup = (props) => {
  const allData = [
    { id: 1, name: "Semua" },
    { id: 2, name: "Tips dan Trick" },
    { id: 3, name: "Inspirasi" },
    { id: 4, name: "Pendidikan" },
    { id: 5, name: "Kehidupan" },
    { id: 6, name: "Bahasa dan Budaya" },
  ];
  const [Aktif, setAktif] = useState({
    activeObject: allData[0],
    objects: allData,
  });
  function toggleActive(index) {
    setAktif({ ...Aktif, activeObject: Aktif.objects[index] });
  }
  function toggleActiveStyle(index) {
    if (Aktif.objects[index] === Aktif.activeObject) {
      return "tag-artikel active";
    } else {
      return "tag-artikel inactive";
    }
  }
  return (
    <div className="button-group">
      {Aktif.objects.map((elements, index) => (
        <div
          key={index}
          className={toggleActiveStyle(index)}
          onClick={() => {
            toggleActive(index);
          }}
        >
          <h3 className="text-tagArtikel">{elements.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default ButtonGroup;
