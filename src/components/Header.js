import React from "react";
import "./css/Header.css";
import AddIcon from '@mui/icons-material/Add';
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ChairIcon from "@mui/icons-material/Chair";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135706.png" alt="money"/>

        <div className="header__leftInformation">
          <h3>My Own Money</h3>
          <p>for you control your money</p>
        </div>
      </div>

      <div className="header__center">
        <Link to="/">
          <div className="header__centerButtons">
            <AttachMoneyIcon fontSize="large" />
          </div>
        </Link>

        <Link to="/food">
          <div className="header__centerButtons">
            <FastfoodIcon fontSize="large" />
          </div>
        </Link>

        <Link to="/pleasure">
          <div className="header__centerButtons">
            <ChairIcon fontSize="large" />
          </div>
        </Link>

        <Link to="/investment">
          <div className="header__centerButtons">
            <RocketLaunchIcon fontSize="large" />
          </div>
        </Link>

        <Link to="/transport">
          <div className="header__centerButtons">
            <DirectionsBusIcon fontSize="large" />
          </div>
        </Link>

        <Link to="/other">
          <div className="header__centerButtons">
            <AutoAwesomeMotionIcon fontSize="large" />
          </div>
        </Link>
      </div>


        <div className="header_right">
          <IconButton>
            <AddIcon fontSize="large"/>
          </IconButton>
          <h3>Guilherme santos</h3>
        </div>

    </div>
  );
}

export default Header;
