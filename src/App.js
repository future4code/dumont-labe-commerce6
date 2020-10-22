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
  productsArray = [
    {
        id: 1,
        image: "https://picsum.photos/300/300",
        name: "camiseta",
        price: 10
    },
    {
        id: 2,
        image: "https://picsum.photos/300/300",
        name: "camiseta",
        price: 60
    },
    {
        id: 3,
        image: "https://picsum.photos/300/300",
        name: "camiseta",
        price: 30
    },
    {
        id: 4,
        image: "https://picsum.photos/300/300",
        name: "camiseta",
        price: 50
    },
    {
        id: 5,
        image: "https://picsum.photos/300/300",
        name: "camiseta",
        price: 50
    },
    {
        id: 6,
        image: "https://picsum.photos/300/300",
        name: "camiseta",
        price: 50
    },
    {
        id: 7,
        image: "https://picsum.photos/300/300",
        name: "camiseta",
        price: 50
    },
    {
        id: 8,
        image: "https://picsum.photos/300/300",
        name: "camiseta",
        price: 50
    }
    
  ]

  state = {
    inputMinValue: "",
    inputMaxValue: "",
    inputSearchProduct: ""
  }

  render() {
    return (
      <MainContainer>
        <Filter
        minFilter={this.state.inputMinValue}
        maxFilter={this.state.inputMaxValue}
        nameFilter={this.state.inputSearchProduct}
        />
        <ProductsContainer>
          <Products
          products={this.productsArray}
          minFilter={this.state.inputMinValue}
          maxFilter={this.state.inputMaxValue}
          nameFilter={this.state.inputSearchProduct}/>
        </ProductsContainer >
        <ShopCart/>
      </MainContainer>
    );
  }
}
export default App;