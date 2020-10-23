import React from 'react';
import styled from 'styled-components';

const ImageCard = styled.img`
    width: 95%;
`
const DivCard = styled.div`
    margin-bottom: 15px;
    text-align: center;
    
`

export class Card extends React.Component {
    render() {
        return (<DivCard>
            <ImageCard src={this.props.image}/>
            <p>{this.props.name}</p>
            <p>R$ {this.props.price},00</p>
            <button onClick={()=> this.props.toCart(this.props.id)}>Adicionar ao Carrinho</button>
        </DivCard>
        )
    }
}

export default Card;