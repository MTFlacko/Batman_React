import React from "react";
import './styles.css';
import Logo from '../../assets/logo.png';

function Footer() {
    return(
        
            <footer className="footer">
                <img id='Logo' src={Logo} alt="Logo da sua aplicação" />
                <span className="footer-text">Todos os direitos reservados ©</span>
                <span className="footer-text">Desenvolvido por: Mateus Franco</span>
            </footer>
        );
    }

export default Footer;