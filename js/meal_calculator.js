$(document).ready(function() {

    var Person = function(guestObj) {
        this.guests = guestObj.guests; //arrays
    };

    Person.prototype.addGuests = function(total) {
        for (var i = 0; i < total; i++) {
            this.guests.push({ dish: [], cost: [] });
        };
    };

    Person.prototype.addMeal = function(person, dishName, price) {
        this.guests[person - 1].dish.push(dishName);
        this.guests[person - 1].cost.push(price);
    };

    var Dinner = function() {

        Person.call(this, { guests: [] });

        var tax = 9.75,
            tipPercent = 15;
    };

    Dinner.prototype = Object.create(Person.prototype);
    Dinner.prototype.constructor = Dinner;

    Dinner.prototype.totalDinner = function(taxAmount, tipAmount) {

        this.tip = tipAmount + "%";
        this.tax = taxAmount + "%";
        var tip = 1 + (tipAmount / 100);
        var tax = 1 + (taxAmount / 100);
        var total = 0;
        var totalPeople = this.guests.length;

        for (var i = 0; i < this.guests.length; i++) {

            for (var j = 0; j < this.guests[i].cost.length; j++) {

                total += this.guests[i].cost[j];

            };

        };
        this.totalBill = total * tax * tip;
        this.tipSplitGuests = ((tax * tip * total) - (tax * total)) / totalPeople;
        console.log(this.totalBill);
    };

    var p1 = new Person({ names: ['hot dog', 'pizza'], cost: [5, 2] });
    var p2 = new Person({ names: ['pasta'], cost: [9.45] });
    var p3 = new Person({ names: ['chow fun', 'fried rice', 'pad thai'], cost: [6.50, 7, 8] });

    var dinner = new Dinner();
    dinner.addGuests(2);
    dinner.addMeal(1, "pizza", 5);
    dinner.addMeal(2, "pie", 10);
    dinner.totalDinner(9.25, 20);

    console.log(dinner);










});
