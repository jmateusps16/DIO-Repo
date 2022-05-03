// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar


/* const process = require("process");

console.log("Digite 2 números inteiros separados por espaço: ")
process.stdin.on('data', (chunk) => {
    const command = chunk.toString().replace(/\n|\r/g, '');

    const [a, b] = command.split(' ').map(a=> a.trim()).map(a => parseInt(a));
   
    q = parseInt(a / b);
    
    r = a - b * q;
    
    if (r < 0) {
      r += Math.abs(b);
      
      q = (a - r) / b;    //escreva sua lógica aqui
    }
    
    console.log(q + " " + r);


    process.exit();
}) */

/* //to_do: Complete os espaços em branco com uma solução possível para o problema. */

/* for (let i = 1; i <= 5; i++) {
    let X = (i*i);
    let Y = (X*i);
  
    console.log(i + " " + X + " " + Y);
  } */

//let totalDeDias = parseInt(gets());
let totalDeDias = 400;
let qtdAnos, qtdMeses;

qtdAnos = parseInt(totalDeDias/365); // ok
dias = ((totalDeDias%365)%30);
qtdMeses= parseInt((totalDeDias%365)/30);

let resultado = (qtdAnos + " ano(s) " + '\n' + 
qtdMeses +" mes(es)" + '\n' +
dias + " dia(s)");

console.log(resultado);

// entra com a quantidade de dias e imprime 
// quantidade de anos, meses e dias (ex: 1 ano 2 meses e 5 dias)