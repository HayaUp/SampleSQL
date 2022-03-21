"use strict";

// 初期化
document.addEventListener("DOMContentLoaded", () => {
    InitializeOrderDate();
});

// 注文開始・終了日の初期化
function InitializeOrderDate() {
    const today = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth() + 1, 1);
    const startDate = document.getElementById("StartDate");
    startDate.value = [
        firstDay.getFullYear(),
        String(firstDay.getMonth()).padStart(2, "0"),
        "01"
    ].join("-");

    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const endDate = document.getElementById("EndDate");
    endDate.value = [
        lastDay.getFullYear(),
        String(lastDay.getMonth() + 1).padStart(2, "0"),
        lastDay.getDate()
    ].join("-");
}

// 年月日文字列の作成
function GenerateSQL() {
    const foods = [
        new Food(1, "apple", 100, 10),
        new Food(2, "banana", 200, 20),
        new Food(3, "cherry", 300, 30),
    ];

    // const fpe = new FoodPurchaseElement("2022-03-01", foods[0])
    // console.log(fpe);
    // console.log(fpe.generateSQL());

    // document.getElementById("GenerateSQLResult").textContent = "";
}

GenerateSQL();