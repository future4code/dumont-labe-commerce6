import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Filter from '../Filter';

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: 'Staatliches', cursive;
  font-size: 1.2em;
  color: rgb(35, 32, 112);
  margin-top: 1.5em;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-right: 10px;
  margin: 2em 4em 4em 4em;
  /* border: 2px solid #eb89a6; */
  padding: 4em 2em 0 2em;
  background-color: rgb(230, 197, 191, 0.3);

`;

const Select = styled.select`
  height: 1.5em;
  width: 10em;
  border: 2px solid rgb(35, 32, 112);
  border-radius: 4px;
  font-size: 0.95em;
  color: rgb(35, 32, 112);
  font-family: 'Staatliches', cursive;
`

export class Products extends React.Component {
  state = {
    option: ""
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

  render() {
    const orderedList = this.orderByPrice(this.props.products);
    const orderedListFiltered = this.orderByPrice(this.props.filteredList)
    let list =
      this.props.filteredList.length !== 0
        ? orderedListFiltered.map((product) => {
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
          })
        : orderedList.map((product) => {
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
          minFilter={this.state.inputMinValue}
          maxFilter={this.state.inputMaxValue}
          />
          <p>Quantidade de Produtos: {list.length}</p>
          <Select onChange={this.onChangeSelect}>
            <option value={"crescente"}>Crescente</option>
            <option value={"decrescente"}>Decrescente</option>
          </Select>
        </Header>
        <GridContainer>{list}</GridContainer>
      </div>
    );
  }
}

export default Products;