import React from "react";
import Header from "../../components/header/header";
import './styles.css';
import Footer from "../../components/footer";

function Contato(){
        return(
    
    <>
    <Header />

    <div className="box1 c1">
        <div className="box2 c1">
            <div className="contact-box c1">
                <h1></h1>
                    
                        
            </div>
            <form className="forms">
                <input type="text" name="nome" id="nome" placeholder="Nome Completo"/>
                <input type="email" name="email" id="email" placeholder="Email"/>
                <input type="tel" name="tel" id="tel" placeholder="Telefone"/>
                <textarea nome="mensagem" id="mensagem" placeholder="Digite sua mensagem"></textarea>
                <button className="button2">Enviar</button>
            </form>
        </div>
    </div>

    <Footer />

</>
)
        }
export default Contato;