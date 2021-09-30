import React, { Component } from 'react';
import firebase from './firebase';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      usuario: []
    }

    this.gravar = this.gravar.bind(this);
    this.listar = this.listar.bind(this);

  }

  gravar(){
    firebase.ref('usuario').push({nome:"teilor", sobrenome:"miotto"})
  .then(() => {
    console.log("cadastrado com sucesso");
  })
  .catch((erro) => {
    console.log("erro: " + erro);
  });
  }

  listar(){
    firebase.ref('usuario').on("value", (snapshot) => {
      let usuario = [];
      snapshot.forEach(function(item){
        var key = item.key;
        var valor = item.val();
        usuario.push({id: key, nome: valor.nome, sobrenome: valor.sobrenome});
      });
      console.log(usuario);
      let state = this.state;
      state.usuario = usuario;
      this.setState(state);
    });
  }

  render(){
    return(
      <div>

        <button onClick={this.gravar} >Gravar</button>
        <button onClick={this.listar} >Listar</button>

        {
          this.state.usuario.map((item) => {
            return (
              <div>
                {item.nome} <br/>
              </div>
            )
          }

          )
        }

      </div>
    )
  }
}

export default App;
