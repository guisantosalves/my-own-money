import React from "react";
import "./css/Home.css";
import Row from "../components/RowExpend";
import GraphOne from "../components/GraphOne";
import GraphTwo from "../components/GraphTwo";

function Home() {
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
          {Array(10)
            .fill()
            .map(() => (
              <Row expend={1234} expendType={`comida`} />
            ))}
        </div>

      </div>
    </div>
  );
}

export default Home;
