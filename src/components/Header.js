import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.svg';
import shoppingBag from '../img/shopping-bag.svg';


const DivHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(46, 61, 114, 0.9);
    color: #eb89a6;
    font-family: Georgia, 'Times New Roman', Times, serif;
`;
const LinkHeader = styled.h3`
    margin-left: 8em;
`;

const Logo = styled.img`
    width: 10%;
    margin: 10px 30px 0 30px;
`;
const ShoppingBag = styled.img`
    width: 3%;
    margin:0 2em 0 30px;

`;
const Lupa = styled.img`
    width: 2%;
`;

const Input = styled.input`
    margin-left: 10em;
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
                <Logo src={logo} />
                <LinkHeader onClick={this.props.aboutUsVisibility}>Quem somos</LinkHeader>
                <LinkHeader>Onde estamos</LinkHeader>
                {this.state.searchIsVisible && <Input 
                value={this.props.inputSearchProduct}
                onChange={this.props.nameFilter}/>}
                
                <Lupa onClick={this.handleSearchVisibility} src="https://image.flaticon.com/icons/png/512/57/57477.png"></Lupa>
                <ShoppingBag  onClick={this.props.clickFunction} src={shoppingBag} />
            </DivHeader>
        )
    }
}

export default Header;