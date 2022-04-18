//https://github.com/stebsnusch/basecamp-javascript/tree/main/debug-error

/*Todos os parâmetros são opcionais*/
/* new Error(message, filename, lineNumber);
const MeuErro = new Error('Mensagem Inválida');
throw MeuErro; */

/* Pode também adicionar o nome do erro da seguinte forma:*/

/* const MeuErro = new Error('Mensagem Inválida');
MeuErro.name = 'InvalidMessage';
throw MeuErro;

console.log(MeuErro); */

/* 
Exemplos retirados do https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error
Lançando um erro genérico 
*/

/* try {
    throw new Error('Ooops!')
} catch (e) {
    console.error(e.name + ': ' + e.message)
} */

// Capturando um erro específico

/* try {
    foo.bar()
} catch (e) {
    if (e instanceof EvalError) {
        console.error(e.name + ': ' + e.message)
    } else if (e instanceof RangeError) {
        console.error(e.name + ': ' + e.message)
    }
    //outras tratativas

    else {
    //Se nenhum dos nossos casos corresponder, deixe o erro sem tratamento
        throw e;
    }
} */

//Criando um novo erro que herda o construtor de erro através do prototype.
/* function meuErro(message) {
    this.name = 'meuErro';
    this.message = message || 'Messagem de erro padrão';
    this.stack = (new Error()).stack;
}
meuErro.prototype = Object.create(meuErro.prototype);
meuErro.prototype.constructor = meuErro;

try {
    throw new meuErro();
} catch (e) {
    console.log(e.name);
    console.log(e.message);
}

try {
    throw new meuErro('Messagem customizada');
} catch(e) {
    console.log(e.name);
    console.log(e.message);
} */

function doWork() {
    try {
        doFailSomeWay();
    } catch (err) {
        throw new Error('Failed in some way', { cause: err});
    }
    try {

    }
}