import React, { useEffect, useState } from "react";
import "./css/Food.css";
import Row from "../components/RowExpend";
import Add from "@mui/icons-material/Add";
import Close from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

//chart-react-2
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

//firebase
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
  doc,
  updateDoc,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "../firebase";

//getting datalayer
import { useStateValue } from "../StateProvider";

//for the sum about graph
let somJan = 0;
let somaFev = 0;
let somaMar = 0;
let somaApril = 0;
let somaMay = 0;
let somaJune = 0;
let somaJuly = 0;
let somaAugust = 0;
let somaSeptem = 0;
let somaOct = 0;
let somaNovem = 0;
let somaDecem = 0;

//registering the graph
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

//for the graph
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Expend with food",
    },
  },
};

//for modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 10
};

function Food() {
  //data to the modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  //data to the app
  const [data, setData] = useState([]);
  const [notes, setNotes] = useState([])

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dataChart = {
    labels,
    datasets: [
      {
        label: "Food",
        data: [somJan, somaFev, somaMar, somaApril, somaMay, somaJune, somaJuly, somaAugust, somaSeptem, somaOct, somaNovem, somaDecem],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  useEffect(() => {
    const qry = query(
      collection(db, "gasto"),
      where("expendType", "==", "food"),
      orderBy("deleted", "asc")
    );
    //to the rows
    onSnapshot(qry, (result) => {
      setData(
        result.docs.map((item, index) => ({
          id: item.id,
          data: item.data(),
        }))
      );
    })

    //to the graphs
    if(somaJuly === 0){
      onSnapshot(qry, (result) => {
        result.docs.map((item, index) => {
          if (item.data().date.toDate().getMonth() + 1 === 1) {
              somJan = somJan + item.data().expend;
          }else if(item.data().date.toDate().getMonth() + 1 === 2){
              somaFev = somaFev + item.data().expend;
          }else if(item.data().date.toDate().getMonth() + 1 === 3){
              somaMar = somaMar + item.data().expend;
          }else if(item.data().date.toDate().getMonth() + 1 === 4){
              somaApril = somaApril + item.data().expend;
          }else if(item.data().date.toDate().getMonth() + 1 === 5){
              somaMay = somaMay + item.data().expend;
          }else if(item.data().date.toDate().getMonth() + 1 === 6){
              somaJune = somaJune + item.data().expend;
          }else if(item.data().date.toDate().getMonth() + 1 === 7){
              somaJuly = somaJuly + item.data().expend;
          }else if(item.data().date.toDate().getMonth() + 1 === 8){
              somaAugust = somaAugust + item.data().expend;
          }else if(item.data().date.toDate().getMonth() + 1 === 9){
              somaSeptem = somaSeptem + item.data().expend;
          }else if(item.data().date.toDate().getMonth() + 1 === 10){
              somaOct = somaOct + item.data().expend;
          }else if(item.data().date.toDate().getMonth() + 1 === 11){
              somaNovem = somaNovem + item.data().expend;
          }else if(item.data().date.toDate().getMonth() + 1 === 12){
              somaDecem = somaDecem + item.data().expend;
          }else{
              alert("somthing went wrong")
          }
        });
      });
    }else{
      return
    }

    //to the notes
    const qryNotes = query(collection(db, "notes"), where("deleted", "!=", true))
    onSnapshot(qryNotes, (result)=>{

      setNotes(
        result.docs.map((item, index)=>({
          id: item.id,
          data: item.data()
        }))
      )
    })

  }, []);

  //function to delete the notes
  async function deletingNote(item){
    try{
      
      await updateDoc(doc(db, 'notes', item.id), {
        title: item.data.title,
        note: item.data.note,
        timestamp: item.data.timestamp,
        deleted: true
      })

    }catch(e){
      alert(e)
    }
  }

  async function submitNotes(){
    try{

      await addDoc(collection(db, "notes"), {
        title: title,
        note: note,
        timestamp: Timestamp.now(),
        deleted: false
      })

      setTitle("")
      setNote("")

      handleClose()
    }catch(e){
      alert(e)
    }
  }
  return (
    <div className="food">
      <div className="food__left">
        <div className="food__graphs">
          <div className="food__leftGraphOne">
            <Bar options={options} data={dataChart} />
          </div>
          <div className="food__notes">
            {notes.map((item, index)=>(
              <div className="food__note">

                <div className="food__noteClose">
                  <IconButton onClick={(e)=>deletingNote(item)}>
                    <Close fontSize="small"/>
                  </IconButton>
                </div>
                <h1>{item.data.title}</h1>
                <div className="food__noteText">
                  <p>{item.data.note}</p>
                </div>

              </div>
            ))}
            <div className="food__noteAdd">
              <IconButton onClick={handleOpen}>
                <Add fontSize="large"/>
              </IconButton>
            </div>
          </div>
        </div>
      </div>

      <div className="food__right">
        <div className="food__rightListOfThings">
          {data.map((item, index) => (
            <Row
              key={item.id}
              id={item.id}
              expend={item.data.expend}
              expendType={item.data.expendType}
              timestamp={item.data.date}
              deleted={item.data.deleted}
            />
          ))}
        </div>
      </div>

      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Set your goals
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="modal__form">
              <h2>Title: </h2>
              <div className="modal__title">
                <input 
                  type="text" 
                  value={title} 
                  onChange={(e)=>setTitle(e.target.value)} 
                  placeholder="Ex: to do"
                />
              </div>

              <h2>Note: </h2>
              <div className="modal__note">
                <input 
                  type="text" 
                  value={note} 
                  onChange={(e)=>setNote(e.target.value)} 
                  placeholder="Ex: I need to buy more food"
                />
              </div>
            </div>
            <div className="modal__buttons">
              <button className="modal__btnOne" onClick={handleClose}>Close</button>
              <button className="modal__btnTwo" onClick={submitNotes}>Save</button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Food;
