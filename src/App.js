import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Card from './components/Card';

export class App extends React.Component {
  render(){
    return (
      <div>
        <Card id={1}
        image={"https://picsum.photos/300/300"}
        name={"Camiseta"}
        price={0.50} />
      </div>
    );
  }
}

export default App;
