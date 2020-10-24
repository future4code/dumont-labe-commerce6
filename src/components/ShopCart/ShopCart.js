import React from 'react';
import ShopCartItem from './ShopCartItem'
import styled from 'styled-components';

const ShopCartContainer = styled.div`
    width: 22vw;
    height: 100vh;
    margin: 10px;
    padding: 10px;
    border: solid 1px black;
    border-radius: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: 'Staatliches', cursive;
    background-color: rgb(230, 197, 191, 0.3);
    font-size: 1.2em;
    color: rgb(35, 32, 113);
`
const Title = styled.h2` 
    margin: 20px;
    color: #744b9d;
`
const Total = styled.p`
    margin-top: 10px;
    color: #744b9d;
    font-size: 1.3em;
    border: 2px solid #744b9d;
    border-left: none;
    border-right: none;
    border-top: none;
`

class ShopCart extends React.Component {

    getTotal = () => {
        let total = 0
        for (let item of this.props.shopList){
            total += item.price * item.quantity 
        }
        return total;
    }

    render() {
        const arrayShopList = this.props.shopList.map((product)=>{
            return <ShopCartItem removeItem={this.props.removeItem} item={product} />
        })

        return(
            <ShopCartContainer>
                <Title>Carrinho</Title>
                {arrayShopList}
                <Total>Total: R$ {this.getTotal()},00</Total>
            </ShopCartContainer>
        )
    }
}

export default ShopCart