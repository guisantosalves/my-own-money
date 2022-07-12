import React, { useEffect, useState } from "react";
import "./css/Food.css";
import Row from "../components/RowExpend";
import Add from "@mui/icons-material/Add";

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
} from "firebase/firestore";
import { db } from "../firebase";

//getting datalayer
import { useStateValue } from "../StateProvider";

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

function Food() {
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

    onSnapshot(qry, (result) => {
      setData(
        result.docs.map((item, index) => ({
          id: item.id,
          data: item.data(),
        }))
      );

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

    const qryNotes = query(collection(db, "notes"))

    onSnapshot(qryNotes, (result)=>{
      result.docs.map((item, index)=>{
        console.log(item.data())
      })
    })

  }, []);

  return (
    <div className="food">
      <div className="food__left">
        <div className="food__graphs">
          <div className="food__leftGraphOne">
            <Bar options={options} data={dataChart} />
          </div>
          <div className="food__notes">
            <div className="food__note">
              <h1>To do</h1>
              <p>Economizar em comida, pois eu preciso emagrecer também</p>
            </div>
            <div className="food__noteAdd">
              <Add fontSize="large"/>
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
    </div>
  );
}

export default Food;
