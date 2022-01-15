import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, Link, HashRouter } from 'react-router-dom';
import Home from './home';
import About from './about';
import Products from './products';

function Spa() {
  return (
    <HashRouter>
      <div>
        <h1>Routing - Hellow World</h1>
        <Link to="/">Home</Link> --
        <Link to="/about/">About</Link> --
        <Link to="/products/">Products</Link>
        <br/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />
          <Route path="/products/" element={<Products />} />
        </Routes>
      </div>
    </HashRouter>

  );
}

ReactDOM.render(<Spa />, document.getElementById('root'));

{/* <Route path="expenses" element={<Expenses />} /> */}