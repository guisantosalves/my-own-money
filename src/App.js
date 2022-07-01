import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">

      {/* header */}
      <Header/>

      {/* body page with router -> home e as classificações */}
      <Routes>
        <Route path='/' element={<Home/>}/>
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
