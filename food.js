"use strict";

class Food {
    #id             = 0
    #name           = "";
    #price          = 0;
    #price_range    = 0;

    constructor(id, name, price, price_range) {
        this.#id = id;
        this.#name = name;
        this.#price = price;
        this.#price_range = price_range;
    }

    get Id() {
        return this.#id;
    }

    get Name() {
        return this.#name;
    }

    calculatePrice() {
        return Math.trunc(this.#price + Math.random() * this.#price_range + 1);
    }
}