import React from "react";
import styled from "styled-components";
import ImageAbout from "../img/gato.jpg";

const AboutUsContainer = styled.div`
  display: flex;
  margin: 3em 7em;
  align-items: center;
  justify-content: center;
  font-family: "Staatliches", cursive;
  font-size: 1.1em;
  background-color: rgb(116, 74, 157, 0.5);
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    margin: 0;
    flex-direction: column;
    padding: 30px 0;
    font-size: 1.3em;
  }
`;

const ImageAboutUs = styled.img`
  width: 25%;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    width: 80%;
  }
`;

const TextAbout = styled.p`
  display: flex;
  flex-wrap: wrap;
  margin: 0 6em;
  color: rgb(35, 32, 113);
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    margin: 30px 40px 0 40px;
    text-align: justify;
  }
`;

export class AboutUs extends React.Component {
  render() {
    return (
      <AboutUsContainer>
        <ImageAboutUs src={ImageAbout} />
        <TextAbout>
          <b>
            <big>Olá, seja bem vindo a SPACECAT!</big>
          </b>
          <br />
          Aqui você encontra a fusão da fofura do mundo felino com a grande
          viagem que é o universo. Nossas camisas, com estampas exclusivas, são
          produzidas com os pelos doados por uma espécie única de gatinhos
          alienígenas que vieram da Catláxia para dominar nosso planeta através
          da fofura e do deboche felino! Os seus pelos extremamente macios nos
          permitiram produzir um material único que transmite a sensação do
          calor e afeto felino! Venha fazer parte dessa dominação mundial, vista
          SPACECAT!
        </TextAbout>
      </AboutUsContainer>
    );
  }
}

export default AboutUs;
