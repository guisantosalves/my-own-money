import React, { useEffect, useState } from "react";
import "./css/GraphOne.css";
import Chart from "react-apexcharts";

function GraphOne() {

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
