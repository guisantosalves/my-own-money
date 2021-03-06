import React, { useEffect, useState } from "react";
import "./css/Home.css";
import Row from "../components/RowExpend";

//chart-react-2
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

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

let somaTransport = 0;
let somaFood = 0;
let somaPleasure = 0;
let somaInvestment = 0;
let somaOther = 0;

//registering the graph
ChartJS.register(ArcElement, Tooltip, Legend);

function Home() {
  const [data, setData] = useState([]);

  const [{ expend }, dispatch] = useStateValue();

  const [verify, setVerify] = useState(0);

  const [hideGraph, setHideGraph] = useState(false)

  const widthOfScreen = window.innerWidth;

  useEffect(() => {
    //collection, where, orderby
    const qry = query(
      collection(db, "gasto"),
      where("deleted", "!=", true),
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

      dispatch({
        type: "SET_EXPENDS",
        expend: data,
      });
    })
    
    //to the graphs
    if(somaTransport === 0){
      onSnapshot(qry, (result) => { 
        result.docs.map((element, index) => {
          if (element.data().expendType === "transport") {
            somaTransport += element.data().expend;
          } else if (element.data().expendType === "food") {
            somaFood += element.data().expend;
          } else if (element.data().expendType === "pleasure") {
            somaPleasure += element.data().expend;
          } else if (element.data().expendType === "investment") {
            somaInvestment += element.data().expend;
          } else if (element.data().expendType === "other") {
            somaOther += element.data().expend;
          } else {
            console.log("something went wrong");
          }
        });
  
      });
    }else{
      return
    }

  }, []);

  const datachart = {
    labels: ["Food", "transport", "pleasure", "investment", "other"],
    datasets: [
      {
        label: "# of Votes",
        data: [
          somaFood,
          somaTransport,
          somaPleasure,
          somaInvestment,
          somaOther,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  function hideGraphfun(){
    setHideGraph(false)
  }

  function showGraph(){
    setHideGraph(true)
  }

  return (
    <div className="home">
      {widthOfScreen <= 500 ? <div className="optionMobile">
        <button className="Btn__graph" onClick={hideGraphfun}>Graph</button>
        <button className="Btn__row" onClick={showGraph}>Row</button>
      </div> : <></>}
      <div className={`home__left ${hideGraph ? `hide`:``}`}>
        <div className="home__graphs">
          <div className="home__leftGraphOne">
            <Doughnut
              data={datachart}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
          </div>
        </div>
      </div>

      <div className="home__right">
        <div className="home__rightListOfThings">
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

export default Home;
