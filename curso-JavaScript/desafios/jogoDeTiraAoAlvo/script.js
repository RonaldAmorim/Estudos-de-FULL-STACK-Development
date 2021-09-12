var tela = document.getElementById('tela')
var c = tela.getContext('2d')
var xValor = 100, yValor = 100
var raio = 40

function circulo(x, y, cor, raio) {
    c.beginPath()
    c.fillStyle = cor
    c.arc(x, y, raio, 0, 2 * 3.14)
    c.fill()
}

function limpaTela() {
    c.clearRect(0, 0, 600, 400)
}

// Div que marca a pontuação
let score = 0
let pontos = document.getElementById('pontos')

// Desenha o alvo
function desenhaAlvo() {
    var xX = xSorteado() // variável deverá ser içada
    var yY = ySorteado() // variável deverá ser içada
    limpaTela()
    let raio = 40
    circulo(xX, yY, 'red', raio)
    circulo(xX, yY, 'white', raio - 10)
    circulo(xX, yY, 'white', raio - 20)
    circulo(xX, yY, 'red', raio - 30)
    // alert(`X=${xX} e Y=${yY}`)
    
    // verifica quando cliqua o mouse se vc está dentro de um raio do círculo
    tela.onmousedown = function (evento) {
        let vX = Number(evento.pageX)
        let vY = Number(evento.pageY)
        
        let valorDeX = document.getElementById('valorDeX')
        valorDeX.innerHTML = `xMouse=${vX} e xAlvo${xX}`
        
        let valorDeY = document.getElementById('valorDeY')
        valorDeY.innerHTML = `yMouse=${vY} e yAlvo${yY}`
        
        
        if ((vX < (xX + 40) && vX > (xX - 40)) && (vY < (yY + 40) && vY > (yY - 40))) {
            alert('acertou')
            score = score + 1
            pontos.innerHTML = `Pontos: ${score}`
        } else {
            alert('errou')
        }
    }
}

function xSorteado() {
    let numAleatorioX = Number(parseInt(Math.random() * 1000))
    while (numAleatorioX > 600) {
        numAleatorioX = Number(parseInt(Math.random() * 1000))
    }
    return numAleatorioX
}

function ySorteado() {
    let numAleatorioY = parseInt(Math.random() * 1000)
    while (numAleatorioY > 400) {
        numAleatorioY = parseInt(Math.random() * 1000)
    }
    return numAleatorioY
}

setInterval(desenhaAlvo, 5000)