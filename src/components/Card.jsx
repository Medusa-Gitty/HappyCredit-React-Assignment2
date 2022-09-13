import React from "react";
import "./Card.css";

const Card = ({ title, body, userId }) => {
  async function searchUser(id) {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    let user = await res.json();

    alert(`User Name : ${user.name}`);
  }

  function searchHandler() {
    searchUser(userId);
  }

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h2>{title}</h2>
          <p>{body}</p>
          <button onClick={searchHandler}>View User</button>
        </div>
      </div>
    </>
  );
};

export default Card;
