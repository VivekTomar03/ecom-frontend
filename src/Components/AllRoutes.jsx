import React from 'react';
import { Route, Routes } from "react-router-dom"
import Homepage from '../Pages/Homepage';
import MensProduct from '../Pages/MensProduct';
import Womens from '../Pages/Womens';
import Kids from '../Pages/Kids';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import ProductDetail from './ProductDetail';
import ErrorPage from './Error';
import Cart from '../Pages/Cart';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/mens' element={<MensProduct/>}/>
      <Route path='/womens' element={<Womens/>}/>
      <Route path='/kids' element={<Kids/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/product/:id' element={<ProductDetail/>}/>
      <Route path='*' element={<ErrorPage/>}/>

      {/* {"Private route"} */}
      <Route path='/cart' element={<Cart/>}/>

    </Routes>
  );
}

export default AllRoutes;
