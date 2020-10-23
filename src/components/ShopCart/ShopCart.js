import React from 'react';
import ShopCartItem from './ShopCartItem'
import styled from 'styled-components';

const ShopCartContainer = styled.div`
    width: 20vw;
    height: 100vh;
    margin: 10px;
    padding-left: 10px;
    border: solid 1px black;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

class ShopCart extends React.Component {

    arrayShopList = this.props.shopList.map((product)=>{
        return <ShopCartItem item={product} />
    })

    getTotal = () => {
        let total = 0
        for (let item of this.props.shopList){
            total += item.price * item.quantity 
        }
        return total;
    }

    render() {
        return(
            <ShopCartContainer>
                <h2>Carrinho</h2>
                {this.arrayShopList}
                <p>Total: R$ {this.getTotal()},00</p>
            </ShopCartContainer>
        )
    }
}

export default ShopCart