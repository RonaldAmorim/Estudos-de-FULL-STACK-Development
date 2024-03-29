// variáveis de controle de interface da urna
var seuVotoPara = document.querySelector('.d-1-1 span');
var cargo = document.querySelector('.d-1-2 span');
var descricao = document.querySelector('.d-1-4');
var aviso = document.querySelector('.d-2');
var lateral = document.querySelector('.d-1-right');
var numeros = document.querySelector('.d-1-3');

// variáveis de controle de ambiente (usando o etapas.js)
var etapaAtual = 0;
var numero = '';

function comecarEtapa() {
    let etapa = etapas[etapaAtual];
    let numeroHtml = '';

    for (let i = 0; i < etapa.numeros; i++) {
        if (i === 0){
            numeroHtml += '<div class="numero pisca"></div>';
        } else {
            numeroHtml += '<div class="numero"></div>';
        }
        
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}
function atualizaInterface() {
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item)=> {
            if (item.numero === nuero) {
                return true;
            } else {
                return false;
            }
        })
        if (candidato.length > 0) {
            candidato = candidato[0];
            seuVotoPara.style.display = 'block';
            aviso.style.display = 'block';
            descricao.innerHTML = `Nome: ${candidato.nome}<br>Partido: ${candidato.partido}`;

            let fotosHtml = '';
            for (let i in candidato.fotos) {
                fotosHtml += `<div class="d-1-image"><img src="images/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`
            }
            lateral.innerHTML = fotosHtml;
        }

}

function clicou(n) {
    let elNumero = document.querySelector('.numero.pisca');
    if (elNumero != null) {
        elNumero.innerHTML = n;
        numero = `${numero}${n}`

        elNumero.classList.remove('pisca');
        if (elNumero.nextElementSibling.classList != null) {
            elNumero.nextElementSibling.classList.add('pisca');
        } else {
            atualizaInterface();
        }

    }
}

function branco() {
    alert('Clicou em BRANCO');    
}

function corrige() {
    alert('Clicou em CORRIGE');
}

function confirma() {
    alert('Clicou em CONFIRMA');    
}

