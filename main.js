"use strict";

function GenerateSQL() {
    const foods = [
        new Food("apple", 100, 10),
        new Food("banana", 200, 20),
        new Food("cherry", 300, 30),
    ];

    console.log(foods);
    console.log(foods[0].calculatePrice());

    document.getElementById("GenerateSQLResult").textContent = "";
}

GenerateSQL();