// Vinculações da página com o javaScript
var num = document.querySelector('input#fnum')
var lista = document.querySelector('select#flista')
var res = document.querySelector('div#res')

// Declaração de forma global
var valores = [] // vetor que vamos usar para analisar os dados

// Função para auxiliar o 'if' da função adicionar
function isNumero(n) {
    if (n >= 1 && n <= 100) {
        return true
    } else {
        return false
    }
}

// Função para auxiliar o 'if' da função adicionar
function numEstaNaLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

// Função para o botão adicionar da página index.html
function adicionar() {
    if (isNumero(num.value) && !numEstaNaLista(num.value, valores)) {//detalhe para o '!' da validação, pois se ele não estiver na lista então vai executar este 'if'
        valores.push(Number(num.value)) // adicionou no vetor
        var item = document.createElement('option') // vai criar uma tag 'option'
        item.text = `Valor ${num.value} adicionado` // não precisa usar 'Number' pois ele não vai precisar converter pois ele vai ficar como 'string' mesmo
        lista.appendChild(item) // e para adicionar na lista, tem que botar na lista   
        res.innerHTML = ''     
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for (let posicao in valores) { // laço de percurso que vai varrer o vetor inteiro
            if (valores[posicao] > maior) maior = valores[posicao]
            if (valores[posicao] < menor) menor = valores[posicao]        
            soma += valores[posicao] // aproveitando o laço de percurso para fazer esse cálculo também
        }
        
        // Calculando a média
        let media = 0
        media = soma / valores.length

        //Colocando os dados na div#res
        res.innerHTML = ''
        res.innerHTML += `<p>Temos a lista: ${valores}</p>`
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média é ${media}.</p>`

        num.focus()        
    }
}