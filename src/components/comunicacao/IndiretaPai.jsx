import React,  { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

//useState é um hook do React. Trata-se de uma função, que para ser utilizado, usa-se const [variavel, setVariavel] = useState(valor inicial).
//useState() retornar um array de 2 posições, sendo a primeira posição será o valor e a segunda uma função para ser possível alterar esse valor. Por isso a necessidade de utilizar o destructuring: [a. b] = [1, 2].

export default props => {

    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    //Para passar informações do componente filho para o componente pai, é necessário que o componente pai passe uma função para o componente filho através da comnunicação direta que existe entre o componente pai > componente filho (props). Então via props ele passa a função para ser usada no componente filho como uma função callBack
    function fornecerInformacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }


    return (
        <div>
            <div>
                <span>{ nome } </span>
                <span><strong>{ idade }</strong> </span>
                <span>{ nerd ? 'Verdadeiro' : 'Falso' }</span>
            </div>
            <IndiretaFilho quandoClicar={ fornecerInformacoes }></IndiretaFilho>
        </div>
    )
}