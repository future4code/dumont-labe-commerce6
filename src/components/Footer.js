import React from 'react';
import styled from 'styled-components';
import Whatsapp from "../img/whatsapp.svg"
import Facebook from "../img/facebook.svg"
import Instagram from "../img/instagram.svg"

const FooterContainer = styled.footer`
    background-color: rgb(116, 74, 157, 0.7);
    font-family: 'Staatliches', cursive;
    text-align: center;
    font-size: 16px;
    color: rgb(35, 32, 113);
    padding: 3em;
`;

const SocialMedia = styled.ul`
    display:flex;
    list-style-type: none;
    align-items: center;
    padding: 1em 1em 3em 1em;
    border: 1px solid black;
    border-left: none;
    border-right: none;
    border-top: none;
`;

const ImgSocialMedia = styled.img`
    width: 13%;
    @media (min-device-width : 320px) and (max-device-width : 420px)  {
        width: 12vw;  
        margin: 10px 2em 15px 1em;
    }
`;

const SectionAttendance = styled.section`
    margin-top: 3em;
`;

const Assignature = styled.b`
    color: rgb(35, 32, 113);
    @media (min-device-width : 320px) and (max-device-width : 420px)  {
        font-size: 20px;
    }
`;

export class Footer extends React.Component {
    render() {
        return (<FooterContainer>
        <section>
            <SocialMedia>
                <li>
                    <a href="https://www.instagram.com/" target="_blank">
                        <ImgSocialMedia src={Instagram} alt="Logotipo instagram"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.whatsapp.com/?lang=pt_br" target="_blank">
                        <ImgSocialMedia src={Whatsapp} alt="Logotipo Whatsapp"/>
                    </a>
                </li>
                <li>
                    <a href="https://facebook.com/" target="_blank">
                        <ImgSocialMedia src={Facebook} alt="Logotipo Facebook"/>
                    </a>
                </li>
            </SocialMedia>
        </section>
        <SectionAttendance>
            <p>Atendimento: atendimento@spacecat.com </p>
            <p>Parcerias: parcerias@spacecat.com</p>
        </SectionAttendance>
        <section>
            <Assignature href="https://github.com" target="_blank">
                <b>Copyright © <a href="https://github.com/nyhvignoli" target="_blank">Aline Vignoli</a>  |  <a href="https://github.com/DiaMont30" target="_blank">Diana Monteiro</a>  |  <a href="https://github.com/nizolnier" target="_blank">Nicole Zolnier</a> 2020</b>
            </Assignature>
        </section>
    </FooterContainer>
        )
    }
}

export default Footer;