export class Product {
    constructor(name, price, quantity, description) {
        this._name = name;
        this._price = price;
        this._quantity = quantity;
        this._description = description;
    }
    getName() {
        return this._name;
    }
    getPrice() {
        return this._price;
    }
    getQuantity() {
        return this._quantity;
    }
    getDescription() {
        return this._description;
    }
    toString() {
        return `name: "${this._name}", price: ${this._price}, quantity: ${this._quantity}, description: "${this._description}"`;
    }
    
}