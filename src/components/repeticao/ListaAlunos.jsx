import React from 'react'
import alunos from '../../data/alunos'
//Acima está importando um arquivo data com um array de alunos.

export default props => {
    //Trabalhar com lista no React, é possível criando 1 constante pra cada item da lista como o exemplo a baixo, acessando cada posição do array:
    // const li1 = (
    // <li>
    //     {alunos[0].id}) {alunos[0].nome} -> {alunos[0].nota} 
    // </li>
    // )

    //Um jeito melhor é gerar outro array através do map, percorrendo cada aluno do array alunos e transformando nos dados em lista:

    const alunosLi = alunos.map(aluno => {
        //Utiliza-se o atributo key em arrays, pois o React solicita essa informação para um acesso mais rápido à um elemento do array. A aplicação irá funcionar caso não tenha a key informada, mas terá um erro em console.
        return <li key={aluno.id}>
        {aluno.id}) {aluno.nome} -> {aluno.nota} 
    </li>
    })

    return (
        <div>
            <ul style={{listStyle: "none"}}>
                {alunosLi}
            </ul>
        </div>
    )
}