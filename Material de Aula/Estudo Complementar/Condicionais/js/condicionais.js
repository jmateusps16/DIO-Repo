// https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals

// exemplo (1)
/* var comprasFeitas = false;

if (comprasFeitas === true) {
    var granaFilhote = 10;
} else {
    var granaFilhote = 5;
} */

// Código com operadores if else
/* let select = document.querySelector('select');
let para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
    let choice = select.value;

    if (choice === 'sunny') {
        para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
    } else if (choice === 'rainy') {
        para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
    } else if (choice === 'snowing') {
        para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
    } else if (choice === 'overcast') {
        para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
    } else {
        para.textContent = '';
    }
} */

// exemplo (2)
/* let cheese = 'Cheddar';

if (cheese) {
    console.log('Yay! Cheese available for making cheese on toast.');
} else {
    console.log('No cheese on toast for you today.');
} */

// exemplo (1) reescrito de outra forma onde não precisa especificar explicitamente '=== true'
/* let shoppingDone = false;

if (shoppingDone) { //não precisa especificar explicitamente '=== true'
    let childsAllowance = 10;
} else {
    let childsAllowance = 5;
} */

// aninhamento do if .... else
/* if (choice === 'sunny') {
    if (temperature < 86) {
        para.textContent = 'It is ' + temperature + ' degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.';
    } else if (temperature >= 86) {
        para.textContent = 'It is ' + temperature + 'degrees outside — REALLY HOT! If you want to go outside, make sure to put some suncream on.';
    }
} */

//Operadores AND, OR e NOT
// AND
/* if (choice === 'sunny' && temperature < 86) {
    para.textContent = 'It is ' + temperature + ' degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.';
} else if (choice === 'sunny' && temperature >= 86) {
    para.textContent = 'It is ' + temperature + ' degrees outside — REALLY HOT! If you want to go outside, make sure to put some suncream on.';
*/
//OR
/* if (iceCreamVanOutside || houseStatus === 'on fire') {
    console.log('You should leave the house quickly.');
} else {
    console.log('Probably should just stay in then.');
} */

//NOT
/* if (!(iceCreamVanOutside || houseStatus === 'on fire')) {
    console.log('Probably should just stay in then.');
} else {
    console.log('You should leave the house quickly.');
} */

//Varias expressões
/* if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === 'Steve')) {
    //run the code
} */

//Código com o switch
let select = document.querySelector('select');
let para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
    let choice = select.value;

    switch (choice) {
        case 'sunny':
            para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
            break;
        case 'rainy':
            para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
            break;
        case 'snowing':
            para.textContent = 'The snow is coming down - it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
            break;
        case 'overcast':
            para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
            break;
        default:
            para.textContent = '';
    }
}

//Operador ternário