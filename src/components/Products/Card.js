import React from 'react';
import styled from 'styled-components';

const ImageCard = styled.img`
    width: 75%;
    border: 1px outset white;
    margin-bottom: 15px;
`
const DivCard = styled.div`
    margin-bottom: 50px;
    text-align: center; 
    font-family: 'Staatliches', cursive;
    &:hover {
    transition: 0.1s all ease-out;
    color: rgb(65, 28, 126);
    margin: 0.5em;
    cursor: pointer;
    }

    @media (min-device-width : 320px) and (max-device-width : 420px)  {
        margin-bottom: 30px;
        font-size: 1.3em;
    }
    
`
const Button = styled.button`
    margin: 2em;
    padding: 6px 20px;
    border-radius: 5px;
    background-color: #a28cd8;
    font-family: 'Staatliches', cursive;
    font-size: 17px;
    &:hover {
    background-color: rgb(65, 28, 126);
    cursor: pointer;
    }

    @media (min-device-width : 320px) and (max-device-width : 420px)  {
        padding: 10px 30px;
        margin: 20px 0 50px 0;
        font-size: 20px;
    }
`


export class Card extends React.Component {
    render() {
        return (<DivCard>
            <ImageCard src={this.props.image}/>
            <p>{this.props.name}</p>
            <p>R$ {this.props.price},00</p>
            <Button onClick={()=> this.props.toCart(this.props.id, this.props.name, this.props.price)}>Eu quero!</Button>
        </DivCard>
        )
    }
}

export default Card;