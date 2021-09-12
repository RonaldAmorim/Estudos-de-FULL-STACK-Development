var tela = document.getElementById('tela')
var c = tela.getContext('2d')

// cria o retângulo
c.fillStyle = 'green'
c.fillRect(0, 0, 200, 400)

//  cria o círculo
var circulo = function (x, y, raio) {
    c.fillStyle = 'blue'
    c.beginPath()
    c.arc(x, y, raio, 0, 2 * Math.PI)
    c.fill()
}

// volta a tela do retângulo para a posição estabelecida
var limpaTela = function () {
    c.clearRect(0, 0, 600, 400)
}

// desenha o círculo na posição
var x = 1

var desenha = function () {
    limpaTela()
    circulo(x, 100, x/2)
    x = x + 1
}

// chama a função rodar a cada 30 milésimos de segundos
setInterval(desenha, 30)