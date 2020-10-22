import React from 'react';
import styled from 'styled-components';
import Card from './Card'
import logo from '../img/gatinho.svg'

const Header = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const GridContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`

const Logo = styled.img`
    width: 5%;
`

export class Products extends React.Component {
    
    // state = {
    //     shopList: []
    // }

    // componentDidUpdate = () => {
    //     localStorage.setItem("produtos", JSON.stringify(this.state.shopList))
    // }

    orderByPrice = (event) => {
        if (event.target.value === "crescente") {
            const crescent = this.props.products.sort((a,b) => {
              return (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0)
            })
            this.setState({products: crescent})
        }else {
            const decrescent = this.props.products.reverse((a,b) => {
                return (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0)
              })
              this.setState({products: decrescent})
        }     
        
    }

    filterByPrice = () => {
        this.props.products.filter((product) => {
            if (product.price >= this.props.inputMinValue && product.price <= this.props.inputMaxValue){
                return true
            }
        }
        )
    }

    list =
    this.props.filteredList.length !== 0
      ? this.props.filteredList.map((product) => {
          return (
            <Card image= {product.image}
            name= {product.name}
            id={product.id}
            price= {product.price}
            quantity= {product.quantity}
            toCart={this.props.toCart} />
          );
        })
      : this.props.products.map((product) => {
          return (
            <Card image= {product.image}
            name= {product.name}
            id={product.id}
            price= {product.price}
            quantity= {product.quantity}
            toCart={this.props.toCart} />
          );
        });

    render() {

        return (<div>
            <Header>
                <p>Quantidade de Produtos: 8</p>
                <Logo src={logo}/>
                <select onChange={this.orderByPrice}>
                    <option value={'crescente'}>Crescente</option>
                    <option value={'decrescente'}>Decrescente</option>
                </select>
            </Header>
            <GridContainer>
                {this.list}
            </GridContainer>
        </div>
        )
    }
}

export default Products;