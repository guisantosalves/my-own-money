import React, { useState } from "react";
import "./css/Header.css";

//material UI
import AddIcon from "@mui/icons-material/Add";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ChairIcon from "@mui/icons-material/Chair";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { Checkbox } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AddBoxIcon from '@mui/icons-material/AddBox';
import MenuIcon from '@mui/icons-material/Menu';

//router and modal
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Modal from "react-modal";

//using firebase
import { db } from "../firebase";
import { collection,  addDoc} from "firebase/firestore";

//style for the model
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
  },
};

function Header() {
  const Location = useLocation();

  const CurrentPath = Location.pathname;

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [date, setDate] = useState("");

  const [value, setValue] = useState("");

  const [Checkboxvalue, setCheckboxvalue] = useState("");

  const [hideMenu, setHideMenu] = useState(false);

  const widthOfScreen = window.innerWidth;

  function hideMenuCenter(){
    setHideMenu(!hideMenu);
  }

  //modal
  function openModal() {
    setIsOpen(true);
  }

  //modal
  function closeModal() {
    setIsOpen(false);

    //cleaning the values in the model
    setDate("")
    setValue("")
    setCheckboxvalue("")
  }

  //insert on firebase
  async function insertOnFirebase(e){

    e.preventDefault();

    //replacing the comma to a dot 
    const verifyValue = value.replace(/\,/g,'.')

    try{

        await addDoc(collection(db, "gasto"), {
          expend: parseFloat(verifyValue),
          expendType: Checkboxvalue,
          date: new Date(date),
          deleted: false
        })

    }catch(err){

      alert(err)

    }

    closeModal();
    
    //reloading the page
    window.location.reload(false)
  }

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

      <div className={`header__center ${hideMenu ? `hideMenu` : ``}`}>
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
          <button
            className={`header__centerBtn ${
              CurrentPath === "/food" ? `buttonActiveByPath` : ``
            }`}
          >
            <div className="header__centerButtons">
              <FastfoodIcon fontSize="large" />
            </div>
          </button>
        </Link>

        <Link to="/pleasure">
          <button
            className={`header__centerBtn ${
              CurrentPath === "/pleasure" ? `buttonActiveByPath` : ``
            }`}
          >
            <div className="header__centerButtons">
              <ChairIcon fontSize="large" />
            </div>
          </button>
        </Link>

        <Link to="/investment">
          <button
            className={`header__centerBtn ${
              CurrentPath === "/investment" ? `buttonActiveByPath` : ``
            }`}
          >
            <div className="header__centerButtons">
              <RocketLaunchIcon fontSize="large" />
            </div>
          </button>
        </Link>

        <Link to="/transport">
          <button
            className={`header__centerBtn ${
              CurrentPath === "/transport" ? `buttonActiveByPath` : ``
            }`}
          >
            <div className="header__centerButtons">
              <DirectionsBusIcon fontSize="large" />
            </div>
          </button>
        </Link>

        <Link to="/other">
          <button
            className={`header__centerBtn ${
              CurrentPath === "/other" ? `buttonActiveByPath` : ``
            }`}
          >
            <div className="header__centerButtons">
              <AutoAwesomeMotionIcon fontSize="large" />
            </div>
          </button>
        </Link>
      </div>

      <div className="header_right">
        {widthOfScreen <= 500 ? 
        <IconButton>
          <MenuIcon fontSize="large" onClick={hideMenuCenter}/>
        </IconButton> : <></>}
        <IconButton onClick={openModal}>
          <AddIcon fontSize="large" />
        </IconButton>
        <h3>Guilherme santos</h3>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 style={{ color: "#5B9279" }}>Add Spent/Gain</h2>
        <hr />
        <form>
          <div className="container">
            <div className="modal__inputVal">
              <h3>Value: </h3>
              <div className="modal__inputIptChange">

                <input 
                  type="text" 
                  placeholder="Ex: 1900,99" 
                  value={value} 
                  onChange={(e)=>setValue(e.target.value)}
                />

              </div>
            </div>

            <div className="modal__inputType">
              <h3>Type: </h3>

              <div className="modal__Types">
                <div>
                  <div className="type">
                    <Checkbox
                      icon={<BookmarkBorderIcon />}
                      checkedIcon={<BookmarkIcon />}
                      value="food"
                      onChange={(e)=>setCheckboxvalue(e.target.value)}
                    />
                    <h3>Food</h3>
                  </div>

                  <div className="type">
                    <Checkbox
                      icon={<BookmarkBorderIcon />}
                      checkedIcon={<BookmarkIcon />}
                      value="pleasure"
                      onChange={(e)=>setCheckboxvalue(e.target.value)}
                    />
                    <h3>Pleasure</h3>
                  </div>

                  <div className="type">
                    <Checkbox
                      icon={<BookmarkBorderIcon />}
                      checkedIcon={<BookmarkIcon />}
                      value="investment"
                      onChange={(e)=>setCheckboxvalue(e.target.value)}
                    />
                    <h3>Investment</h3>
                  </div>
                </div>

                <div>
                  <div className="type">
                    <Checkbox
                      icon={<BookmarkBorderIcon />}
                      checkedIcon={<BookmarkIcon />}
                      value="transport"
                      onChange={(e)=>setCheckboxvalue(e.target.value)}
                    />
                    <h3>Transport</h3>
                  </div>

                  <div className="type">
                    <Checkbox
                      icon={<BookmarkBorderIcon />}
                      checkedIcon={<BookmarkIcon />}
                      value="other"
                      onChange={(e)=>setCheckboxvalue(e.target.value)}
                    />
                    <h3>Other</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="modal__datePicker">
            <h3>Date: </h3>
            <input type="date" onChange={e=>setDate(e.target.value)}/>
        </div>

        <div className="modal__buttons">
          <button onClick={closeModal} className="modal__closeBtn">
            <CloseIcon fontSize="medium" />
          </button>

          <button onClick={e=>insertOnFirebase(e)} className="modal__saveBtn">
            <CheckIcon fontSize="medium" />
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Header;
