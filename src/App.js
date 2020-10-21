import React from 'react';
import styled from 'styled-components';
import './App.css';
import Filter from './components/Filter';
import ShopCart from './components/ShopCart';
import Products from './components/Products';

const MainContainer = styled.div`
  display: flex;
`

const ProductsContainer = styled.div`
  width: 80vw;
  flex-grow: 1;
`

class App extends React.Component {
  
  render() {
    return (
      <MainContainer>
        <Filter/>
        <ProductsContainer>
          <Products/>
        </ProductsContainer>
        <ShopCart/>
      </MainContainer>
    );
  }
}
export default App;