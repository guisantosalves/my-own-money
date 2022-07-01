import './App.css';
import Header from './components/Header';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">

      {/* header */}
      <Header/>

      {/* body page with router -> home e as classificações */}
      <Routes>
        <Route path='/' element={<h1>Home</h1>}/>
        <Route path='/food' element={<h1>Comida</h1>}/>
        <Route path='/pleasure' element={<h1>Lazer</h1>}/>
        <Route path='/investment' element={<h1>investimento</h1>}/>
        <Route path='/transport' element={<h1>transporte</h1>}/>
        <Route path='/other' element={<h1>outros</h1>}/>
      </Routes>
    
    </div>
  );
}

export default App;
