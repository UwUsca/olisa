import React from 'react';
import {Link} from "react-router-dom";
import menuLogo from "./imageOlisa.png"
import './styles.css'

function Inicio(){
    return(
        <div>
            <div className="all">
            <div className="imageOlisa"><img src={menuLogo} alt="logo"/></div>
            <div className="olisaStartItems">
                <div>
                    <h1 className="olisaWelcome-1">Seja bem vindo(a) ao</h1>
                    <h1 className="olisaWelcome-2">Olisa</h1>
                </div>
                <div>
                    <h1 className="olisaDesc-Text">A rede social criada para atender suas necessidades!</h1>
                </div>
                <div>
                    <h1 className="olisaBottom-Text">Para iniciar seu cadastro, clique no botão abaixo!</h1>
                    <button className="olisaBottom-Button">Criar uma conta agora!</button>
                    <h1 className="olisaBottom-Text">Já tem uma conta? <Link to="/login" className="olisaTextLink">Entre já!</Link></h1>
                </div>
            </div>
        </div>

        {/* 
            
            !!!!!!!!!!!!!!!!!!!!!!!!!!!

            Necessário Linkar o botão com a página de registro

            !!!!!!!!!!!!!!!!!!!!!!!!!!!

            */}

        <div>
            <Link to="/login">Tela Login</Link>
            <br></br>
            <Link to="/registrar">Tela Recuperação de Senha</Link>
        </div>
            
        </div>
    )
}

export default Inicio;