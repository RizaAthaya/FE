import React, { useState } from "react";
import { items } from "../utils/Datas3";

const PaginationPB = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalItems = 16;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = items.slice(startIndex, endIndex);

  return (
    <div className="cardPB-whole">
      <ul className="cardPB-list">
        {itemsToShow.map((item) => (
          <li>
            <div className="card-pb">
              <div className="tagpb-part">
                <h5 className="pb-tag1">{item.tag1}</h5>
                <h5 className="pb-tag2">{item.tag2}</h5>
                <h5 className="pb-tag3">{item.tag3}</h5>
              </div>
              <div className="textpb-part">
                <div className="pb-text1">{item.pemberi}</div>
                <div className="pb-text2">{item.title}</div>
              </div>
              <div className="datepb-part">
                <div className="open-part">
                  <h5 className="open-left">Open Registration</h5>
                  <h5 className="open-right">{item.open}</h5>
                </div>
                <div className="close-part">
                  <h5 className="close-left">Close Registration</h5>
                  <h5 className="close-right">{item.close}</h5>
                </div>
              </div>
            </div>
            <div className="card-pb">
              <div className="tagpb-part">
                <h5 className="pb-tag1">{item.tag1}</h5>
                <h5 className="pb-tag2">{item.tag2}</h5>
                <h5 className="pb-tag3">{item.tag3}</h5>
              </div>
              <div className="textpb-part">
                <div className="pb-text1">{item.pemberi}</div>
                <div className="pb-text2">{item.title}</div>
              </div>
              <div className="datepb-part">
                <div className="open-part">
                  <h5 className="open-left">Open Registration</h5>{" "}
                  <h5 className="open-right">{item.open}</h5>
                </div>
                <div className="close-part">
                  <h5 className="close-left">Close Registration</h5>{" "}
                  <h5 className="close-right">{item.close}</h5>
                </div>
              </div>
            </div>
            <div className="card-pb">
              <div className="tagpb-part">
                <h5 className="pb-tag1">{item.tag1}</h5>
                <h5 className="pb-tag2">{item.tag2}</h5>
                <h5 className="pb-tag3">{item.tag3}</h5>
              </div>
              <div className="textpb-part">
                <div className="pb-text1">{item.pemberi}</div>
                <div className="pb-text2">{item.title}</div>
              </div>
              <div className="datepb-part">
                <div className="open-part">
                  <h5 className="open-left">Open Registration</h5>{" "}
                  <h5 className="open-right">{item.open}</h5>
                </div>
                <div className="close-part">
                  <h5 className="close-left">Close Registration</h5>{" "}
                  <h5 className="close-right">{item.close}</h5>
                </div>
              </div>
            </div>
          </li>
          
          
        ))}
      </ul>
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PaginationPB;
