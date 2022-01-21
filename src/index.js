import 'bootstrap/dist/css/bootstrap.css'
import { React } from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, HashRouter } from 'react-router-dom';
import $ from 'jquery';
import Popper from 'popper.js';
import Navbar from './Navbar';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import AllData from './components/AllData';
import Balance from './components/Balance';
import Home from './Home';
import { UserContext } from './context';
import './index.css';

function Spa() {
  return (
    <HashRouter>
      <div>
        <Navbar />
        <br/>
        <UserContext.Provider value={{users: [{name: 'abel', email: 'abel@mit.edu', password: 'secret', balance: 100}]}}>
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