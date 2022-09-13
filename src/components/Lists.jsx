import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import "./Lists.css";
import CardHolder from "./CardHolder";

const Lists = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [data, setData] = useState([]);

  //DEFAULT STATE SET
  useEffect(() => {
    function getData() {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
          setFetchedData([...data]);
          setData([...data]);
        })
        .catch((err) => console.error(err));
    }

    getData();
  }, []);

  //SEARCH FUNCTIONALITY IF PARAMETER SIZE GREATER THEN 3
  function searchedData(text) {
    if (text.length >= 3) {
      let newData = fetchedData.filter((data) => data.title.includes(text));
      setData(newData);
    } else {
      setData(fetchedData);
    }
  }

  return (
    <>
      <SearchBar searchedData={searchedData} />
      <CardHolder data={data} />
    </>
  );
};

export default Lists;
