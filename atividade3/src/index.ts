import { selectionSort } from "./func/selectionSort";

console.log("Iniciando")

const numbers = [64, 25, 12, 22, 11];
const sortedNumbers = selectionSort(numbers, (a, b) => a - b);
console.log("Ordenado (números):", sortedNumbers); 

const strings = ["banana", "apple", "grape", "orange"];
const sortedStrings = selectionSort(strings, (a, b) => a.localeCompare(b)); 
console.log("Ordenado (strings):", sortedStrings);