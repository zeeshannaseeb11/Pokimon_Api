import React, { useState, useEffect, useContext } from "react";
import DisplayList from "../Components/DisplayList";
import GoBackBtn from "../Components/GoBackBtn";
import Header from "../Components/Header";
import { FavoritesContext } from "../Context/fav-context";

import "./Favourite.css";
function Favourite() {
  const favCtx = useContext(FavoritesContext);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const existingFavourites =
      JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(existingFavourites);
  }, [favCtx.ids]);

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
