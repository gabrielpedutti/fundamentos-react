import "./Contador.css"
import React, { Component } from 'react'

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

    setPasso = (evento) => {
        this.setState({
            passo: +evento.target.value
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input id="passoInput" type="number" 
                    value={this.state.passo} onChange={this.setPasso}/>
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>

            </div>
        )
    }
}