import React from 'react'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import styled from 'styled-components';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import {
  BrowserRouter as Router,
  Routes,
  useLocation
} from "react-router-dom";
import { Route } from "react-router-dom";

const App = () => {
  return( 
  <Router>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Cart' element={<Cart/>} />
    <Route path='/SignIn' element={<Login/>} />
    <Route path='/Register' element={<Register/>}/>
    </Routes>
  </Router>
  )
};

export default App;