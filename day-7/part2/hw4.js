function Hamster() {

    this.food = [];
    this.found = function(something) {
        this.food.push(something);
    }
};
var speedy = new Hamster();
var lazy = new Hamster();

speedy.found("apple");
lazy.found("nut");


console.log(speedy.food.length);
console.log(lazy.food.length);