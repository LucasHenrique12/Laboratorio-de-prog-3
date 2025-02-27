"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selectionSort_1 = require("./func/selectionSort");
console.log("Iniciando");
const numbers = [64, 25, 12, 22, 11];
const sortedNumbers = (0, selectionSort_1.selectionSort)(numbers, (a, b) => a - b);
console.log("Ordenado (números):", sortedNumbers);
const strings = ["banana", "maçã", "uva", "laranja"];
const sortedStrings = (0, selectionSort_1.selectionSort)(strings, (a, b) => a.localeCompare(b));
console.log("Ordenado (strings):", sortedStrings);
const people = [
    { name: "Bruno", age: 25 },
    { name: "Lucas", age: 20 },
    { name: "Larissa", age: 30 }
];
const compareByAge = (a, b) => a.age - b.age;
const sortedPeople = (0, selectionSort_1.selectionSort)(people, (a, b) => a.age - b.age);
console.log(sortedPeople);
const sortedPeopleByName = (0, selectionSort_1.selectionSort)(people, (a, b) => a.name.localeCompare(b.name));
console.log(sortedPeopleByName);
