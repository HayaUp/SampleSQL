"use strict";

function GenerateSQL() {
    const foods = [
        new Food(1, "apple", 100, 10),
        new Food(2, "banana", 200, 20),
        new Food(3, "cherry", 300, 30),
    ];

    const fpe = new FoodPurchaseElement("2022-03-01", foods[0])
    console.log(fpe);
    console.log(fpe.generateSQL());

    // document.getElementById("GenerateSQLResult").textContent = "";
}

GenerateSQL();