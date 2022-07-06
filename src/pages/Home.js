import React, { useEffect, useState } from "react";
import "./css/Home.css";
import Row from "../components/RowExpend";
import GraphOne from "../components/GraphOne";
import GraphTwo from "../components/GraphTwo";

//firebase
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

function Home() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    
    const qry = query(collection(db, "gasto"))
    onSnapshot(qry, (result)=>{
        
      setData(result.docs.map((item, index)=>(
        {
          id: item.id,
          data: item.data(),
        }
      )))

    })

  }, [data])

  return (
    <div className="home">
      <div className="home__left">
        <div className="home__graphs">
          <div className="home__leftGraphOne">
            <GraphOne dataFromHome={data}/>
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
              key={item.id}
              expend={item.data.expend}
              expendType={item.data.expendType}
              timestamp={item.data.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
