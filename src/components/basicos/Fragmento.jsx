import React from 'react'

export default function Fragmento(props) {
    return (
        //Os elementos JSX precisam estar envolvidos em uma tag, pode ser usado qualquer uma, div, span, etc. Mas será criado uma tag no html final. Caso não queira é possível utilizar a tag de fragmento:
        <>
        <h2>Fragmento</h2>
        <p>Cuidado com esse erro!</p>
        </>
        //É possível usar a tag <React.Fragment> no lugar de apenas <></>. Utiliza-se essa outra forma quano há necessidade de colocar parâmetros no componente.
    )
}