# SampleSQL

## 何のためのプロジェクトか

- 適度にSQL(MySQL)を使えることを伝えたい
    - INSERT
    - SELECT
    - UPDATE
    - DELETE

## SQLの実行結果を確認する環境

- SQL Fiddle
    - http://sqlfiddle.com/

## HTMLファイルやJSファイルの役割

- INSERT で使う文字列を生成する
    - ※手打ちで作成するのに手間がかかるため

## Table

- 練習として使うテーブル
    - Food
    - FoodOrders

### Food

- id
    - INT(2)
    - PRIMARY KEY
- name
    - VARCHAR(32)
- price
    - INT(3)
- price_range
    - INT(3)
    - priceに加算する値、値幅
        - 10なら1～10をpriceに加算

### FoodOrders

- id
    - INT(3)
    - AUTO INCREMENT
- order_date
    - DATE
    - YYYY-MM-DD
- food_id
    - food.id
- order_price
    - INT(3)
    - food.price + food.price_range

## 参考

- MySQL 8.0 リファレンスマニュアル / データ型
    - https://dev.mysql.com/doc/refman/8.0/ja/data-types.html