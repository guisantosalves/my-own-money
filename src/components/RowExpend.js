import React, { useState } from "react";
import "./css/RowExpend.css";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ChairIcon from "@mui/icons-material/Chair";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";

function Row({ expend, expendType, timestamp }) {
  function IconType() {
    switch (expendType) {
      case "food":
        return <FastfoodIcon fontSize="large" />;
        break;

      case "pleasure":
        return <ChairIcon fontSize="large" />;
        break;

      case "investment":
        return <RocketLaunchIcon fontSize="large" />;
        break;

      case "transport":
        return <DirectionsBusIcon fontSize="large" />;
        break;

      case "other":
        return <AutoAwesomeMotionIcon fontSize="large" />;
        break;
    }
  }

  return (
    <div className="row">
      <div className="row__left">
        <h2>Value: {expend}</h2>
        <p>Type of expense: {expendType}</p>
      </div>

      <div className="row__right">{IconType()}</div>
    </div>
  );
}

export default Row;
