import "./Input.css"
import React, { useState } from 'react'

export default props => {

    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return(
        <div className="Input">
            <h2>{valor}</h2>
            <input value={ valor } onChange={quandoMudar}/>
            <input value={ valor } readOnly/>
            <input value={ undefined } />
        </div>
    )
    //Aula sobre componentes controlados. Quando utiliza-se o useState() para setar um valor inicial em um input, não será possível alterar o valor desse input na parte gráfica diretamente, pois é necessário utilizar a função setValor. Para isso, é possível usar o atributo onChange no input, recebendo uma função com um evento como parâmetro. Esse evento recebe o que foi digitado pelo usuário e sendo colocado no setValor, é capaz de refletir graficamente a alteração.
}