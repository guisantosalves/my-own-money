import React, { useState } from "react";
import "./css/GraphTwo.css"
import Chart from "react-apexcharts";

function GraphTwo(){

    const [setting, setSetting] = useState([{
        options: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
            }
          },
        series: [
            {
              name: "series-1",
              data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
          ]
        
    }
    ])

    return(
        <div className="graphOne">

            {setting.map((item, index)=>(
                <Chart
                options={item.options}
                series={item.series}
                type="bar"
                width="400"
              />
            ))}

        </div>
    )
}

export default GraphTwo;