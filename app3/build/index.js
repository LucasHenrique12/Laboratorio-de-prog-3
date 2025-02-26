"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const func_1 = require("./func");
const permuter_1 = require("./func/permuter");
console.log("Iniciando");
let month = [
    {
        key: 'Jan',
        value: 1
    },
    {
        key: 'Feb',
        value: 2
    }
];
console.log(month);
const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = (0, func_1.reverse)(numbers);
const days = ["Seg", "Ter", "Quar", "Qui", "Sex"];
const reversedDays = (0, func_1.reverse)(days);
console.log(reversedNumbers);
console.log(reversedDays);
let disciplinas = [
    { codigo: 1, nome: "Logíca" },
    { codigo: 2, nome: "Lab3" },
    { codigo: 3, nome: "POO" },
];
const perm = new permuter_1.Permuter(disciplinas);
console.log(perm.items);
perm.permute(0, 2);
console.log(perm.items);
