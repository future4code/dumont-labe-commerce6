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
    state = {
        productsArray: [
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
                price: 0.30
            },
            {
                id: 4,
                image: "https://picsum.photos/300/300",
                name: "camiseta",
                price: 0.50
            },
            {
                id: 5,
                image: "https://picsum.photos/300/300",
                name: "camiseta",
                price: 0.50
            },
            {
                id: 6,
                image: "https://picsum.photos/300/300",
                name: "camiseta",
                price: 0.50
            },
            {
                id: 7,
                image: "https://picsum.photos/300/300",
                name: "camiseta",
                price: 0.50
            },
            {
                id: 8,
                image: "https://picsum.photos/300/300",
                name: "camiseta",
                price: 0.50
            }
            
        ],
        shopList: []
    }

    onClickAddProduct = (id) => {
        //TODO: função está sobreescrevendo quando salva um produto
        const newShopList = this.state.productsArray.filter((product) => {
          if ( id === product.id ){
              return {...this.state.shopList, product}
          }
        })

        this.setState({ shopList: newShopList })
        this.saveOnLocalStorage(this.state.shopList)
    }

    saveOnLocalStorage = (array)=>{
        localStorage.setItem("produtos", JSON.stringify(array))
    }

    orderByPrice = (event) => {
        if (event.target.value === "crescente") {
            const crescent = this.state.productsArray.sort((a,b) => {
              return (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0)
            })
            this.setState({productsArray: crescent})
        }else {
            const decrescent = this.state.productsArray.reverse((a,b) => {
                return (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0)
              })
              this.setState({productsArray: decrescent})
        }     
        
    }

    render() {
        const productsList = this.state.productsArray.map((product) => {
            return (
                <Card image= {product.image}
                name= {product.name}
                id={product.id}
                price= {product.price}
                toCart={this.onClickAddProduct} />
            )
        }) 

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
                {productsList}
            </GridContainer>
        </div>
        )
    }
}

export default Products;