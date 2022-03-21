"use strict";

// 初期化
document.addEventListener("DOMContentLoaded", () => {
    InitializeOrderDate();

    const sqlButton = document.getElementById("GenerateSQLButton");
    sqlButton.addEventListener("click", GenerateSQL);

    const copyButton = document.getElementById("CopyButton");
    copyButton.addEventListener("click", CopySQL);
});

/*
    注文開始・終了日の初期化
    月初と月末
*/
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

/*
    INSERT の VALUES 部分の生成
    return : StringArray
*/
function GenerateSQLInsertValues() {
    const foods = [
        new Food(1, "apple", 100, 10),
        new Food(2, "banana", 200, 20),
        new Food(3, "cherry", 300, 30),
    ];

    const currentDate = new Date(document.getElementById("StartDate").value);
    const endDate = new Date(document.getElementById("EndDate").value);
    const recordPerDay = document.getElementById("RecordPerDay").valueAsNumber;
    const foodOrders = [];

    // 開始日から終了日までのレコードを作成
    while(currentDate <= endDate) {
        for(let i = 0; i < recordPerDay; i++) {

            const foods_index = Math.trunc(Math.random() * 3);
            const foodOrder = new FoodOrder(ConvertDateToYMSString(currentDate), foods[foods_index]);
            foodOrders.push(foodOrder.GenerateSQL());
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return foodOrders.join(",\n");
}

/*
    SQL(INSERT)の生成
*/
function GenerateSQL() {

    const tableName = document.getElementById("TableName");

    let sql = `INSERT INTO ${tableName.value}\n\t (order_date, food_id, order_price)\nVALUES\n`;

    const foodOrders = GenerateSQLInsertValues();

    document.getElementById("GenerateSQLResult").textContent = `${sql}${foodOrders};`;
}

/*
    日付オブジェクトをYYYY-MM-DD形式の文字列に変換
    return : YYYY-MM-DD
    example : "2022-03-21"
*/
function ConvertDateToYMSString(date) {
    return [
        date.getFullYear(),
        String(date.getMonth() + 1).padStart(2, "0"),
        String(date.getDate()).padStart(2, "0")
    ].join("-");
}

/*
    生成したSQLをクリップボードにコピーする
*/
function CopySQL() {
    navigator.clipboard.writeText(document.getElementById("GenerateSQLResult").textContent);
}