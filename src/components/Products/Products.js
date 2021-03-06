import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Filter from "../Filter";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Staatliches", cursive;
  font-size: 1.2em;
  color: rgb(35, 32, 112);
  margin-top: 2em;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    flex-direction: column;
    background-color: rgb(230, 197, 191, 0.3);
    margin-top: 0;
    font-size: 1.3em;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-right: 10px;
  margin: 2.5em 2em 4em 2em;
  padding: 4em 2em 0 2em;
  background-color: rgb(230, 197, 191, 0.3);
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    margin: 0;
  }
`;

const Select = styled.select`
  height: 1.5em;
  width: 10em;
  border: 2px solid rgb(35, 32, 112);
  border-radius: 4px;
  font-size: 0.95em;
  color: rgb(35, 32, 112);
  font-family: "Staatliches", cursive;
  margin-right: 35px;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    margin-top: 2em;
    margin-right: 0;
    width: 15em;
    height: 2em;
    font-size: 0.8em;
  }
`;

export class Products extends React.Component {
  state = {
    option: "",
  };

  //  controle do input
  onChangeSelect = (event) => {
    this.setState({ option: event.target.value });
  };

  // função ordernar preço por crescente e decrescente
  orderByPrice = (array) => {
    return array.sort((a, b) =>
      this.state.option === "crescente" ? a.price - b.price : b.price - a.price
    );
  };

  filterProducts = () => {

  }
  
  render() {
    const orderedList = this.orderByPrice(this.props.products);
    
    let list = orderedList.map((product) => {
            return (
              <Card
                image={product.image}
                name={product.name}
                id={product.id}
                price={product.price}
                quantity={product.quantity}
                toCart={this.props.toCart}
              />
            );
          });

    return (
      <div>
        <Header>
          <Filter
            onChangeMin={this.props.onChangeMin}
            onChangeMax={this.props.onChangeMax}
            inputMinValue={this.props.inputMinValue}
            inputMaxValue={this.props.inputMaxValue}
          />
          <p>Quantidade de Produtos: {list.length}</p>
          <Select onChange={this.onChangeSelect}>
            <option value={"crescente"}>Ordem crescente</option>
            <option value={"decrescente"}>Ordem decrescente</option>
          </Select>
        </Header>
        <GridContainer>{list}</GridContainer>
      </div>
    );
  }
}

export default Products;
