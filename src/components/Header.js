import React from "react";
import styled from "styled-components";
import logo from "../img/logo.svg";
import shoppingBag from "../img/shopping-bag.png";

const DivHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: rgb(116, 74, 157);
  color: #eb89a6;
  font-family: "Staatliches", cursive;
  font-size: 1.5em;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    flex-direction: column;
    font-size: 2em;
  }
`;

const DivEnd = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    flex-direction: column;
  }
`;

const DivStart = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
  align-items: center;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    flex-direction: column;
    margin-bottom: 30px;
  }
`;

const LinkHeader = styled.h3`
  padding: 0 2em;
  font-weight: 100;
  &:hover {
    transition: 0.5s all ease-out;
    color: rgb(65, 28, 126);
    cursor: pointer;
  }
`;

const Logo = styled.img`
  width: 12vw;
  margin: 10px 60px 0 30px;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    width: 70vw;
    margin: 30px 60px 0 30px;
  }
`;

const ShoppingBag = styled.img`
  width: 4vw;
  margin: 0 2em 0 30px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    width: 14vw;
    margin: 40px 0;
  }
`;

const Search = styled.img`
  width: 2vw;
  margin-left: 5px;
  &:hover {
    cursor: pointer;
  }
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    width: 8vw;
    margin-top: 10px;
  }
`;

const Input = styled.input`
  width: 15em;
  border: 2px solid rgb(35, 32, 112);
  border-radius: 4px;
  font-family: "Staatliches", cursive;
  font-size: 17px;
  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

const Link = styled.a`
  color: #eb89a6;
`;

export class Header extends React.Component {
  state = {
    searchIsVisible: false,
  };

  // função de mostrar e esconder o input pesquisa
  handleSearchVisibility = () => {
    this.setState({ searchIsVisible: !this.state.searchIsVisible });
  };

  render() {
    return (
      <DivHeader>
        <DivStart>
          <Logo src={logo} />
          <LinkHeader onClick={this.props.aboutUsVisibility}>
            Quem somos
          </LinkHeader>
          <Link
            href="https://www.google.com.br/maps/place/NASA+Mission+Control+Center/@29.5581038,-95.0915224,17z/data=!3m1!4b1!4m5!3m4!1s0x86409da671292593:0xf684f098a7237a30!8m2!3d29.5580992!4d-95.0893337?hl=pt-BR&authuser=0"
            target="_blank"
          >
            <LinkHeader>Onde estamos</LinkHeader>
          </Link>
        </DivStart>
        <DivEnd>
          {this.state.searchIsVisible && (
            <Input
              onChange={this.props.onChangeName}
            />
          )}
          <Search
            onClick={this.handleSearchVisibility}
            src="https://image.flaticon.com/icons/png/512/57/57477.png"
          />
          <ShoppingBag onClick={this.props.clickFunction} src={shoppingBag} />
        </DivEnd>
      </DivHeader>
    );
  }
}

export default Header;
