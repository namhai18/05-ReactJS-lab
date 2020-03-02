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

function App() {
  return (
    <div >
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
      Main App.js
    </div>
  );
}

export default App;
