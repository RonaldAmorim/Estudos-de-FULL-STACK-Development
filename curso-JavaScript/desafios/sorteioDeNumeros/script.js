var numeros = [];
var numDigitados = [];
var numAcertados = []

// aqui é o código para gerar o array com 6 números aleatórios
    for (let i = 0; i < 5; i++) {
        let numeroSorteado = parseInt(Math.random() * 100); // gera o primeiro número

        while (numeroSorteado > 60) { // enquanto o numSorteado for maior que 60
            numeroSorteado = parseInt(Math.random() * 100); // ele vai gerar um novo número e verificar de novo
        }
        numeros.push(numeroSorteado);
    }
    let numSorteados = document.getElementById('numSorteados')
    numSorteados.innerHTML += numeros

// agora vamos pedir ao usuário digiar seis número e guardar em um array para depois comparar com os sorteados
// enviar o número para o array
    numDigitados.push(Number(prompt('Digite o primeiro número'))) // é IMPORTANTE TRANSFORMAR EM NÚMERO
    numDigitados.push(Number(prompt('Digite o segundo número'))) // é IMPORTANTE TRANSFORMAR EM NÚMERO
    numDigitados.push(Number(prompt('Digite o terceiro número'))) // é IMPORTANTE TRANSFORMAR EM NÚMERO
    numDigitados.push(Number(prompt('Digite o quarto número'))) // é IMPORTANTE TRANSFORMAR EM NÚMERO
    numDigitados.push(Number(prompt('Digite o quinto número'))) // é IMPORTANTE TRANSFORMAR EM NÚMERO
    numDigitados.push(Number(prompt('Digite o último número'))) // é IMPORTANTE TRANSFORMAR EM NÚMERO
    let numEscolhidos = document.getElementById('numEscolhidos') // é IMPORTANTE TRANSFORMAR EM NÚMERO
    numEscolhidos.innerHTML += numDigitados

// agora fazer a verificação de cada número digitado com os sorteados, vou usar o INCLUDE
    for (let i = 0; i < numeros.length; i++) {
        if (numeros.includes(numDigitados[i])) {
            numAcertados.push(numDigitados[i]);
        }
    }
    alert(`Número acertados ${numAcertados}`)
    var numMatch = document.getElementById('numMatch')
    numMatch.innerHTML += numAcertados