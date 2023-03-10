import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { captitalizeFirstLetter } from "../helper/capitalizeFirstLetter";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";

import "./DisplayList.css";

function DisplayList(props) {
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(false);

  const favHandler = (e, data) => {
    // check if there are some favourites
    const existingFavourites =
      JSON.parse(localStorage.getItem("favourites")) || [];

    // Add pokemons to array
    existingFavourites.push(data);

    // Save the updated favourites back to local storage
    localStorage.setItem("favourites", JSON.stringify(existingFavourites));

    setFavorite(true);
  };

  return (
    <li className="li-card">
      <div className="profile">
        <div className="profile-desc">
          <div className="profile-img">
            <img src={props.data?.sprites?.front_default} />
          </div>
          <div>
            <h2>{captitalizeFirstLetter(props.data?.name)}</h2>
            <p>{props.data.order}</p>
          </div>
        </div>
        <button
          className="favorite-btn"
          onClick={(e) => favHandler(e, props.data)}
        >
          {!favorite && <AiOutlineStar style={{ fontSize: "23px" }} />}
          {favorite && <AiFillStar style={{ fontSize: "23px" }} />}
        </button>
      </div>
      <div className="card-desc">
        <div>
          <h3>Weight : </h3>
          <p>{props.data.weight / 10} kg</p>
        </div>
        <div>
          <h3>Height :</h3>
          <p> {props.data.height / 10} m</p>
        </div>
        <div>
          <h3>Experience :</h3>
          <p> {props.data.base_experience}</p>
        </div>

        <button
          className="details-btn"
          onClick={() => {
            navigate("/details", {
              state: props.data,
            });
          }}
        >
          <FiArrowRight style={{ fontSize: "30px" }} />
        </button>
      </div>
    </li>
  );
}

export default DisplayList;
