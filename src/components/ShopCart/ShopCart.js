import React from 'react';
import ShopCartItem from './ShopCartItem'

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
            <div>
                <h2>Carrinho</h2>
                {this.arrayShopList}
                <p>Total: R$ {this.getTotal()},00</p>
            </div>
        )
    }
}

export default ShopCart