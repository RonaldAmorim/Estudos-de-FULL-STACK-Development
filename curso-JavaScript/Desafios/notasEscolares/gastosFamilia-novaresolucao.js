let family = {
    incomes: [3100,200,250.43,360.45],
    expenses: [320.34,128.45,176.87,1450.00],
}

// uma função só para somar cada uma delas

function sum(array) {
    let total = 0;

    for (let value of array) {
        total += value
    }

    return total;
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes);
    const calculateExpenses = sum(family.expenses);
    const total = calculateIncomes - calculateExpenses;
    return total;
}

// notar que na impressão já convertemos o valor para duas casas decimais na chamada da função
console.log(`O saldo é de R$ ${calculateBalance().toFixed(2)}`)