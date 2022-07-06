import React, { useEffect, useState } from "react";
import "./css/GraphOne.css";
import Chart from "react-apexcharts";
import {db} from "../firebase"
import { collection, onSnapshot, query } from "firebase/firestore";

function GraphOne({dataFromHome}) {

  const [data, setData] = useState([]);

  const somFood = [];
  const somPleasure = [];
  const somInvestment = [];
  const somTransport = [];
  const somOther = [];

  useEffect(() => {

    setData(dataFromHome)

    data.map((item, index)=>{
      switch(item.data.expendType){
        case "food":
          return somFood.push(item.data.expend)
        
        case "pleasure":
          return somPleasure.push(item.data.expend)
        
        case "investment":
          return somInvestment.push(item.data.expend)
        
        case "transport":
          return somTransport.push(item.data.expend)

        case "other":
          return somOther.push(item.data.expend)
      }
    })

    console.log(somTransport)
  }, []);


  const [setting, setSetting] = useState([
    {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: ["food", "pleasure", "investment", "transport", "other"],
        },
      },
      series: [
        {
          //aqui tem que ser os somatórios das categorias
          name: "Value",
          data: [15.5, 16.6, 51, 16.6, 16.7],
        },
      ],
    },
  ]);

  return (
    <div className="graphOne">
      {setting.map((item, index) => (
        <Chart
          options={item.options}
          series={item.series}
          type="line"
          width="400"
        />
      ))}
    </div>
  );
}

export default GraphOne;
