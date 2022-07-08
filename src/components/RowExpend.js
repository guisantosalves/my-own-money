import React from "react";
import "./css/RowExpend.css";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ChairIcon from "@mui/icons-material/Chair";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import Close from "@mui/icons-material/Close";

function Row({ expend, expendType, timestamp }) {

  function IconType() {
    switch (expendType) {
      case "food":
        return <FastfoodIcon fontSize="large" />;

      case "pleasure":
        return <ChairIcon fontSize="large" />;

      case "investment":
        return <RocketLaunchIcon fontSize="large" />;

      case "transport":
        return <DirectionsBusIcon fontSize="large" />;

      case "other":
        return <AutoAwesomeMotionIcon fontSize="large" />;

      default: 
        return(
            <p>Something went wrong</p>
        )
    }
  }

  return (
    <div className="row">
      <div className="row__left">
        <h2>Value: {expend}</h2>
        <p>Type of expense: {expendType}</p>
      </div>

      <div className="row__right">
        {IconType()}
        <Close fontSize="small"/>
      </div>
    </div>
  );
}

export default Row;
