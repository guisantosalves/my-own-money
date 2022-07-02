import React from "react";
import "./css/Header.css";
import AddIcon from "@mui/icons-material/Add";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ChairIcon from "@mui/icons-material/Chair";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header() {
  const Location = useLocation();

  const CurrentPath = Location.pathname;

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135706.png"
          alt="money"
        />

        <div className="header__leftInformation">
          <h3>My Own Money</h3>
          <p>for you control your money</p>
        </div>
      </div>

      <div className="header__center">

        <Link to="/">
          <button
            className={`header__centerBtn ${
              CurrentPath === "/" ? `buttonActiveByPath` : ``
            }`}
          >
            <div className="header__centerButtons">
              <AttachMoneyIcon fontSize="large" />
            </div>
          </button>
        </Link>

        <Link to="/food">
          <button className={`header__centerBtn ${
              CurrentPath === "/food" ? `buttonActiveByPath` : ``
            }`}>
            <div className="header__centerButtons">
              <FastfoodIcon fontSize="large" />
            </div>
          </button>
        </Link>

        <Link to="/pleasure">
          <button className={`header__centerBtn ${
              CurrentPath === "/pleasure" ? `buttonActiveByPath` : ``
            }`}>
            <div className="header__centerButtons">
              <ChairIcon fontSize="large" />
            </div>
          </button>
        </Link>

        <Link to="/investment">
          <button className={`header__centerBtn ${
              CurrentPath === "/investment" ? `buttonActiveByPath` : ``
            }`}>
            <div className="header__centerButtons">
              <RocketLaunchIcon fontSize="large" />
            </div>
          </button>
        </Link>

        <Link to="/transport">
          <button className={`header__centerBtn ${
              CurrentPath === "/transport" ? `buttonActiveByPath` : ``
            }`}>
            <div className="header__centerButtons">
              <DirectionsBusIcon fontSize="large" />
            </div>
          </button>
        </Link>

        <Link to="/other">
          <button className={`header__centerBtn ${
              CurrentPath === "/other" ? `buttonActiveByPath` : ``
            }`}>
            <div className="header__centerButtons">
              <AutoAwesomeMotionIcon fontSize="large" />
            </div>
          </button>
        </Link>

      </div>

      <div className="header_right">
        <IconButton>
          <AddIcon fontSize="large" />
        </IconButton>
        <h3>Guilherme santos</h3>
      </div>
    </div>
  );
}

export default Header;
