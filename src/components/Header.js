import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.svg'
import shoppingBag from '../img/shopping-bag.svg'

const DivHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: blue;
`
const Logo = styled.img`
    width: 10%;
`
const ShoppingBag = styled.img`
    width: 3%;
`

export class Header extends React.Component {

    render() {
        return (
            <DivHeader>
                <Logo src={logo} />
                <h3>Quem somos</h3>
                <h3>Onde estamos</h3>
                <ShoppingBag src={shoppingBag} />
            </DivHeader>
        )
    }
}

export default Header;