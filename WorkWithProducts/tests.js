import { Product } from "./Product.js";
import { productFilter } from "./searchProduct.js";

let products = [
    new Product("apple", 60, 10, "sweet and juicy, red"),
    new Product("banana", 25, 12, "yellow and long"),
    new Product("pineapple", 40, 5, "very sweet and bit sour"),
    new Product("orange", 100, 20, "red inside, very delicious"),
    new Product("grape", 120, 5, "sweet and green"),
    new Product("mango", 30, 30, "very delicious, sweet"),
    new Product("cherry", 150, 9, "red and sweet"),
    new Product("peach", 120, 4, "healthy, contains a lot of vitamin c"),
    new Product("melon", 30, 14, "not only low in calories and fat, but they are also high in essential vitamins and minerals, and water content"),
];
let filter = "name-contains-ap&price->40&quantity->4&description-contains-and";
console.log(filter);
productFilter(products, filter).forEach((x) => console.log(x.toString()));
console.log("---------------------------");
filter = "price->=100";
console.log(filter);
productFilter(products, "price->=100").forEach((x) => console.log(x.toString()));
console.log("---------------------------");
filter = "description-contains-sweet";
console.log(filter);
productFilter(products, filter).forEach((x) => console.log(x.toString()));
