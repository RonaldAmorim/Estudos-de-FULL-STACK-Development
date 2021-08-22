function contar(){
    var txti = document.getElementById('txti');
    var txtf = document.getElementById('txtf');
    var txtp = document.getElementById('txtp');
    var res = document.getElementById('res');

    if (txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0){
        alert('Erro: faltam dados!');
    }else{
        res.innerHTML = 'Contando: '
        let i = Number(txti.value);
        let f = Number(txtf.value);
        let p = Number(txtp.value);

        if (i < f){
            for(let contador = i; contador <= f; contador += p){
                res.innerHTML += `${contador}`
            }
        } else {
            for(let contador = f; contador <= i; contador += p) {
                res.innerHTML += `${contador}`
            }
        }
    }    
}