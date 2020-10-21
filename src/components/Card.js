import React from 'react';
import styled from 'styled-components';


export class Card extends React.Component {
    render() {
        return (<div>
            <img src={this.props.image}/>
            <p>{this.props.name}</p>
            <p>R$ {this.props.price}</p>
            <button>Adicionar ao Carrinho</button>
        </div>
        )
    }
}

export default Card;