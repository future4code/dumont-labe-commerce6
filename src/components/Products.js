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
    productsArray = [
        {
            id: 1,
            image: "https://picsum.photos/300/300",
            name: "camiseta",
            price: 0.50
        },
        {
            id: 2,
            image: "https://picsum.photos/300/300",
            name: "camiseta",
            price: 0.50
        },
        {
            id: 3,
            image: "https://picsum.photos/300/300",
            name: "camiseta",
            price: 0.50
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
        
    ]

    render() {

        const productsList = this.productsArray.map((product) => {
            return (
                <Card image= {product.image}
                name= {product.name}
                price= {product.price} />
            )
        }) 

        return (<div>
            <Header>
                <p>Quantidade de Produtos: 8</p>
                <Logo src={logo}/>
                <select>
                    <option>Crescente</option>
                    <option>Decrescente</option>
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