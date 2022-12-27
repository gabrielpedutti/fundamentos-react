import './Card.css'
//Arquivo CSS exclusivo do componente
import React from 'react'

export default props => {
    //Utilizando função anônima
    
    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00',
        //Definindo a cor do estilo CSS por JavaScript, a partir da cor atribuída no parâmetro do Componente ou (||) utilizando uma cor padrão caso não seja definido uma cor no paramêtro.
    }
    
    //É possível usar o style diretamente:
    //<div style={{
    //backgroundColor: props.color
    //}}
    //Porém deve ser colocado entre chaves 2x

    return (
        <div className="Card" style={ cardStyle }>
            <div className="Title">
                { props.titulo }
            </div>
            <div className="Content">
                { props.children }
            </div>
        </div>
    )
    //Para que um componente seja rodado dentro de outro componente, é necessário acessar as propriedades do componente filho. Pra isso utiliza-se props.children, que acessar todas as propriedades filhas.
}