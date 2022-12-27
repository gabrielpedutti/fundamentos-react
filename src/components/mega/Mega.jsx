import './Mega.css'
import React, { useState } from 'react'
import Bola from "./Bola"

export default props => {

    function gerarNumeros(qtde) {
        let numerosSorteados = []
        for (let i = 0; i < qtde; i++) {
            numerosSorteados.push(sortear(1, 60, numerosSorteados))  
        }
        return numerosSorteados.sort((n1, n2) => n1 - n2)
    }
    
    function sortear(min, max, array) {
        const sorteado = parseInt(Math.random() * (max - min + 1) + min)
        return array.includes(sorteado) ? sortear(min, max, array) : sorteado
    }

    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = Array(qtde).fill(0)
    const [numeros, setNumeros] = useState(numerosIniciais)
    
    return (
        <div className='Mega'>
            <h2>Mega</h2>
            <div>
                {numeros.map((num) => {
                    return <Bola numero={num}></Bola>
                })}
            </div>
            <div>
                <label>Qtde de Números</label>
                <input min='6' max='15' type="number" value={qtde}
                onChange={e => setQtde(+e.target.value)}/>
            </div>
            <button onClick={e => setNumeros(gerarNumeros(qtde))}>Gerar Números</button>
        </div>
    )
}