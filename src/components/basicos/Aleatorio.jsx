import React from 'react'

export default function aleatorio(props) {
    const { min, max } = props
    //Destructuring(desestruturação) no JavaScript, serve para pegar informaçõs contidas em um objeto de forma mais "resumida".
    //Similar acima seriam os comandos:
    //const min = props.min
    //const max = props.max
    const aleatorio = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min
    //Método para gerar número aleatório entre 2 números.
    //Math.random (gera um número entre 0 e 1). Multiplica pelo valor do intervalo que adquire com a expressão: 
    //(max - min + 1) + min
    return (
        <div>
            <h2>Número Aleatório: </h2>
            <p>
                <strong>
                    Valor Mínimo:
                </strong> { min }
            </p>
            <p>
                <strong>
                    Valor Máximo: 
                </strong> { max }
            </p>
            <p>
                <strong>
                    Valor Escolhido: 
                </strong> { aleatorio }
            </p>
        </div>
    )
}