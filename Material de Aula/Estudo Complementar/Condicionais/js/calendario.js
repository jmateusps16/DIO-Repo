let seleciona = document.getElementById('mes');
var listaUl = document.getElementById('dias');
let verMesH1 = document.getElementById('mostraMes')
let descricaoP = document.getElementById('desc')

seleciona.onchange = function() {
    let escolha = seleciona.value;
    let dias = null;
    if (escolha === 'Fevereiro') {
        dias = 28;
    } else if (escolha === 'Abril' || escolha === 'Junho' || escolha === 'Setembro' || escolha === 'Novembro') {
         dias = 30; 
    } else if (escolha === '') {
        dias = null;
    } else {
        dias = 31;
    }
    criarCalendario(dias, escolha);
}

function criarCalendario(dias, escolha) {
    listaUl.innerHTML = '';
    verMesH1.textContent = escolha;
    if (escolha === 'Setembro') {
        descricaoP.textContent = 'Este é o mês do aniversário de Mateus.';
    }
    for (var i = 1; i <= dias; i++) {
        var listaItem = document.createElement('li');
        listaItem.textContent = i;
        listaUl.appendChild(listaItem);
    }
}

criarCalendario();

