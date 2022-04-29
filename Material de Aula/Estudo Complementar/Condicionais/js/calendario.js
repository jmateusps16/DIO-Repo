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

let selectTema = document.getElementById('tema');
let corpobody = document.querySelector('.corpo');

selectTema.onchange = function(){
    let escolhaTema = selectTema.value;

    switch(escolhaTema) {
        case '':
            update('','');
            break;

        case 'white':
            update('white','black');
            break;

        case 'black':
            update('black','white');
            break;

        case 'purple':
            update('purple','green');
            break;

        case 'yellow':
            update('yellow','black');
            break;
        
        case 'red':
            update('red','yellow');
            break;
        case 'green':
            update('green','white')
            break;
    }
}

function update(bgColor, textColor) {
    corpobody.style.backgroundColor = bgColor;
    corpobody.style.color = textColor;
}