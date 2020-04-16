import React from 'react';
import logo from './logo.svg';
import './App.css';
import EmployeesList from "./components/EmployeesList"
import Search from "./components/Search"
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="container">
    <Search/>
   <EmployeesList/>
   </div>
  );
}




export default App;
