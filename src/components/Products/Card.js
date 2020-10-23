import React from 'react';
import styled from 'styled-components';

const ImageCard = styled.img`
    width: 100%;
`

export class Card extends React.Component {
    render() {
        return (<div>
            <ImageCard src={this.props.image}/>
            <p>{this.props.name}</p>
            <p>R$ {this.props.price},00</p>
            <button onClick={()=> this.props.toCart(this.props.id)}>Adicionar ao Carrinho</button>
        </div>
        )
    }
}

export default Card;