var tela = document.getElementById('tela')
var c = tela.getContext('2d')

function desenha(cor, x) {
    c.fillStyle = cor
    c.fillRect(x, x, x, x)
}

desenha('blue', 100)