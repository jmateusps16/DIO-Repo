//Exemplo cat (1)
/* var cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
var info = 'My casts are called ';
var para = document.querySelector('p');

// com o for
//for (var i = 0; i < cats.length; i++) {
//    info += cats[i] + ', ';
//}

//com while
var i = 0;

//while (i < cats.length) {
//    if (i === cats.length - 1) {
//        info += 'and ' + cats[i] + '.';
//    } else {
//        info += cats[i] + ', ';
//    }
//    i++;
//}

do {
    if (i === cats.length -1) {
        info += 'and ' + cats[i] + '.';
    } else {
        info += cats[i] + ', ';
    }

    i++;
} while (i < cats.length);

para.textContent = info; */

//com do while


//Exemplo busca (2)
/* var contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
var para = document.querySelector('p');
var input = document.querySelector('input');
var btn = document.querySelector('button');

btn.addEventListener('click', function() {
    var searchName = input.value;
    input.value = '';
    input.focus();
    for (var i = 0; i < contacts.length; i++) {
        var splitContact = contacts[i].split(':');
        if (splitContact[0] === searchName) {
            para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
            break;
        } else {
            para.textContent = 'Contact not found.';
        }
    }
}) */

var output = document.querySelector('.output');
output.innerHTML = '';

var i = 10;

while(i >= 0) {
    var para = document.createElement('p');
    if (i === 10) {
        para.textContent = 'Contagem regressiva ' + i;
    } else if (i === 0) {
        para.textContent = 'Lançar!';
    } else {
        para.textContent = i;
    }
    output.appendChild(para);

    i--;
}