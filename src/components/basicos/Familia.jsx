import React, { cloneElement } from 'react'

export default props => {
    return (
        <div>
            {
            //React.cloneElement(props.children, {...props})
            props.children.map((child, i) => {
                return cloneElement(child,  { ...props, key: i })
            })
            }
        </div>
    )
}

//{/* Forma 1: Pegar o sobrenome diretamente (explícita) pela propriedade pai com o props.sobrenome */}
//<FamiliaMembro nome="Pedro" sobrenome={ props.sobrenome }></FamiliaMembro>
//{/* Forma 2: Utilizando o operador spread {...}, dessa forma passa todos os atributos recebidos para o componente filho */}
//<FamiliaMembro nome="Ana" {...props} ></FamiliaMembro>
//{/* Forma 3: Passar o atributo sobrenome diretamente ao componente */}
//<FamiliaMembro nome="Gustavo" sobrenome="Silva"></FamiliaMembro>