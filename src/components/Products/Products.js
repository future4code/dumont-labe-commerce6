import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Filter from '../Filter';

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-right: 10px;
`;

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
    if (this.state.option === "crescente") {
      const crescent = array.sort((a, b) => {
        return a.price > b.price ? 1 : b.price > a.price ? -1 : 0;
      });
      return crescent;
    } else {
      const decrescent = array.reverse((a, b) => {
        return a.price > b.price ? 1 : b.price > a.price ? -1 : 0;
      });
      return decrescent;
    }
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
          <select onChange={this.onChangeSelect}>
            <option value={"crescente"}>Crescente</option>
            <option value={"decrescente"}>Decrescente</option>
          </select>
        </Header>
        <GridContainer>{list}</GridContainer>
      </div>
    );
  }
}

export default Products;