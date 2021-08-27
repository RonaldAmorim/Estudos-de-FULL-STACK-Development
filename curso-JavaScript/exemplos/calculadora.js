function calculate(number1, operator, number2) {
    switch (operator) {
        case '+':
            resultado = number1 + number2; // não precisa declarar essa variável, inclusive eu tentei declara-las como 'let' e "deu ruim"
            break;
        case '-':
            resultado = number1 - number2;
            break;
        case '*':
            resultado = number1 * number2;
            break;
        case '/':
            // aqui ainda é possível colocar um if para fazer a verificação da divisão por 0 que não é possível        
            resultado = number1 / number2;
            break;
        default:
            resultado = console.log(`Ou ${number1} ou ${number2} não é um número`); // importante colocar esse console.logo atribuída ao resultado tambem para que possa ser retornado como as outras.
            break;
    }
    return resultado;
}
calculate(2, '/', 3)
console.log(`O resultado é ${resultado}.`)