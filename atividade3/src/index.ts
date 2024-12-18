import { selectionSort } from "./func/selectionSort";

console.log("Iniciando")

const numbers = [64, 25, 12, 22, 11];
const sortedNumbers = selectionSort(numbers, (a, b) => a - b);
console.log("Ordenado (números):", sortedNumbers); 

const strings = ["banana", "carro", "uva", "boi"];
const sortedStrings = selectionSort(strings, (a, b) => a.localeCompare(b)); 
console.log("Ordenado (strings):", sortedStrings);


type People = {
    name: string;
    age: number;
};

const peopleList: People[] = [
    { name: "Bruno", age: 25 },
    { name: "Lucas", age: 20 },
    { name: "Larissa", age: 30 }
];

const sortedPeople = selectionSort(peopleList, (a,b)=> a.age - b.age);
console.log(sortedPeople);

const sortedPeopleByName = selectionSort(peopleList,(a,b)=>a.name.localeCompare(b.name));
console.log(sortedPeopleByName);