let prateleira =
    [
        {
            categoria: 'Fantasia',
            livros: [
                { titulo: 'A Camara Secreta', autor: 'JK Rolling' },
                { titulo: 'As Duas Torres', autor: 'JRR Tolkien' }
            ]
        },
        {
            categoria: 'Romance',
            livros: [
                { titulo: 'Your Song', autor: 'Lauren Muller' },
                { titulo: 'Notebook', autor: 'JK Rolling' }
            ]
        },
        {
            categoria: 'BangBang',
            livros: [
                { titulo: 'Pega Pega no Oeste', autor: 'Chang Li' },
                { titulo: 'Faroeste do Fogo', autor: 'Chang Li' }
            ]
        },
    ];

console.log(`### As minhas categorias são:`)
// Acessando informações do array
for (let i of prateleira) {
    console.log("   ", i.categoria)
}

// Imprimindo todos os livros de cada categoria
for (let i of prateleira) { // percorre o 1º array da variável prateleira
    for (let ii of i.livros) { // percorre o 2º array que foi atribuito ao i anteriormente
        console.log('   ', ii.titulo)
    }
}

function contarAutores() {
    let autores = [];
    for (let i of prateleira) {
        for (ii of i.livros) {
            if (autores.indexOf(ii.autor) == -1) {
                autores.push(ii.autor);
            }
        }
    }
    console.log('O total de autores é: ', autores.length)
    console.log(autores)
}
contarAutores()

// Livros do autor JK ROLLING
function livrosDeAutor(autor) {
    let livros = [];

    for (let i of prateleira) {
        for (let ii of i.livros) {
            if (ii.autor === autor) {
                livros.push(ii.titulo);
            }
        }
    }
    console.log(`Livros do autor ${autor}: ${livros.join(', ')}`) // sem o join a JS transforma um array em uma única string então fica tudo junto, usando o JOIN vc pode transformas cada elemento do array em uma string separada, e então vc pode colocar o separador que quiser.
}
livrosDeAutor('JK Rolling')