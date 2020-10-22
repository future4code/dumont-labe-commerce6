import React from 'react';
import styled from 'styled-components';
import './App.css';
import Filter from './components/Filter';
import ShopCart from './components/ShopCart';
import Products from './components/Products';
import CartButton from './components/CartButton';

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
        name: "bananinha",
        price: 10
    },
    {
        id: 2,
        image: "https://picsum.photos/300/300",
        name: "feijão",
        price: 60
    },
    {
        id: 3,
        image: "https://picsum.photos/300/300",
        name: "gatinha",
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
    inputSearchProduct: "",
    isVisible: false,
    filteredList: [],
    shopList: [
        {
          id: 8,
          image: "https://picsum.photos/300/300",
          name: "camiseta",
          price: 50,
          quantity: 1
      },
        {
          id: 9,
          image: "https://picsum.photos/300/300",
          name: "camiseta",
          price: 51,
          quantity: 5
      }
    ]
  }

  handleShoppingCartVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  onChangeInputSearch = (event) => {
    this.setState({ inputSearch: event.target.value });

    const filteredList = this.productsArray.filter((product) => {
      const name = product.name.toLowerCase();
      const inputValue = event.target.value.toLowerCase();
      if (name.includes(inputValue)) {
        return product;
      } else {
        return this.setState({ filteredList: this.productsArray });
      }
    });
    this.setState({ filteredList: filteredList });
  };

  render() {
    return (
      <MainContainer>
        <Filter
        minFilter={this.state.inputMinValue}
        maxFilter={this.state.inputMaxValue}
        nameFilter={this.onChangeInputSearch}
        />
        <ProductsContainer>
          <Products
          products={this.productsArray}
          nameFilter={this.state.inputSearchProduct}
          filteredList={this.state.filteredList}/>
        </ProductsContainer >
        <CartButton clickFunction={this.handleShoppingCartVisibility}/>
        {this.state.isVisible && <ShopCart shopList={this.state.shopList}/>}
      </MainContainer>
    );
  }
}
export default App;