function Hamster() {}

// empty "stomach"

Hamster.prototype.found = function(something) {
    this.food.push(something);
};
var speedy = new Hamster();
speedy.food = [];
var lazy = new Hamster();
lazy.food = [];
speedy.found("apple");
speedy.found("nut");


console.log(speedy.food.length);
console.log(lazy.food.length);