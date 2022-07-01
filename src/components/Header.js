import React from "react";
import "./css/Header.css"
import PaidIcon from '@mui/icons-material/Paid';
import { Avatar } from "@mui/material";

function Header(){
    return(
        <div className="header">
            <div className="header__left">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135706.png"/>
                
                <div className="header__leftInformation">
                    <h3>My Own Money</h3>
                    <p>for you control your money</p>
                </div>
            </div>

            <div className="header__center">
                <div>ganhos</div>
                <div>alimentação</div>
                <div>lazer</div>
                <div>investimento</div>
                <div>transporte</div>
                <div>outros</div>
            </div>

            <div className="header_right">
                <div>Guilherme santos</div>
                <Avatar src="https://i.pinimg.com/564x/bd/ac/a5/bdaca5afbf28608dd2305bece054c424.jpg"/>
            </div>
            
        </div>
    )
}

export default Header;