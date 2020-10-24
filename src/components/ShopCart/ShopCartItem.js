import React from 'react';
import styled from 'styled-components';
import BotaoExcluir from '../../img/botao-excluir.svg'

const DivCart = styled.div`
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    justify-content: center;
`
const Item = styled.p`
    margin-bottom: 20px;
    border: 2px dotted black;
    border-left: none;
    border-right: none;
    border-top: none;
`
const RemoverItem = styled.img`
    width: 6%;
`

class ShopCartItem extends React.Component {

    render() {
        return(
            <DivCart>
                <Item>{this.props.item.quantity} x {this.props.item.name} - R$ {this.props.item.price}     </Item>
                <RemoverItem onClick={() => this.props.removeItem(this.props.item.id)} src={BotaoExcluir}/>
            </DivCart>
        )
    }
}

export default ShopCartItem
