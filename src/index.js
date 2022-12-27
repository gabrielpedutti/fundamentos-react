import './index.css'
import ReactDOM from 'react-dom/client'
import React from 'react'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
//Acima é o elemento da div root do index.html em que o ReactDOM.render irá inserir o código dele.


root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
    )