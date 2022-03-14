"use strict";

class Food {
    #name           = "";
    #price          = 0;
    #price_range    = 0;

    constructor(name, price, price_range) {
        this.name = name;
        this.price = price;
        this.price_range = price_range;
    }

    get Name() {
        return this.name;
    }

    calculatePrice() {
        return Math.trunc(this.price + Math.random() * this.price_range + 1);
    }
}