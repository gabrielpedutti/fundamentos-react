import React from 'react'
import produtos from '../../data/produtos'
import './TabelaProdutos.css'

export default props => {

    const produtosTabela = produtos.map(produto => {
        return (
            <tr key={ produto.id }>
                <td>{ produto.id }</td>
                <td>{ produto.nomeProduto }</td>
                <td>R$ { produto.valor.toFixed(2).replace('.', ',') }</td>
            </tr>
        )
    })

    return (
        <div className="TabelaProdutos">
            <h2>Tabela de Produtos:</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome do Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    { produtosTabela }
                </tbody>
            </table>
        </div>
    )
}