import React from "react";
import "./css/Home.css";
import Row from "../components/RowExpend";

function Home(){
    return(
        <div className="home">

            <div className="home__left">
                <h1>grafico</h1>
            </div>

            <div className="home__right">
                <div className="home__rightListOfThings">
                    {Array(10).fill().map(()=>(
                        <Row expend={1234} expendType={`comida`} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Home;