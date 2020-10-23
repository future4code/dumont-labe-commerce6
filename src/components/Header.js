import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.svg';
import shoppingBag from '../img/shopping-bag.png';


const DivHeader = styled.div`
    display: flex;
    align-items: center;
    background-color: rgb(116, 74, 157);
    color: #eb89a6;
    font-family: 'Staatliches', cursive;
    font-size: 1.5em;
`;

const DivEnd = styled.div`
    display: flex;
    align-items:center;
    justify-content: flex-end;
`

const DivStart = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: flex-start;
    align-items:center;
`

const LinkHeader = styled.h3`
    margin-left: 4em;
    font-weight: 100;
`;

const Logo = styled.img`
    width: 12vw;
    margin: 10px 0 0 30px;
`;
const ShoppingBag = styled.img`
    width: 4vw;
    margin:0 2em 0 30px;

`;
const Lupa = styled.img`
    width: 2vw;
    margin-left: 5px;
`;

const Input = styled.input`
    height: 1.5em;
    width: 20em;
`


export class Header extends React.Component {

    state = {
        searchIsVisible: false
    }

    // função de mostrar e esconder o input pesquisa
    handleSearchVisibility = () => {
        this.setState({ searchIsVisible: !this.state.searchIsVisible });
    };

    render() {
        return (
            <DivHeader>
                <DivStart>   
                <Logo src={logo} />
                <LinkHeader onClick={this.props.aboutUsVisibility}>Quem somos</LinkHeader>
                <a href="https://www.google.com.br/maps/place/NASA+Mission+Control+Center/@29.5581038,-95.0915224,17z/data=!3m1!4b1!4m5!3m4!1s0x86409da671292593:0xf684f098a7237a30!8m2!3d29.5580992!4d-95.0893337?hl=pt-BR&authuser=0" target="_blank"><LinkHeader>Onde estamos</LinkHeader></a>                          
                </DivStart>
                <DivEnd>
                {this.state.searchIsVisible && <Input 
                value={this.props.inputSearchProduct}
                onChange={this.props.nameFilter}/>}
                <Lupa onClick={this.handleSearchVisibility} src="https://image.flaticon.com/icons/png/512/57/57477.png"></Lupa>
                <ShoppingBag  onClick={this.props.clickFunction} src={shoppingBag} />
                </DivEnd> 
            </DivHeader>
        )
    }
}

export default Header;