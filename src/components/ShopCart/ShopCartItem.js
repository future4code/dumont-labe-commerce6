import React from 'react';
import styled from 'styled-components';

const Div = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
`

class ShopCartItem extends React.Component {

    render() {
        return(
            <Div>
                <p>{this.props.item.quantity} x {this.props.item.name} - R$ {this.props.item.price}     </p>
                <p onClick={() => this.props.removeItem(this.props.item.id)}>    X</p>
            </Div>
        )
    }
}

export default ShopCartItem
