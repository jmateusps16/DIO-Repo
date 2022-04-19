/* const meuCabecalho = document.querySelector('h1');
meuCabecalho.textContent = 'Ola mundo!'; */
/* let sorvete = 'chocolate';
    if (sorvete === 'chocolate') {
    alert('Opa, Eu amo sorvete de chocolate!');
    } else {
        alert('Ahh, mas chocolate é meu favorito...');
        } */

/* let minhaVariavel = document.querySelector('h1');
alert(minhaVariavel.textContent); */

/* function multiplica(num1,num2){
    let resultado = num1 * num2;
    return resultado;
}

document.querySelector('html').onclick = function() {
    alert('Ai! Para de me catucar!');
} */

let minhaImagem = document.querySelector('img');
minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if (meuSrc === 'img/340050.jpg') {
        minhaImagem.setAttribute ('src', 'img/340054.jpg');
    } else {
        minhaImagem.setAttribute ('src', 'img/340050.jpg');
    }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

//Neste exemplo ele aceitaria dados nulo ou vazios.
/* function defineNomeUsuario(){
    let meuNome = prompt('Por favor, digite seu nome.');
    localStorage.setItem('nome', meuNome);
    meuCabecalho.textContent = 'Mozilla é legal, ' + meuNome;
} */

function defineNomeUsuario(){
    let meuNome = prompt('Por favor, digite seu nome.');
    if(!meuNome || meuNome === null) {
        defineNomeUsuario();
    } else {
        localStorage.setItem('nome', meuNome);
        meuCabecalho.innerHTML = 'Mozilla é legal, ' + meuNome;
    }
}

if(!localStorage.getItem('nome')) {
    defineNomeUsuario();
} else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Mozilla é legal, ' + nomeGuardado;
}

meuBotao.onclick = function() { defineNomeUsuario(); }