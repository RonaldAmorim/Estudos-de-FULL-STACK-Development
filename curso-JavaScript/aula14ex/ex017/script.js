function tabuada() {
    let num = document.getElementById('txtn');
    let tab = document.getElementById('seltab');
    if (num.value.length ==0) {
        alert('Digite um número');
    } else{
        let n = Number(num.value)
        // Limpando a lista para a nova tabuada ao clicar
        tab.innerHTML = ''
        // Calculando a tabuada
        var c = 1
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${c * n}` // o 'num' é um texto e o 'n' é o 'num' convertido
            tab.appendChild(item)
            c++
        }
    }

}