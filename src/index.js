import 'bootstrap/dist/css/bootstrap.css'
import { React, createContext } from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, HashRouter } from 'react-router-dom';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle'
import Nav from './nav';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import AllData from './components/AllData';
import Balance from './components/Balance';
import Home from './components/Home';
import './index.css';

export const UserContext = createContext(null);

function Spa() {
  return (
    <HashRouter>
      <div>
        <h1>Routing - Hello World</h1>
        <Nav />
        <br/>
        <UserContext.Provider value={{users:['peter']}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/" element={<Login />} />
            <Route path="/balance/" element={<Balance />} />
            <Route path="/deposit/" element={<Deposit />} />
            <Route path="/withdraw/" element={<Withdraw />} />
            <Route path="/alldata/" element={<AllData />} />
            <Route path="/createaccount/" element={<CreateAccount />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </HashRouter>

  );
}

ReactDOM.render(<Spa />, document.getElementById('root'));

{/* <Route path="expenses" element={<Expenses />} /> */}