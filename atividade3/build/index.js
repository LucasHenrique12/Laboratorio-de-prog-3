"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selectionSort_1 = require("./func/selectionSort");
console.log("Iniciando");
const numbers = [64, 25, 12, 22, 11];
const sortedNumbers = (0, selectionSort_1.selectionSort)(numbers, (a, b) => a - b); // Ordenação numérica crescente
console.log("Ordenado (números):", sortedNumbers);
const strings = ["banana", "apple", "grape", "orange"];
const sortedStrings = (0, selectionSort_1.selectionSort)(strings, (a, b) => a.localeCompare(b)); // Ordenação alfabética
console.log("Ordenado (strings):", sortedStrings);
