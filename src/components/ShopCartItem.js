import React from 'react';

class ShopCartItem extends React.Component {
    render() {
        return(
            <div>
                <p>{this.props.quantity}</p>
                <p>{this.props.item}</p>
                <p onClick={this.props.deletItem}>X</p>
            </div>
        )
    }
}

export default ShopCartItem
