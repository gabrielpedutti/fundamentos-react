function gerarNumeros(qtde) {
    let numerosSorteados = []
    for (let i = 0; i < qtde; i++) {
        numerosSorteados.push(sortear(1, 60, numerosSorteados))  
    }
    return numerosSorteados.sort((n1, n2) => n1 - n2)
}

function sortear(min, max, array) {
    const sorteado = parseInt(Math.random() * (max - min + 1) + min)
    return array.includes(sorteado) ? sortear(min, max, array) : sorteado
}

console.log(gerarNumeros(6))