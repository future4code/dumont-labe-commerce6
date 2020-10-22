import React from 'react';
import styled from 'styled-components';

export class CartButton extends React.Component {
    render() {
        return (<div>
            <button onClick={this.props.clickFunction}>Mostrar carrinho</button>
        </div>
        )
    }
}

export default CartButton;