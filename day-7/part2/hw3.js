function CoffeeMachine(power) {
    var waterAmount = 0;
    var WATER_HEAT_CAPACITY = 4200;

}

function getTimeToBoil() {
    return this.waterAmount * this.WATER_HEAT_CAPACITY * 80 / this.power;
}
CoffeeMachine.prototype.run = function() {
    setTimeout(function() {
        console.log('Coffee is ready!');
    }, getTimeToBoil());
};
CoffeeMachine.prototype.setWaterAmount = function(amount) {
    waterAmount = amount;
};

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();