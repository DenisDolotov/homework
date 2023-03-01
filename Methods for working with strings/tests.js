import * as StrMethods from "./StringMethods.js";

console.log(StrMethods.normalizeSpaces("Вот пример строки,в которой     используются знаки препинания   .   После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены."));
console.log(StrMethods.normalizeSpaces(""));
console.log(StrMethods.normalizeSpaces(" "));
console.log(StrMethods.normalizeSpaces(", "));

console.log(StrMethods.countUniqueWords("Текст, в котором слово текст несколько раз встречается и слово тоже"));
console.log(StrMethods.countUniqueWords(""));
console.log(StrMethods.countUniqueWords(" "));
console.log(StrMethods.countUniqueWords(", "));

console.log(StrMethods.countWords("Вот пример строки, в которой используются знаки препинания."));
console.log(StrMethods.countWords("Вот пример строки, , в которой используются знаки препинания."));
console.log(StrMethods.countWords(" "));

console.log(StrMethods.capitalizeFirstLetter("вот пример строки"));
console.log(StrMethods.capitalizeFirstLetter("вот Пример строки"));
console.log(StrMethods.capitalizeFirstLetter(""));
console.log(StrMethods.capitalizeFirstLetter(" "));