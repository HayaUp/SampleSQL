-- SQLFiddleで実行したSQL
-- SELECT, UPDATE

-- 指定期間のレコードを表示
SELECT
    *
FROM
    FoodOrders
WHERE
    order_date BETWEEN "2022-03-01" AND "2022-03-05";

-- 結合して food_id ではなく Foods.name でレコードを表示
SELECT
    FoodOrders.id,
    Foods.name,
    FoodOrders.order_price
FROM FoodOrders LEFT JOIN Foods
    ON FoodOrders.food_id = Foods.id;

-- food_id ごとの総数、合計・最小・最大・平均価格を表示
SELECT
    food_id,
    COUNT(food_id) AS quantity,
    SUM(order_price) AS total_price,
    MIN(order_price) AS min_price,
    MAX(order_price) AS max_price,
    AVG(order_price) AS average_price
FROM
    FoodOrders
GROUP BY
    food_id;