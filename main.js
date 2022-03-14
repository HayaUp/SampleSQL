"use strict"

function GenerateSQL() {
    const foods = [
        {
            "name" : "apple",
            "price" : 100,
            "price_range" : 10
        },
        {
            "name" : "banana",
            "price" : 200,
            "price_range" : 20
        },
        {
            "name" : "cherry",
            "price" : 300,
            "price_range" : 30
        },
    ];

    console.log(foods);

    document.getElementById("GenerateSQLResult").textContent = "";
}

GenerateSQL();