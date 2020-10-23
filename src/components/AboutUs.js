import React from 'react';
import styled from 'styled-components';
import ImageAbout from "../img/gato.jpg"

const AboutUsContainer = styled.div`
    display: flex;
    margin: 3em 6em;
`
const ImageAboutUs = styled.img`
    width: 25%;
`
const TextAbout = styled.p`
    display:flex;
    flex-wrap: wrap;
    margin: 3em;
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