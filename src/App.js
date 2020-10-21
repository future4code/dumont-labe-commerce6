import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ShopCar} from './components/ShopCar'

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <ShopCar></ShopCar>
    </div>
  );
}
}

export default App;
