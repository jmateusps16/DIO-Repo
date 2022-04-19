/* function validaArray(arr, num) {
    try {
            if (!arr && !num) throw new ReferenceError('Envie os parâmetros!');

            if (typeof arr !== 'object')
                    throw new TypeError('Envie um elemento do tipo Array!');
            
            if (typeof num !== 'number')
            throw new TypeError('Envie um elemento do tipo Number!');

            if (arr.length !== num) throw new RangeError('Tamanho do Array inválido!');

            return arr;
    } catch (e) {
        if (e instanceof RangeError) {
                console.log('RangeError!');
                console.log(e.stack);
        } else if (e instanceof ReferenceError) {
                console.log('ReferenceError!');
                console.log(e.stack);
        } else {
                console.log('Outro tipo de erro!');
                console.log(e.stack);
        }
    }
}

console.log(validaArray([1, 2 , 3, 4, 5], a)); */

//Async e Await
/* PROMISES - Manipulação */
/* const myPromise = new Promise((resolve, reject) => {window.setTimeout(() => {resolve('Resolvida');}, 2000);});

await myPromise
        .then((result) => result + ' passando pelo then')
        .then((result) => result + ' e agora acabou!')
        .catch((err) => console.log(err.message)); */

async function resolvePromise() {
        const myPromise => new Promise((resolve, reject) => {
                window.setTimeout(() => {
                        resolve('Resolvida');
                }, 3000);
        });

        const resolved = await myPromise
                .then((result) => result + ' passando pelo then')
                .then((result) => result + ' e agora acabou!')
                .catch((err) => console.log(err.message));

        return resolved;
}
