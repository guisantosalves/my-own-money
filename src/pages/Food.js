import React, { useEffect, useState } from "react";
import "./css/Food.css";
import Row from "../components/RowExpend";

//chart-react-2
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

//firebase
import { collection, query, orderBy, onSnapshot, where } from "firebase/firestore";
import { db } from "../firebase";

//getting datalayer
import { useStateValue } from "../StateProvider";

let somaTransport = 0;
let somaFood = 0;
let somaPleasure = 0;
let somaInvestment = 0;
let somaOther = 0;

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
        position: 'top',
      },
      title: {
        display: true,
        text: 'Expend with food',
      },
    },
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const dataChart = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [15, 7, 8, 9, 10, 2, 1 ,1, 1, 1, 1, 1],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [1, 2, 3, 4, 5, 6],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

function Food() {
  const [data, setData] = useState([]);

  useEffect(() => {
    
    const qry = query(collection(db, "gasto"), where("expendType", "==", "food"), orderBy('deleted', 'asc'));

    onSnapshot(qry, (result) => {

        setData(
          result.docs.map((item, index) => ({
            id: item.id,
            data: item.data(),
          }))
        );

      });
    
  }, []);

  return (
    <div className="food">
      <div className="food__left">
        <div className="food__graphs">
          <div className="food__leftGraphOne">
            <Bar options={options} data={dataChart}/>
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
