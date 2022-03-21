-- SQLFiddleで実行したSQL
-- SELECT

-- 結合して food_id ではなく Food.name でレコードを表示
SELECT
    FoodOrders.id,
    Foods.name,
    FoodOrders.order_price
FROM FoodOrders LEFT JOIN Foods
    ON FoodOrders.food_id = Foods.id;