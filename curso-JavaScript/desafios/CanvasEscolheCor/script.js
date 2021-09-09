var tela = document.getElementById('tela')
var c = tela.getContext('2d')

c.fillStyle = 'lightblue'
c.fillRect(0, 0, 600, 400)

var corEscolhida
var botaoVermelho = function () {
    corEscolhida = 'red'
}
var botaoBranco = function () {
    corEscolhida = 'white'
}

aaa.innerHTML = `Cor escolhida foi: ${corEscolhida}`

tela.onmousemove = function(evento) {
    var aaa = document.getElementById('aaa')
    let valorDeX = evento.pageX
    let valorDeY = evento.pageY
    
    // coloca na div#aaa os valores de onde o mouse está
    aaa.innerHTML = `X=${valorDeX} e Y=${valorDeY}`

    // onde o mouse passar ele coloca um BOLA VERMELHA
    c.fillStyle = corEscolhida
    c.beginPath()
    c.arc(valorDeX,valorDeY,10,0,2*3.14)
    c.fill()
}