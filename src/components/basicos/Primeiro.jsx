import React from 'react'
//É necessário importar o React, sempre com o "R" maiúsculo para funcionar.

export default function Primeiro() {
    const msg = 'Seja bem vindo(a)!'
    //É possível utilizar dados armazenados em variáveis dentro do scopo HTML do componente utilizando { }.
    return (
        <div>
            <h2>Primeiro Componente</h2>
            <p>{ msg }</p>
        </div>
    )
}