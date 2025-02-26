class Permuter <T>{
private __items:T[];
constructor(data:T[]) {
   this.__items = [...data];
}

get items(){
return this.__items;}

permute(i:number,j:number):boolean
{
if((i<0 && i>=this.__items.length)) return false;
if((j<0 && j>=this.__items.length)) return false;

const aux={...this.__items[i]}
this.__items[i]= {...this.__items[j]}
this.__items[j]= {...aux}

return true
}

};


export{Permuter}