import React from 'react';
import ShopCartItem from './ShopCartItem'

class ShopCart extends React.Component {
    render() {
        return(
            <div>
                <h2>Carrinho</h2>
                <ShopCartItem/>
                <p>{"Total:"}</p>
                <p>R${this.props.total}</p>
            </div>
        )
}
}

export default ShopCart
