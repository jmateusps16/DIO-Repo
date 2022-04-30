//sem nome
/* let retangolo = class {
    constructor (altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }
}; */

//nomeada
/* let retangolo = class retangulo {
    constructor (altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }
}; */

//Métodos de Protótipos
/* class retangulo {
    constructor(altura, largura) {
        this.altura = altura; this.largura = largura;
    }
    //getter
    get area() {
        return this.calculaArea()
    }

    calculaArea() {
        return this.altura * this.largura;
    }
}

const quadrado = new retangulo(10,10);

console.log(quadrado); */

//Métodos estáticos
/* class ponto {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    static distancia(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new ponto(5, 5);
const p2 = new ponto(10, 10);

p1.distancia;
p2.distancia;

console.log(ponto.distancia(p1, p2)); */

//Empacotando com protótipos e métodos estáticos
/* class = Animal {
    falar() {
        return this;
    }
    static comer() {
        return this;
    }
}

let obj = new Animal();
obj.falar();
let falar = obj.falar;
falar();

Animal.comer();
let comer Animal.comer;
comer();
*/