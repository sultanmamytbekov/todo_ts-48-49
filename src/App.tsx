import React from 'react';
import './App.css';
import Admin from './components/Admin';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Edit from './components/Edit';
import Order from './components/Orders';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/orders' element={<Order/>}/>
        <Route path='/edit' element={<Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;
