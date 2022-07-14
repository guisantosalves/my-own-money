import React from "react";
import "./css/RowExpend.css";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ChairIcon from "@mui/icons-material/Chair";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import Close from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

//firebase
import { db } from "../firebase";
import { updateDoc, doc } from "firebase/firestore";

function Row({ id, expend, expendType, timestamp, deleted }) {

  const navigate = useNavigate();

  async function gettingID(e){
    e.preventDefault();

    try{
      
      //update doc -> first parameter doc and second the object that will go overwrite
      await updateDoc(doc(db, "gasto", id), {
        expend: expend,
        expendType: expendType,
        date: timestamp,
        deleted: true,
      })

      navigate('/')
    }catch(err){
      alert(err)
    }
    
  }

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
        return <p>Something went wrong</p>;
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
        <IconButton onClick={(e)=>gettingID(e)}>
          <Close fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}

export default Row;
