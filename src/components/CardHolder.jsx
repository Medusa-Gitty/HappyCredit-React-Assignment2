import React, { useState } from "react";
import Card from "./Card";
import Pagination from "rc-pagination";

const CardHolder = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(8);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);

  const nPages = Math.ceil(data.length / recordsPerPage);

  const [current, setCurrent] = useState(1);
  const onChange = (page) => {
    setCurrent(page);
  };

  return (
    <>
      <div className="cards">
        {data.map((data) => {
          return (
            <Card
              key={data.id}
              title={data.title}
              body={data.body}
              userId={data.userId}
            />
          );
        })}
      </div>
    </>
  );
};

export default CardHolder;
