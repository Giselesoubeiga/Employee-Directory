import React from 'react';
import logo from './logo.svg';
import './App.css';
import EmployeesList from "./components/EmployeesList"
import Search from "./components/Search"




function App() {
  return (
    <div>
    <Search></Search>
   <EmployeesList></EmployeesList>
   </div>
  );
}




export default App;
