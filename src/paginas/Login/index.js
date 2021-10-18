import React from 'react';
import {Link} from "react-router-dom";
import loginLogo from "./imageOlisa.png"
import './styles.css'

function Login(){
    return(
        <div>
            <div className="all">
                <div className="imageOlisa"><img src={loginLogo}></img></div>
                <div className="olisaLoginItems">
                    <div>
                        <div className="olisaTextTop">Para acessar sua conta, preencha os campos abaixo!</div>
                        <div>
                            <table className="olisaLoginArea">
                                <tr>
                                    <td>
                                        *E-mail<br></br>
                                        <input id="loginEmail" class="olisaInput" placeholder="Ex: joaosilva@gmail.com" type="email"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        *Senha<br></br>
                                        <input id="loginSenha" class="olisaInput" placeholder="Insira sua senha" type="password"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a class="olisaTextBottom">Esqueceu sua senha? <Link to="/recuperarsenha" className="olisaTextLink">Clique Aqui!</Link><br></br></a>
                                        <button class="olisaButton">Entrar</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            
            <br></br>
            <Link to="/">Inicio</Link>
        </div>
    )
}

export default Login;