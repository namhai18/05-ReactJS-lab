import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Baitap1 from './baitap1/index';
import Baitap2 from './baitap2/index';
import RenderingElement from './rendering-element/index';
import HandlingEvent from './handling-event/index'
import ExampleEvent from './handling-event/example-event'
import State from './state/index'
import ExampleCar from './example-car/index'
import ListKey from './list-key/index'
import Props from './props/index'
import BaiTapProps from './props_baitap/index'
import ShoppingCart from './shopping-cart/index'
import Home from './user-managerment/Home'
import HomeRedux from './user-managerment-redux/Home'
import LifeCycle from './lifecycle/index'
import FormValidation from './form-validation/index'

function App() {
  return (
    <div >
      <FormValidation />
      <hr />
      <LifeCycle />
      <hr />
      <HomeRedux />
      <hr />
      <Home />
      <hr />
      <ShoppingCart />
      <hr />
      <p>Bai tap props</p>
      <BaiTapProps />
      <hr />
      {/* Add component vào App.js để chạy */}
      {/* <Baitap1 /> */}
      {/* <Baitap2 /> */}
      <RenderingElement />
      <hr />
      <HandlingEvent />
      <hr />
      <ExampleEvent />
      <hr />
      <State />
      <hr />
      <ExampleCar />
      <hr />
      <ListKey />
      <hr />
      <Props />
      <hr />
      
      Main App.js
    </div>
  );
}

export default App;
