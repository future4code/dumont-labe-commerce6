import React from 'react';

export class ShopCart extends React.Component {
    render() {
        return(
            <div>
                <h2>Carrinho</h2>
                <p>{this.props.quantity}</p>
                <p>{this.props.item}</p>
                <p onClick={this.props.deletItem}>X</p>
                <p>{"Total:"}</p>
                <p>R${this.props.total}</p>
            </div>
        )
}
}
