"use strict";

class FoodPurchaseElement {
    #purchase_date;
    #food_id        = 0;
    #purchase_price = 0;
    #quantity       = 0;

    constructor(purchase_date, food) {
        this.#purchase_date = purchase_date;
        this.#food_id = food.Id;
        this.#quantity = Math.trunc(Math.random() * 10 + 1);
        this.#purchase_price = food.calculatePrice() * this.#quantity;
    }

    generateSQL() {
        return `(${this.#purchase_date}, ${this.#food_id}, ${this.#quantity}, ${this.#purchase_price})`;
    }
}