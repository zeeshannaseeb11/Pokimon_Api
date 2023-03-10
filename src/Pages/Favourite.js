import React, { useState, useEffect } from "react";
import DisplayList from "../Components/DisplayList";
import GoBackBtn from "../Components/GoBackBtn";
import Header from "../Components/Header";

import "./Favourite.css";
function Favourite() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    // Retrieve favourites from local storage
    const existingFavourites =
      JSON.parse(localStorage.getItem("favourites")) || [];

    // Set favourites in component state
    setFavourites(existingFavourites);
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <GoBackBtn />

        <ul className="favorite">
          {favourites.map((favourite, index) => (
            <DisplayList key={index} data={favourite} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Favourite;
