/* SISTEMA DE GASTOS FAMILIAR */
let receitas = [23, 12, 15];
let despesas = [10, 12, 13];
var totalReceitas = 0;
var totalDespesas = 0;

function calcularSaldo() {
    for (let i = 0; i < receitas.length; i++) {
        totalReceitas += receitas[i];
    }
    for (let i = 0; i < despesas.length; i++) {
        totalDespesas += despesas[i];
    }
}

calcularSaldo();
// Imprime o total de despesa e receita
console.log(`A despesa total é: ${totalDespesas}`);
console.log(`A receita total é: ${totalReceitas}`);
// Agora mosta o saldo total subtraindo o total de despesas do total de receitas
console.log(`O saldo final é: ${totalReceitas - totalDespesas}`);