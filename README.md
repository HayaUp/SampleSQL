# SampleSQL

## Table

### Foods

- FoodId
    - INT(2)
    - PRIMARY KEY
- FoodName
    - VARCHAR(32)
- Price
    - INT(3)
- PriceRange
    - INT(3)
    - Priceに加算する値
        - 10なら1～10をPriceに加算

### FoodPurchaseList

- PurchaseId
    - INT
    - AUTO INCREMENT
- PurchaseDate
    - DATE
- FoodId
    - Foods.FoodId
- PurchasePrice
    - INT(3)
    - Foods.Price + Foods.PriceRange
- Quantity
    - INT(3)