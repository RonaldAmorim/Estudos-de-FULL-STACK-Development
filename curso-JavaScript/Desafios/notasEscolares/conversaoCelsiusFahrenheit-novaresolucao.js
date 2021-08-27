function transformDegree(degree) {
    // verificando se dentro da função chamada tem incluído as letra correspondentes
    const celsiusExists = degree.toUpperCase().includes('C');
    const fahrenheit = degree.toUpperCase().includes('F');

    let updateDegree;
    let formula;
    let degreeSign

    if (!celsiusExists && !fahrenheit) {
        throw new Error('Grau não identificado digite c para celsius ou f para fahrenheit') // já sai fora do programa e jona na exceção do erro
    } else if (fahrenheit) {
        // Fluxo de Fahrenheit para Celsius
        updateDegree = Number(degree.toUpperCase().replace("F", "")) // vai pegar o grau '50f' e retirar a letra para converter tudo para núemro para poder fazer o cálculo depois
        formula = (fahrenheit) => (fahrenheit -32) * 5/9; // arrow function
        degreeSign = 'C'        
    } else {
        // Fluxo de Fahrenheit para Celsius
        updateDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => (celsius * 9/5) + 32; // Arrow function
        degreeSign = 'F';
    }
    return formula(updateDegree) + degreeSign;
}

// Para pegar o erro
try {
    // aqui chamando a função para 3 testes
    console.log(transformDegree('50f'));
    console.log(transformDegree('10c'));
    console.log(transformDegree('30z'));
} catch (error) {
    console.log(error.message);
}