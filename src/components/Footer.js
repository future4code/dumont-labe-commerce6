import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: rgb(116, 74, 157);
    font-family: 'Staatliches', cursive;
    text-align: center;
    font-size: 16px;
    color: rgb(35, 32, 112);
    padding: 3em;
`
const SocialMedia = styled.ul`
    display:flex;
    list-style-type: none;
    align-items: center;
    padding: 0 1em 3em 1em;
    border: 1px solid black;
    border-left: none;
    border-right: none;
    border-top: none;
`
const ImgSocialMedia = styled.img`
    width: 13%;

`
const Sectionattendance = styled.section`
    margin-top: 3em;
`


export class Footer extends React.Component {
    render() {
        return (<FooterContainer>
        <section>
            <SocialMedia>
                <li>
                    <a href="https://www.instagram.com/" target="_blank">
                        <ImgSocialMedia src="https://www.flaticon.com/svg/static/icons/svg/1383/1383330.svg" alt="Logotipo instagram"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.whatsapp.com/?lang=pt_br" target="_blank">
                        <ImgSocialMedia src="https://www.flaticon.com/svg/static/icons/svg/1383/1383336.svg" alt="Logotipo Whatsapp"/>
                    </a>
                </li>
                <li>
                    <a href="https://facebook.com/" target="_blank">
                        <ImgSocialMedia src="https://www.flaticon.com/svg/static/icons/svg/1383/1383326.svg" alt="Logotipo Facebook"/>
                    </a>
                </li>
            </SocialMedia>
        </section>
        <Sectionattendance>
            <p>Atendimento: atendimento@spacecat.com </p>
            <p>Parcerias: parcerias@spacecat.com</p>
        </Sectionattendance>
        <section>
            <a href="https://github.com">
                <b>Copyright © Aline Vignoli  |  Diana Monteiro  |  Nicole Zolnier 2020</b>
            </a>
        </section>
    </FooterContainer>
        )
    }
}

export default Footer;