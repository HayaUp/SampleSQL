"use strict";

class FoodOrder {
    #order_date;
    #food_id        = 0;
    #order_price    = 0;

    constructor(order_date, food) {
        this.#order_date    = order_date;
        this.#food_id       = food.Id;
        this.#order_price   = food.Price;
    }

    GenerateSQL() {
        return `(${this.#order_date}, ${this.#food_id}, ${this.#order_price})`;
    }
}