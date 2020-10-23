import React from 'react';
import styled from 'styled-components';



export class Footer extends React.Component {
    render() {
        return (<footer>
        <section>
            <ul>
                <li>
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src="img/instagram.png" alt="Logotipo instagram"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.whatsapp.com/?lang=pt_br" target="_blank">
                        <img src="img/007-whatsapp.png" alt="Logotipo Whatsapp"/>
                    </a>
                </li>
                <li>
                    <a href="https://facebook.com/" target="_blank">
                        <img src="img/facebook.png" alt="Logotipo Facebook"/>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/login?lang=pt" target="_blank">
                        <img src="img/twitter.png" alt="Logotipo Twitter"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/" target="_blak">
                        <img src="img/linkedin.png" alt="Logotipo Linkedin"/>
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <p>Atendimento: atendimento@spacecat.com </p>
            <p>Parcerias: parcerias@spacecat.com</p>
        </section>
        <section>
            <a href="https://github.com">
                <small><b>Copyright © Aline Vignoli & Diana Monteiro & Nicole Zolnier 2020</b></small>
            </a>
        </section>
    </footer>
        )
    }
}

export default Footer;