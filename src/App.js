import React from "react";
import styled from "styled-components";
import "./App.css";
import ShopCart from "./components/ShopCart/ShopCart";
import Products from "./components/Products/Products";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

const MainContainer = styled.div`
  display: flex;
  height: 100%;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    flex-direction: column-reverse;
  }
`;

const ProductsContainer = styled.div`
  width: 80vw;
  flex-grow: 1;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    width: 100vw;
  }
`;

class App extends React.Component {
  state = {
    productsArray: [
      {
        id: 1,
        image: "https://i.imgur.com/vrnfGOA.png",
        name: "Catuniverse",
        price: 70,
        quantity: 0,
      },
      {
        id: 2,
        image: "https://i.imgur.com/uGk5p0c.png",
        name: "I Love you to the moon",
        price: 80,
        quantity: 0,
      },
      {
        id: 3,
        image: "https://i.imgur.com/5iaBc0X.png",
        name: "I will destroy your world",
        price: 90,
        quantity: 0,
      },
      {
        id: 4,
        image: "https://i.imgur.com/LJhF8ME.png",
        name: "Houston we have a problem",
        price: 79,
        quantity: 0,
      },
      {
        id: 5,
        image: "https://i.imgur.com/YB8qw11.png",
        name: "Cat side of the moon",
        price: 80,
        quantity: 0,
      },
      {
        id: 6,
        image: "https://i.imgur.com/cVyh8LI.png",
        name: "Houston we have a donuts",
        price: 69,
        quantity: 0,
      },
      {
        id: 7,
        image: "https://i.imgur.com/NDbSBLe.png",
        name: "Catstronauts",
        price: 59,
        quantity: 0,
      },
      {
        id: 8,
        image: "https://i.imgur.com/3ywvppA.png",
        name: "In a galaxy far, far away",
        price: 79,
        quantity: 0,
      },
    ],
    inputMinValue: "",
    inputMaxValue: "",
    inputSearch: "",
    shopCartIsVisible: false,
    aboutUsIsVisible: false,
    shopList: []
  };

  // ------- funções shopCart ------------------------------------
  //função adicionar produto
  addProduct = (id, name, price) => {
    let productToAdd = this.state.shopList.find((item) => {
      return id === item.id;
    });

    if (productToAdd) {
      const alreadyIn = [];
      for (let item of this.state.shopList) {
        if (id === item.id) {
          item.quantity += 1;
        }
        alreadyIn.push(item);
      }

      this.setState({ shopList: alreadyIn });
    } else {
      const newProduct = { id: id, name: name, price: price, quantity: 1 };
      const newProducts = [...this.state.shopList, newProduct];
      this.setState({ shopList: newProducts });
    }
  };

  // função remover item carrinho
  removeItem = (itemId) => {
    const alreadyThere = this.state.shopList.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    })

    const deletedCompletely = alreadyThere.filter((item) => item.quantity > 0)

    this.setState({ shopList: deletedCompletely })
  };
  // -----------------------------------------------------

  // ------- desafio 1 ------------------------------------
  // didupdate da shopList
  componentDidUpdate = () => {
    localStorage.setItem("lista", JSON.stringify(this.state.shopList));
  };

  // didmount da shopList
  componentDidMount = () => {
    if (localStorage.getItem("lista")) {
      this.setState({ shopList: JSON.parse(localStorage.getItem("lista")) });
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
  // funções de input controlados
  onChangeMin = (event) => {
    this.setState({ inputMinValue: event.target.value });
  };
  onChangeMax = (event) => {
    this.setState({ inputMaxValue: event.target.value });
    console.log("entrei")
  };

  onChangeInputSearch = (event) => {
    this.setState({ inputSearch: event.target.value });
  };

  // função de filtro por minimo e maximo e por nome
  filterProducts = () => {
    let filteredList
    if (this.state.inputSearch !== "") {
      filteredList = this.state.productsArray.filter((item) => {
        const name = item.name.toLowerCase();
        const input = this.state.inputSearch.toLowerCase();
        if (name.includes(input)) {
          return true
        } else {
          return false
        }
      });
     
    } else if ((this.state.inputMaxValue !== "") || (this.state.inputMinValue !== "")) {
      filteredList = this.state.productsArray.filter((item) => {
        if ((item.price >= this.state.inputMinValue) &&  (item.price <= this.state.inputMaxValue)) {
          return true
        } else {
          return false
        }
      });
 
      
    } else {
      filteredList = this.state.productsArray;
      
    }
    return filteredList
  };

  // -----------------------------------------------------

  render() {
    return (
      <div>
        <Header
          clickFunction={this.handleShoppingCartVisibility}
          aboutUsVisibility={this.handleAboutUsVisibility}
          onChangeName={this.onChangeInputSearch}
        />
        {this.state.aboutUsIsVisible && <AboutUs />}
        <MainContainer>
          <ProductsContainer>
            <Products
              products={this.filterProducts()}
              toCart={this.addProduct}
              onChangeMin={this.onChangeMin}
              onChangeMax={this.onChangeMax}
              inputMinValue={this.state.inputMinValue}
              inputMaxValue={this.state.inputMaxValue}
              inputName = {this.state.inputSearch}
            />
          </ProductsContainer>
          {this.state.shopCartIsVisible && (
            <ShopCart
              removeItem={this.removeItem}
              shopList={this.state.shopList}
            />
          )}
        </MainContainer>
        <Footer />
      </div>
    );
  }
}

export default App;
