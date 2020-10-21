import React from 'react';
import styled from 'styled-components';
import './App.css';
import Filter from './components/Filter';
import {ShopCart} from './components/ShopCart';
const MainContainer = styled.div`
  display: flex;
`
const ProductsContainer = styled.div`
  background-color: blue;
  flex-grow: 1;
`
class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Filter/>
        <ProductsContainer>Sessao de produtos</ProductsContainer>
        <ShopCart/>
      </MainContainer>
    );
  }
}
export default App;