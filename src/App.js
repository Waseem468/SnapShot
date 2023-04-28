
import React from 'react';
import './App.css';
import Header from './component/Header';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Mountains from './component/Mountains';
import Beaches from './component/Beaches';
import Birds from './component/Birds';
import Food from './component/Food';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/Mountain" element={<Mountains/>}/>
        <Route path="/Beaches" element={<Beaches/>}/>
        <Route path="/Birds" element={<Birds/>}/>
        <Route path='/Food' element={<Food/>}></Route>
        <Route/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;