import React from 'react';
import styled from 'styled-components';
import './App.css';
import ShopCart from './components/ShopCart/ShopCart';
import Products from './components/Products/Products';
import Header from './components/Header'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'

const MainContainer = styled.div`
  display: flex;
  height: 100%;
`

const ProductsContainer = styled.div`
  width: 80vw;
  flex-grow: 1;
`

class App extends React.Component {

  state = {
    productsArray: [
      {
          id: 1,
          image: "https://picsum.photos/300/300",
          name: "bananinha",
          price: 10,
          quantity: 0
      },
      {
          id: 2,
          image: "https://picsum.photos/300/300",
          name: "feijão",
          price: 60,
          quantity: 0
      },
      {
          id: 3,
          image: "https://picsum.photos/300/300",
          name: "gatinha",
          price: 30,
          quantity: 0
      },
      {
          id: 4,
          image: "https://picsum.photos/300/300",
          name: "camiseta",
          price: 50,
          quantity: 0
      },
      {
          id: 5,
          image: "https://picsum.photos/300/300",
          name: "camiseta",
          price: 50,
          quantity: 0
      },
      {
          id: 6,
          image: "https://picsum.photos/300/300",
          name: "camiseta",
          price: 50,
          quantity: 0
      },
      {
          id: 7,
          image: "https://picsum.photos/300/300",
          name: "camiseta",
          price: 50,
          quantity: 0
      },
      {
          id: 8,
          image: "https://picsum.photos/300/300",
          name: "camiseta",
          price: 50,
          quantity: 0
      }
      
    ],
    inputMinValue: 0,
    inputMaxValue: Infinity,
    inputSearchProduct: "",
    shopCartIsVisible: false,
    aboutUsIsVisible: false,
    filteredList: [],
    shopList: [],
    priceRangeList: []
  }

  // ------- funções shopCart ------------------------------------
  //função adicionar produto 
  addProduct = (itemId) => {
    const productToAdd = this.state.productsArray.find(item => {
      return(itemId === item.id)
    })
    if(productToAdd){
      const newProductToAdd = this.state.productsArray.find(item => itemId === item.id)
      const newShopList = [...this.state.shopList, {...newProductToAdd, quantity: 1}]
      this.setState({shopList: newShopList})
    } else {
      const newProductsToAdd = [...this.state.shopList, productToAdd]
      this.setState({shopList: newProductsToAdd})
    }
  }

  // função remover item carrinho
  removeItem = (itemId) => {
    const newList = this.state.shopList.filter((product) => {
      return product.id !== itemId;
    });
    this.setState({ shopList: newList });
  };
  // -----------------------------------------------------

  // ------- desafio 1 ------------------------------------
  // didupdate da shopList
  componentDidUpdate = () => {

    localStorage.setItem("lista", JSON.stringify(this.state.shopList))
  }

  // didmount da shopList
  componentDidMount = () => {
    if (localStorage.getItem("lista")) {
      this.setState({shopList: JSON.parse(localStorage.getItem("lista"))})
    }
  };
  // -----------------------------------------------------


  // ------- funções visibilidade ------------------------
  // função de mostrar se o shopping cart tá visível ou não
  handleShoppingCartVisibility = () => {
    this.setState({ shopCartIsVisible: !this.state.shopCartIsVisible });
  };

  // função de mostrar e esconder o about us
  handleAboutUsVisibility = () => {
    this.setState({ aboutUsIsVisible: !this.state.aboutUsIsVisible });
  };
  // ----------------------------------------------------- 


  // ------- funções de filtro ---------------------------
  // função filtrar pelo nome do item
  onChangeInputSearch = (event) => {
    this.setState({ inputSearch: event.target.value });
    
    const filteredList = this.state.productsArray.filter((product) => {
      const name = product.name.toLowerCase();
      const inputValue = event.target.value.toLowerCase();
      if (name.includes(inputValue)) {
        return product;
      } else {
        return this.setState({ filteredList: this.state.productsArray });
      }
    });
    this.setState({ filteredList: filteredList });
  };

  // -----------------------------------------------------

  render() {
    return (
      <div>
        <Header 
        clickFunction={this.handleShoppingCartVisibility} 
        aboutUsVisibility={this.handleAboutUsVisibility}
        nameFilter={this.onChangeInputSearch}/>
        {this.state.aboutUsIsVisible && <AboutUs />}
        <MainContainer>
        <ProductsContainer>
          <Products
          products={this.state.productsArray}
          toCart = {this.addProduct}
          filteredList={this.state.filteredList}
          rangeFilter = {this.filterPriceRange}
          rangeList = {this.state.priceRangeList}
          
          />
        </ProductsContainer >
        {this.state.shopCartIsVisible && 
        <ShopCart removeItem={this.removeItem} 
        shopList={this.state.shopList}/>}
      </MainContainer>
      <Footer />
      </div>
    )
  }

}

export default App;
