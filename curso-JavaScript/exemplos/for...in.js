let pessoa = {
    name: 'John',
    age: 30,
    peso: 88.6
} // objeto declarado
for (const propriedade in pessoa) {
    // imprime cada propriedade do array
    console.log(propriedade);
}
console.log(`------------------`)

for (const propriedade in pessoa) {
    console.log(pessoa['name']) // percorreu três vezes o array por que é quantidade de propriedades que tem nele e imprimeiu o 'name' cada vezes que percorreu.
}
console.log(`------------------`)

for (const propriedade in pessoa) {
    console.log(pessoa.name) // outra forma de acessar a propriedade name
}
console.log(`------------------`)

for (const propriedade in pessoa) {
    // imprime cada valor que está dentra da propriedade
    console.log(pessoa[propriedade])
}