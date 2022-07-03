import React, { useState } from "react";
import "./css/Home.css";
import Row from "../components/RowExpend";
import GraphOne from "../components/GraphOne";
import GraphTwo from "../components/GraphTwo";

function Home() {
  const [data, setData] = useState([
    {
      expend: 2548,
      expendType: "food",
      timestamp: "15:30",
    },
    {
      expend: 4687,
      expendType: "transport",
      timestamp: "15:30",
    },
    {
      expend: 8596,
      expendType: "investment",
      timestamp: "15:30",
    },
    {
      expend: 8596,
      expendType: "investment",
      timestamp: "15:30",
    },
    {
      expend: 8596,
      expendType: "investment",
      timestamp: "15:30",
    },
    {
      expend: 8596,
      expendType: "investment",
      timestamp: "15:30",
    },
    {
      expend: 4687,
      expendType: "transport",
      timestamp: "15:30",
    },
    {
      expend: 4687,
      expendType: "transport",
      timestamp: "15:30",
    },
  ]);

  return (
    <div className="home">
      <div className="home__left">
        <div className="home__graphs">
          <div className="home__leftGraphOne">
            <GraphOne />
          </div>

          <div className="home__leftGraphTwo">
            <GraphTwo />
          </div>
        </div>
      </div>

      <div className="home__right">
        <div className="home__rightListOfThings">
          {data.map((item, index) => (
            <Row
              expend={item.expend}
              expendType={item.expendType}
              timestamp={item.timestamp}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
