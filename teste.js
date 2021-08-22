// RECURSIVIDADE
function fatorial(n) {
   if (n == 1) {
      return 1
   } else {
      return n * fatorial(n-1) // dentro dela, possui uma chamada para ela mesma.
   }
}
console.log(fatorial(5))

/* O fatorial de um 'n' pode ser calculado com base no fatorial de outro 'n':
* 5! = 5*4*3*2*1
* 5! = 5*4!
* n! = n*(n-1)!
* Exceto para o fatorial de 1 que é sempre 1, aí não se aplica essa fórmula. E aí vc já usa o if pra não ter problema,.
*/