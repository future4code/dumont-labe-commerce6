import React from 'react';

class ShopCartItem extends React.Component {

    render() {
        return(
            <div>
                <p>{this.props.item.quantity}</p>
                <p>{this.props.item.name}</p>
                <p>{this.props.item.price}</p>
                <p onClick={this.props.deletItem}>X</p>
            </div>
        )
    }
}

export default ShopCartItem
