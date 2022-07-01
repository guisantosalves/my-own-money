import React, { useState } from "react";
import "./css/RowExpend.css"
import FastfoodIcon from "@mui/icons-material/Fastfood";

function Row({expend, expendType}){
    
    return(
        <div className="row">
            
            <div className="row__left">
                <h2>Value: {expend}</h2>
                <p>Type of expense: {expendType}</p>
            </div>

            <div className="row__right">
                <FastfoodIcon fontSize="large"/>
            </div>

        </div>
    )
}

export default Row;