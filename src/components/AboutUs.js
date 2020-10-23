import React from 'react';
import styled from 'styled-components';
import ImageAbout from "../img/gato.jpg"

const AboutUsContainer = styled.div`
    display: flex;
    margin: 3em 7em;
    align-items:center;
    justify-content: center;
    font-family: 'Staatliches', cursive;
    font-size: 1.2em;
    background-color: rgb(116, 74, 157, 0.5);
`
const ImageAboutUs = styled.img`
    width: 25%;
`
const TextAbout = styled.p`
    display:flex;
    flex-wrap: wrap;
    margin: 0 6em;
`

export class AboutUs extends React.Component {
    render() {
        return (
        <AboutUsContainer>
            <ImageAboutUs src={ImageAbout}/>
            <TextAbout>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.."</TextAbout>
        </AboutUsContainer>
        )
    }
}

export default AboutUs;