import React from "react";
import './header.css';
import Logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
function Header(){
  

    return(
        <header>
            <img id='Logo' src={Logo} />
       
            <nav>
                <ul>
                    <Link style={{textDecoration: 'none'}} to='/'>
                    <li>Home</li>
                    </Link>
                    
                    <Link style={{textDecoration: 'none'}} to='/Fotos'>
                    <li>Fotos</li>

                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/Contato'>
                    <li>Contatos</li>
                </Link>
                <Link style={{textDecoration: 'none'}} to='/Comentarios'>
                <li>Comentários</li>
                </Link>
                    
                </ul>
            </nav>
       
            </header>
    )
}

export default Header;