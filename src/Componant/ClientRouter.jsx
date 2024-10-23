import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home';
import About from './About';
import Cart from './Cart';
import Dish from './Dish';
import Login from './Login';
import Order from './Order';
const ClientRouter = () => {
  return (
    <div>
        <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/dish' element={<Dish/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/order' element={<Order/>}/>
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default ClientRouter
