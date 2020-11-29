function Hamster() {

    this.food = [];
    this.found = function(something) {
        this.food.push(something);
    }
};
var speedy = new Hamster();
var lazy = new Hamster();

speedy.found("apple");
speedy.found("nut");


console.log(speedy.food.length);
console.log(lazy.food.length);