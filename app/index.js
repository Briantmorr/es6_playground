
class Person{
    constructor(name){
        this.name = name;
    }
    sayHi(){
        return `Hello, my name is ${this.name}`;
    }
}

class SuperPerson extends Person{
    constructor(name, slogan){
        super(name);
        super.name = name;
        this.slogan = slogan;
    }
    sayBye(){
        console.log(this);
        return `My name is ${this.name}, good day. I say  ${this.slogan}`;
    }
    sayHi(){
        console.log('PROTO IS ', this.__proto__.sayHi());
       // return super.sayHi() + ' super me'
    }
}


const bobby = new SuperPerson('Bobby', 'Up up and bae');
console.log(bobby.sayHi());
