import "./Contador.css"
import React, { Component } from 'react'

import Display from "./Display"
import Botoes from "./Botoes"
import PassoForm from "./PassoForm"



export default class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    }

    // constructor(props) {
    //     super(props)

    //     this.inc = this.inc.bind(this)
    // }
    // O this de this.inc não está apontando para o objeto atual a partir do onClick. Uma das formas de resolver isso seria usando o trecho comentado acima.
    //Outra forma de corrigir esse problema é transformar a função que estava como inc() em uma arrow function como está defenido abaixo:

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    //O "This" dentro de uma arrow function sempre estará relacionado ao contexto de onde a função foi escrita, como foi escrita dentro de uma classe, esse this sempre estará apontando para ela.

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}></Display>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}></PassoForm>
                <Botoes setInc={this.inc} setDec={this.dec}></Botoes>

            </div>
        )
    }
}