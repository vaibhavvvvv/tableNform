import logo from './logo.svg';
import './App.css';
import SignUpForm from './userForm';
import AntTable from './table';
import MyTable from './card';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    // <div className="App">
    //   <AntTable/>
    // </div>
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MyTable />} />
      <Route path="/userForm" element={<SignUpForm />} />
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
