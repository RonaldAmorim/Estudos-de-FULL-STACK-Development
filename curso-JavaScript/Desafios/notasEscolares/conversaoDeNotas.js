/* TRANSFORMANDO NOTAS NUMÉRICAS EM NOTAS ALFABÉTICAS */

function notaAluno(nota) {
    if(nota >= 90 && nota <= 100) {
        return 'A';
    } else if(nota >= 80) {
        return 'B';
    } else if(nota >= 70) {
        return 'C';
    } else if(nota >= 60) {
        return 'D'
    } else if(nota >= 0) {
        return 'F';
    } else {
        return 'Nota inválida'
    }
}
console.log(notaAluno(101))
/* Eu deixei essa verificação incompleta para entender melhor como funciona a verificação que vai de cima para baixo, aqui no caso a nota não satisfez a primeira condição mas satisfez a segunda por isso retornou true mas não significa que á coesão e sim de coerência*/
/* Para resolver este problema pode-se colocar o operador lógico '&&' para satisfazer a duas condições simultâneas*/
/* no caso a (nota >= 80 && nota <90) e assim por diante em cada uma das verificações */
