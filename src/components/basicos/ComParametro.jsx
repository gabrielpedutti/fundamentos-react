import React from 'react'

export default function ComParametro(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    //Os parâmetros do componente são SOMENTE LEITURA, e são capazes de utilizar informações setadas nas propriedades para montar o componente:
    return (
        <div>
            <h2>{ props.titulo }</h2>
            <p>
                <strong>{ props.aluno }</strong> tem nota <strong>{ props.nota }</strong> e está <strong> { status }</strong>!
                </p>
        </div>
    )
}