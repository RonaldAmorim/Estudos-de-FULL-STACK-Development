// CONVERSÃO DE GRAUS CELSIUS PARA FAHRENHEIT E VICE-VERSA

function converter(string, valor) {
    switch (string) {
        case 'Celsius':
            let f = (valor - 32) * 5 / 9;
            return console.log(`${valor}° Celsius = ${f}° em Fahrenheit`);
        case 'Fahrenheit':
            let c = (valor * 9 / 5) + 32;
            return console.log(`${valor}° Fahrenheit = ${c}° em Celsius`);
        default:
            return console.log(`"${string}" esta não é uma opção válida: digite apenas "Celsius" ou "Fahrenheit"`)
    }
}
converter('aa', 32)
