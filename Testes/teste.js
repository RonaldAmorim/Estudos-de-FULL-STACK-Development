
// aqui é o código para gerar o array com 6 números aleatórios
var numSorteados = document.getElementById('numSorteados')
var numeros = [];
for (let i = 0; i < 5; i++) {
    let numeroSorteado = parseInt(Math.random() * 100); // gera o primeiro número
    
    while(numeroSorteado > 60) { // enquanto o numSorteado for maior que 60
        numeroSorteado = parseInt(Math.random() * 100); // ele vai gerar um novo número e verificar de novo
    }
    numeros.push(numeroSorteado);
}
// numSorteados.innerHTML += numeros;
console.log(numeros)

/* 

// agora vamos pedir ao usuário digiar seis número e guardar em um array para depois comparar com os sorteados
var numEscolhidos = document.getElementById('numEscolhidos')
var numDigitados = []

numDigitados.push(prompt('Digite o primeiro número'))
numDigitados.push(prompt('Digite o segundo número'))
numDigitados.push(prompt('Digite o terceiro número'))
numDigitados.push(prompt('Digite o quarto número'))
numDigitados.push(prompt('Digite o quinto número'))
numDigitados.push(prompt('Digite o último número'))
numEscolhidos.innerHTML = numDigitados


// agora fazer a verificação de cada número digitado com os sorteados, vou usar o INCLUDE
var numAcertados = document.getElementById('numAcertados')
for (let i = 0; i < numDigitados.length; i++) {
    if (numeros.includes(numDigitados[i] = true)) {
        numAcertados.innerHTML += numDigitados[i]
    }
} */