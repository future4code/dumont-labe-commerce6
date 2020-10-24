import React from 'react';
import ShopCartItem from './ShopCartItem'
import styled from 'styled-components';

const ShopCartContainer = styled.div`
    width: 24vw;
    height: 45vw;
    margin: 1.5em 1.5em 0 0;
    padding: 10px;
    border: solid 1px rgb(35, 32, 113);
    border-radius: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: 'Staatliches', cursive;
    background-color: rgb(230, 197, 191, 0.3);
    font-size: 1.2em;
    color: rgb(35, 32, 113);

    @media (min-device-width : 320px) and (max-device-width : 420px)  {
        width: 94.6vw;
        height: 60%;
        margin: 0; 
        border-radius: 0;
        border-left: none;
        border-right: none;
    }
`
const Title = styled.h2` 
    margin: 30px;
    font-size: 1.3em;
    color: #744b9d;

    @media (min-device-width : 320px) and (max-device-width : 420px)  {
        font-size: 1.7em;
        color: rgb(35, 32, 113);
    }
`
const Total = styled.p`
    margin: 10px 0 30px 0;
    color: #744b9d;
    font-size: 1.3em;
    border: 2px solid #744b9d;
    border-left: none;
    border-right: none;
    border-top: none;
    color: rgb(35, 32, 113);
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