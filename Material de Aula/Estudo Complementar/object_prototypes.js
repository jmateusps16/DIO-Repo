// https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Object_prototypes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#using_prototypes_in_javascript
/* 
Entendendo Protótipos de objetos 
Protótipos são o mecanismo pelo qual objetos JavaScript herdam recursos uns dos outros.
*/

function Person(first, last, age, gender, interests){
    this.first = first;
    this.last = last;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}

var person1 = new Person('Bob', 'Smith', 32, 'Male', ['Music', 'Skiing']);

person1