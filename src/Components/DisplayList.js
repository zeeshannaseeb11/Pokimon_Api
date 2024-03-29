import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { captitalizeFirstLetter } from "../helper/capitalizeFirstLetter";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";
import "./DisplayList.css";
import { FavoritesContext } from "../Context/fav-context";

function DisplayList(props) {
  const favoriteCtx = useContext(FavoritesContext);
  const navigate = useNavigate();

  const favHandler = (e, data) => {
    favoriteCtx.toggleFavHandler(data);
  };

  const cardIsFav = favoriteCtx.ids.includes(props.data.id);

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
          {!cardIsFav && <AiOutlineStar style={{ fontSize: "23px" }} />}
          {cardIsFav && <AiFillStar style={{ fontSize: "23px" }} />}
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
