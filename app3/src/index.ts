import {TDisciplina, TPair} from './type';
import { reverse } from './func';
import { Permuter } from './func/permuter';

console.log("Iniciando")

let month:TPair<string,Number>[]=[

{
   key:'Jan',
   value:1
},
{
   key:'Feb',
   value:2
}
];

console.log(month)

const numbers: number[] = [1, 2, 3, 4, 5];
const reversedNumbers: number[] = reverse(numbers);

const days: string[] = ["Seg","Ter","Quar","Qui","Sex"];
const reversedDays: string[] = reverse(days);

console.log(reversedNumbers)
console.log(reversedDays)

let disciplinas:TDisciplina[] = [
   {codigo:1,nome:"Logíca"},
   {codigo:2,nome:"Lab3"},
   {codigo:3,nome:"POO"},
];

const perm = new Permuter(disciplinas);

console.log(perm.items)
perm.permute(0,2)

console.log(perm.items)
